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

// ========================================================
// Constants
// ========================================================

// Since reach cannot really handle floating point numbers.
const BAKESALE_FEE_PERCENT = 5; 
const BASESALE_FEE_MULTIPLE = BAKESALE_FEE_PERCENT / 100;
const MAYBE_ARR_LENGTH = 5;


// ========================================================
// Primary Objects & Their Fakers
// ========================================================

/**
 * The beneficiary of a particular item.
 */
const Beneficiary = {
  addr: Address,
  percentToReceive: UInt,
};

/**
 * Create a fake benficiary.
 * 
 * @param addr
 *   The fake address. Should be the buyer. 
 * @returns 
 *   The fake Beneficiary.
 */
const createFakeBeneficiary = (addr) => {
  return createIsReal(false, {
    addr,
    percentToReceive: 0}
  );
}

/**
 * An order line item.
 */
const LineItem = {
  totalCost: UInt, // The unit price * qty
  shipping: UInt,
  tax: UInt,
  beneficiaries: Array(Maybe(Object(Beneficiary)), MAYBE_ARR_LENGTH)
}

/**
 * Create a fake LineItem.
 * 
 * @param addr
 *   The fake address. Should be the buyer. 
 * @returns 
 *   The fake LineItem.
 */
const createFakeLineItem = (addr) => {
  return createIsReal(false, {
    totalCost: UInt, // The unit price * qty
    shipping: UInt,
    tax: UInt,
    beneficiaries: Array.iota(MAYBE_ARR_LENGTH).map(() => createFakeBeneficiary(buyer))}
  );
}

/**
 * Array of order line items for a particular merchant.
 */
const MerchantItem = {
  addr: Address,
  lineItems: Array(Maybe(Object(LineItem)), MAYBE_ARR_LENGTH)
}

/**
 * Create a fake MerchantItems.
 * 
 * @param addr
 *   The fake address. Should be the buyer. 
 * @returns 
 *   The fake MerchantItems obj.
 */
 const createFakeMerchantItems = (addr) => {
  return createIsReal(false, {
    addr: Address,
    lineItems: Array.iota(MAYBE_ARR_LENGTH).map(() => createFakeLineItem(buyer))}
  );
 } 

/**
 * The order data for which payment is processed.
 */
const OrderData = {
  orderTotal: UInt,
  merchantItems: Array(Maybe(Object(MerchantItem)), MAYBE_ARR_LENGTH),
}


// ========================================================
// Repair Functions
// ========================================================

/**
 * Create an "isReal" version of an object.
 * 
 * @param {object} x
 *   The object to clarify as real. 
 * @param {bool} state
 *   Whether or not the object is real.
 * @returns {object}
 *   The initial object with an isReal prop added.
 */
const createIsReal = (state, x) => ({
  isReal: state,
  ...x
});

/**
 * Convert Array(Maybe(Object(Beneficiary)) to usable [Object].
 * 
 * @param {Array(Maybe(Object(Beneficiary))} beneficiaries
 *   The array of maybe beneficiaries.
 * @param buyer 
 *   The address to be used for the fakes.
 * @returns 
 *   Array of usable "isReal" beneficiaries
 */
 const repairBeneficiaries = (beneficiaries, buyer) => {
  return beneficiaries.map((x) => {
    return fromMaybe(x,
      (() => createFakeBeneficiary(buyer)), 
      ((y) => createIsReal(true, y))
    ); 
  })
}

/**
 * Convert Array(Maybe(Object(LineItem)) to usable [Object].
 * 
 * @param {Array(Maybe(Object(LineItem))} lis
 *   The array of maybe LineItems.
 * @param buyer 
 *   The address to be used for any fake addresses.
 * @returns 
 *   Array of usable "isReal" LineItems
 */
const repairLineItems = (lis, buyer) => {
  return lis.map((x) => {
    return fromMaybe(x,
      (() => createFakeLineItem(buyer)), 
      ((y) => createIsReal(true, y))
    ); 
  })
}

/**
 * Convert Array(Maybe(Object(MerchantItems)) to usable [Object].
 * 
 * @param {Array(Maybe(Object(MerchantItems))} mis
 *   The array of maybe LineItems.
 * @param buyer 
 *   The address to be used for any fake addresses.
 * @returns 
 *   Array of usable "isReal" LineItems
 */
const repairMerchantItems = (mis, buyer) => {
  return mis.map((x) => {
    return fromMaybe(x,
      (() => createFakeMerchantItems(buyer)), 
      ((y) => createIsReal(true, y))
    ); 
  })
}

/**
 * Repair the entire orderData's tree.
 * 
 * @param {OrderData} orderData
 *   The order data to be repaired. 
 * @param {Address} buyer 
 *   The order's buyer.
 * 
 * @returns {OrderData}
 *   The repaired OrderData. 
 */
const repairOrderData = (orderData, buyer) => {
  const merchantItemsRaw = orderData.merchantItems.reduce([], (miRaw, x) => {
    // Repairing LineItems for single MerchantItem
    const lineItemsRaw = x.reduce([], (liRaw, y) => {
      // Repairing Benficiaries for a single LineItem
      const beneficiariesRepaired = repairBeneficiaries(liRaw.beneficiaries, buyer);

      return {
        totalCost: y.totalCost, // The unit price * qty
        shipping: y.shipping,
        tax: y.tax,
        beneficiaries: beneficiariesRepaired
      }
    });
    const lineItemsRepaired = repairLineItems(lineItemsRaw, buyer);
    
    return {
      addr: miRaw.addr,
      lineItems: lineItemsRepaired
    }
  });

  const merchantItemsRepaired = repairMerchantItems(merchantItemsRaw, buyer);
  return {
    orderTotal: orderData.orderTotal,
    merchantItems: merchantItemsRepaired 
  }
}


