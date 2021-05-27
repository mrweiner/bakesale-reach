"reach 0.1";
/**
 * Situation:
 *  - Bakesale manages the smart contract
 *  - Merchants list a product for sale
 *  -- They allocated x% to y beneficiaries.
 *  - Buyer pays for their order
 *  - Contract distributes funds between
 *  -- Bakesale
 *  -- Merchants
 *  -- Beneficiaries
 */
/**
 * Problem Analysis:
 * Who is involved in this application?
 *  - Bakesale: Initiates the application
 *  - Bakesale tax account: Receives taxes
 *  - Buyer: Deposits funds
 *  - Merchants: Receive funds, designate beneficiaries
 *  - Beneficiaries: Receive funds
 *
 * What information do they know at the start of the program?
 *  - Nobody knows anything
 *
 * What information are they going to discover and use in the program?
 *  - Buyer: Learn their order total and deposit funds
 *
 * What funds change ownership during the application and how?
 *  - Buyer: Spends all of their funds into the contract
 *  - Bakesale: Receives 5% of pre-tax funds
 *  - Bakesale tax account: Receives 100% of taxes
 *  - Beneficiaries: Receive their percentage of order subtotal (ie without tax or shipping)
 *  - Merchant(s): Receive subtotal minus beneficiary% + shipping
 */
//
// Complex workflow
// 1. Bakesale inializes the contract
// 2a. Buyer discovers the order total, subtotal, tax, shipping data, and item(s) data
// 2b. Associated data should be a list of every individual product.
//     Product needs to have
//     - Its own total cost
//     - Its own merchant wallet and percentage
//     - List of beneficiary wallets and percentages
// 2c. Buyer publishes the order total, shipping, tax and all product data
// 2d. Buyer deposits order total into the contract
// 3. Pay taxes to Bakesale Tax Account
// 4a. Loop over every item
// 4b. Pay 5% of item total to bakesale
// 4c. Pay x% to each beneficiary ????
// 4d. Pay remainder to the merchant
//

const RecipientInterface = {
  address: Address,
  amtToReceive: UInt,
};

const errors = {
  errorInvalidOrderTotal: Fun([], Null),
  errorAmountsExceedBalance: Fun([], Null),
  errorInvalidRecipientAmounts: Fun([], Null),
}

// Buyer.only(() => declassify(interact.errorInvalidRecipientAmounts()))

 
const BuyerInterface = {
  orderTotal: UInt,
  // https://docs.reach.sh/ref-programs-compute.html#%28reach._%28%28.Maybe%29%29%29
  // getRecipients: Fun([], Array(Maybe(Object(RecipientInterface)), 5)),
  getRecipients: Fun([], Array(Object(RecipientInterface), 1)),
  messagePaidRecipient: Fun([Address, UInt], Null),
  ...errors
};

export const main = Reach.App(
  {}, [ Participant('Buyer', BuyerInterface) ],
  (Buyer) => {
    Buyer.only(() => {
      const [orderTotal, recipients] = declassify([
        interact.orderTotal, 
        interact.getRecipients()])
    });
    Buyer.publish(orderTotal, recipients);
    assert(recipients.length > 0);

    if(orderTotal <= 0) {
      Buyer.only(() => declassify(interact.errorInvalidOrderTotal()))
    } else {
      assert(orderTotal > 0);

      /**
       * Validate the transfer amounts or execute the transfers.
       * 
       * @param {RecipientInterface[]} recips - The recipients to validate/execute against. 
       * @param {Number} oTotal - The orderTotal. 
       * @param {Number} initialBalance - The balance() at the time of execution. 
       * @param {Bool} executeTransfers - Whether or not to transfer funds. If false, function will only validate. 
       * @returns {Bool|Null} - Bool result of validation, or nothing, based on executeTransfers.
       */ 
      const payAmts = (recips, oTotal, initialBalance, executeTransfers) => { 
        const validationOnly = !executeTransfers; 
        assert(validationOnly == !executeTransfers);
        assert(oTotal > 0);

        if(validationOnly){
          assert(initialBalance == 0);
        } else {
          assert(initialBalance > 0);
        }

        const balInv = (ib, tat, vo) => balance() == (vo ? ib : ib - tat); 

        var [amtRemaining, totalAmtTransferred, recipientIdx, foundNonpositive] = [oTotal, 0, 0, false] 
        invariant(amtRemaining == oTotal - totalAmtTransferred && balInv(initialBalance, totalAmtTransferred, validationOnly))
        while(recipientIdx < recips.length && foundNonpositive) { 
          const recipient = recips[recipientIdx];   
          const amt = recipient.amtToReceive;

          if(validationOnly) {
            if(amt <= 0) {
              foundNonpositive = true;
              continue;
            }
          } else { 
            assert(amt > 0);
            transfer(recipient.amtToReceive).to(recipient.address);
            commit();
            Anybody.publish(); 
          }

          const newTotalAmtTransferred = totalAmtTransferred + amt;
          [amtRemaining, totalAmtTransferred, recipientIdx] = [
            amtRemaining - amt,  
            newTotalAmtTransferred,
            recipientIdx + 1, 
          ];

          continue;
        }

        if(validationOnly) {
          if(!foundNonpositive) {
            return false;
          } else {
            return totalAmtTransferred == oTotal;
          }
        }
      }

      const iBal = balance(); 
      const shouldPayRecipients = payAmts(recipients, orderTotal, iBal, false)

      if(!shouldPayRecipients) {
        Buyer.only(() => declassify(interact.errorAmountsExceedBalance()));
      } else {  
        commit();
        Buyer.publish().pay(orderTotal); 
        payAmts(recipients, orderTotal, balance(), true);
      }
    }
  

    commit();
  }
);