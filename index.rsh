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
  errorGenericInvalidAmounts: Fun([], Null),
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

  // Unneeded but for the sake of sanity.
  assert(validationOnly == !executeTransfers);
  assert(oTotal > 0);

  if(validationOnly){
    assert(initialBalance == 0);
  } else {
    assert(initialBalance > 0);
  }

  const balInv = (ib, tat, vo) => balance() == (vo ? balance() : ib - tat); 
  
  var [amtRemaining, totalAmtTransferred, recipientIdx, foundNonpositive] = [oTotal, 0, 0, false] 
  invariant(amtRemaining == oTotal - totalAmtTransferred && balInv(initialBalance, totalAmtTransferred, validationOnly))
  while(recipientIdx < recips.length && !foundNonpositive) { 
    const recipient = recips[recipientIdx];   
    const amt = recipient.amtToReceive;

    if(validationOnly) {
      if(amt <= 0) {
        commit();
        Anybody.publish();
        foundNonpositive = true;
        continue;
      }
    } else { 
      transfer(recipient.amtToReceive).to(recipient.address);
    }

    commit();
    Anybody.publish(); 

    [amtRemaining, totalAmtTransferred, recipientIdx] = [
      amtRemaining - amt,  
      totalAmtTransferred + amt,
      recipientIdx + 1, 
    ];

    continue;
  }

  if(validationOnly) {
    const balanceExceeded = totalAmtTransferred > balance() || totalAmtTransferred > oTotal;
    const insufficientAmtTransferred  = totalAmtTransferred < oTotal;

    if(foundNonpositive || balanceExceeded || insufficientAmtTransferred) {
      return false;
    } else {
      return true;
    }
  }
}

export const main = Reach.App(
  {}, [ ParticipantClass('Buyer', BuyerInterface) ],
  (Buyer) => {
    Anybody.publish();

    const [ keepGoing ] =
      parallelReduce( [true] )
        .invariant(balance() == balance())
        .while(keepGoing)
        .case(Buyer, 
          (() => {
            const [orderTotal, recipients] = declassify([
              interact.orderTotal, 
              interact.getRecipients()
            ]);
            
            const positiveTotal = orderTotal > 0;
            const positiveRecips = recipients.length > 0;

            if(!positiveTotal || !positiveRecips) {
              interact.errorGenericInvalidAmounts();
            } else {
              assert(orderTotal > 0);
              assert(recipients.length > 0);
            }

            return {
              when: positiveTotal && positiveRecips
            }
          }),
          () => {
            commit();

            Buyer.only(() => {
              const [orderTotal, recipients] = declassify([
                interact.orderTotal, 
                interact.getRecipients()])
            });
            Buyer.publish(orderTotal, recipients);

            const shouldPayRecipients = payAmts(recipients, orderTotal, 0, false);

            if(!shouldPayRecipients) {
              Buyer.only(() => declassify(interact.errorGenericInvalidAmounts()));
            } else {  
              // Unneeded but for the sake of sanity.
              assert(shouldPayRecipients == true);
              
              commit();
              Buyer.publish().pay(orderTotal); 
              payAmts(recipients, orderTotal, balance(), true);
            }

            return [true]; 
          })
        .timeout(1000000000, () => { return [false] });
  
    commit();
  }
);