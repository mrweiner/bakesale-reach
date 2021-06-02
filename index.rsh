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
  addr: Address,
  amtToReceive: UInt,
};

const errors = {
  errorInvalidOrderTotal: Fun([], Null),
  errorAmountsExceedBalance: Fun([], Null),
  errorInvalidRecipientAmounts: Fun([], Null),
  errorGenericInvalidAmounts: Fun([], Null),
}
 
const BuyerInterface = {
  orderTotal: UInt,
  // https://docs.reach.sh/ref-programs-compute.html#%28reach._%28%28.Maybe%29%29%29
  // getRecipients: Fun([], Array(Maybe(Object(RecipientInterface)), 5)),
  getRecipients: Fun([], Array(Object(RecipientInterface), 1)),
  messagePaidRecipient: Fun([Address, UInt], Null),
  ...errors
};

/**
 * Validates that recipients and associated transfer amts are valid.
 * 
 * @param {RecipientInterface[]} recips - The recipients. 
 * @param {Number} oTotal - The orderTotal. 
 * @returns {Bool} The result of the validation.`
 */
 const recipientsDataIsValid = (recips, oTotal) => {
  const allValsPositive = recips.reduce(true, (z, x) => !z ? z : x.amtToReceive <= 0);
  const totalTransfer = recips.reduce(0, (z, x) => z + x.amtToReceive);
  
  return allValsPositive && totalTransfer == oTotal
}


/**
 * Validate the transfer amounts or execute the transfers.
 * 
 * @param {RecipientInterface[]} recips - The recipients. 
 * @param {Number} oTotal - The orderTotal. 
 * @param {Number} initialBalance - The balance() at the time of execution. 
 * @returns {Bool|Null} - Bool result of validation, or nothing, based on executeTransfers.
 */ 
const payAmts = (recips, oTotal, initialBalance) => { 
  assert(oTotal > 0);
  assert(initialBalance > 0);
  
  var [amtRemaining, totalAmtTransferred, recipientIdx] = [oTotal, 0, 0] 
  invariant(amtRemaining == oTotal - totalAmtTransferred &&  balance() == initialBalance - totalAmtTransferred)
  while(recipientIdx < recips.length) { 
    const recipient = recips[recipientIdx];   
    const amt = recipient.amtToReceive;

    transfer(recipient.amtToReceive).to(recipient.addr);
    commit();
    Anybody.publish(); 

    [amtRemaining, totalAmtTransferred, recipientIdx] = [
      amtRemaining - amt,  
      totalAmtTransferred + amt,
      recipientIdx + 1, 
    ];

    continue;
  }
}

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
      // Unneeded but for the sake of sanity.
      assert(orderTotal > 0);

      const shouldPayRecipients = recipientsDataIsValid(recipients, orderTotal);

      if(!shouldPayRecipients) {
        Buyer.only(() => declassify(interact.errorGenericInvalidAmounts()));
      } else {  
        // Unneeded but for the sake of sanity.
        assert(shouldPayRecipients == true);
        
        commit();
        Buyer.publish().pay(orderTotal); 
        payAmts(recipients, orderTotal, balance());
      }
    }
  

    commit();
  }
);