// ========================================================
// Order Validation
// ========================================================

/**
 * 
 * @param orderData 
 * @param buyer 
 */
const validateOrder = (orderData, buyer) => {
  const positiveOrderTotal = orderData.orderTotal > 0;
  const orderTotalCalcd = orderData.merchantItems.reduce(0, (oTotal, x) => {
    const merchantTotal = x.lineItems.reduce(0, (mTotal, y) => mTotal + y.totalCost);
    return oTotal + merchantTotal;
  });

  const orderTotalsMatch = positiveOrderTotal == orderTotalCalcd;

  // All amounts on the order must be >= 0.
  const allAmtsNonNegative = orderData.merchantItems.reduce(true, (isPositive, x) => {
    const merchantAmtsPositive = x.lineItems.reduce(0, (mTotal, y) => {
      const totalCostValid = y.isReal ? y.totalCost > 0 : y.totalCost == 0
      return totalCostValid 
        && y.shipping >= 0
        && y.tax >= 0
    });

    return !isPositive ? isPositive : merchantAmtsPositive;
  });

  // Any individual item's beneficiary percentages need to be <= 100.
  const beneficiaryPctsValid = orderData.merchantItems.reduce(true, (pctsValid, x) => {
    const itemPctsValid = x.lineItems.reduce(true, (itemPctValid, y) => {
      const beneficiariesPct = y.beneficiaries.reduce(0, (pctTotal, z) => {
        return pctTotal + z.percentToReceive;
      });
      
      return beneficiariesPct <= 100;
    });

    return !pctsValid ? pctsValid : itemPctValid;
  });

  // Any individual item's tax + shipping must be less than the order item's totalCost.Address

  // const recipientsClean = cleanRecipients(recipients, buyer);
  
  // const recipPercentsValid = recipientsClean.reduce(true, (z, x) => 
  //   (!z || !x.isReal) ? z : 0 < x.percentToReceive && x.percentToReceive < 1);
  // const totalTransferPercent = recipientsClean.reduce(0, (z, x) => 
  //   !x.isReal ? z : z + x.percentToReceive);

  // const shouldPayRecipients = positiveOrderTotal && !buyerIsRecipient && recipPercentsValid && totalTransferPercent == 1;

  // return {
  //   orderTotal,
  //   positiveOrderTotal,
  //   buyerIsRecipient, 
  //   recipientsClean,
  //   recipPercentsValid,
  //   totalTransferPercent,
  //   shouldPayRecipients
  // }
}


// ========================================================
// Participant Info
// ========================================================

/**
 * Errors to present to the buyer on validation or other failure.
 */
 const errors = {
  errorInvalidOrderTotal: Fun([], Null),
  errorAmountsExceedBalance: Fun([], Null),
  errorInvalidRecipientAmounts: Fun([], Null),
  errorGenericInvalidAmounts: Fun([], Null),
}
 
/**
 * The Buyer Interface.
 */
const BuyerInterface = { 
  getOrderData: Fun([], Object(OrderData)),
  ...errors
};


// ========================================================
// Main Contract Logic
// ========================================================

export const main = Reach.App(
  {}, [ 
    ParticipantClass('Buyer', BuyerInterface),
    Participant('Bakesale', BuyerInterface),
  ],
  (Buyer, Bakesale) => {
    Bakesale.publish();

    const outerKeepGoing = 
      parallelReduce(true)
        .invariant(balance() == balance())
        .while(outerKeepGoing)
        .case(Buyer,
          (() => {
            const [orderTotal, recipients] = declassify([
              interact.orderTotal, 
              interact.getRecipients()])

            const validationResult = validateOrder(orderTotal, recipients, Buyer);

            if(!validationResult.shouldPayRecipients) {
              interact.errorGenericInvalidAmounts();
            } else {
              assert(validationResult.orderTotal > 0);
              assert(validationResult.totalTransferPercent == 1);
            }

            return {
              when: validationResult.shouldPayRecipients
            }
          }), 
          ((_) => {
            commit();

            Buyer.only(() => {
              const [orderTotal, recipients] = declassify([
                interact.orderTotal, 
                interact.getRecipients()]) 
            });
            Buyer.publish(orderTotal, recipients);
            const validationResult = validateOrder(orderTotal, recipients, this);

            if(!validationResult.shouldPayRecipients) {
              Buyer.only(() => declassify(interact.errorGenericInvalidAmounts()));
              return true;
            } else {
              assert(validationResult.orderTotal > 0);
              assert(validationResult.totalTransferPercent == 1);
              
              commit();
              Buyer.publish().pay(orderTotal);

              validationResult.recipientsClean.forEach(recipient => {
                const pct = recipient.percentToReceive;
                const amt = orderTotal * pct; 
                
                if(!recipient.isReal) {
                  assert(pct == 0);
                  assert(amt == 0);
                } else {
                  assert(pct != 0);
                  assert(amt != 0);
                }

                transfer(amt).to(recipient.addr);
              });

              assert(balance() == 0);

              return true;
            } 

          })
        )
        // Sufficiently long timeout that it will never be
        // since the contract needs to be persistent.
        .timeout(100^100, () => {
          Anybody.publish();
          return true;
        });
    
    if(balance() > 0) {
      // Not sure how we'd ever end up with a balance here, 
      // but for now just transfer the remaining balance.
      // We need to fix this so that it tracks the last buyer
      // since it seems like they'd be the most likely source 
      // of these orphan funds?
      transfer(balance()).to(Bakesale);
    }

    commit();
  }
);