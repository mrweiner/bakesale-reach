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
const BAKESALE_FEE_MULTIPLE = BAKESALE_FEE_PERCENT / 100;

const MAX_BENEFICIARIES_PER_ITEM = 1;
const MAX_LINE_ITEMS_PER_MERCHANT = 1;
const MAX_TOTAL_MERCHANTS = 1

// // Merchant totals are equivalent but used in different contexts.
// const TOTAL_MERCHANTS = MAX_TOTAL_MERCHANTS;
// const TOTAL_LINE_ITEMS = MAX_LINE_ITEMS_PER_MERCHANT * TOTAL_MERCHANTS;
// const TOTAL_BENEFICIARIES = MAX_BENEFICIARIES_PER_ITEM * TOTAL_LINE_ITEMS;

// ========================================================
// Primary Objects & Their Fakers
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
  beneficiaries: Array(Maybe(Object(Beneficiary)), MAX_BENEFICIARIES_PER_ITEM)
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
  const beneficiaries = Array.iota(MAX_BENEFICIARIES_PER_ITEM).map((_) => createFakeBeneficiary(addr));

  return createIsReal(false, {
    totalCost: UInt, // The unit price * qty
    shipping: UInt,
    tax: UInt,
    beneficiaries
  });
}

/**
 * Array of order line items for a particular merchant.
 */
const MerchantItem = {
  addr: Address,
  lineItems: Array(Maybe(Object(LineItem)), MAX_LINE_ITEMS_PER_MERCHANT) 
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
  assert(addr !== null)
 
  return createIsReal(false, { 
    addr,
    lineItems: Array.iota(MAX_LINE_ITEMS_PER_MERCHANT).map(_ => createFakeLineItem(addr))
    // lineItems: []
  }); 
 } 

/**
 * The order data for which payment is processed.
 */
const OrderData = {
  orderTotal: UInt,
  merchantItems: Array(Maybe(Object(MerchantItem)), MAX_TOTAL_MERCHANTS),
}


// ========================================================
// Clean Functions
// ========================================================

/**
 * Convert Array(Maybe(Object(Beneficiary)) to usable [Object].
 * 
 * @param {Array(Maybe(Object(Beneficiary))} beneficiaries
 *   The array of maybe beneficiaries.
 * @param addr 
 *   The address to be used for the fakes.
 * @returns 
 *   Array of usable "isReal" beneficiaries
 */
 const cleanBeneficiaries = (beneficiaries, addr) => {
  return beneficiaries.map((x) => {
    return fromMaybe(x,
      (() => createFakeBeneficiary(addr)), 
      ((y) => createIsReal(true, y))
    ); 
  })
}

/**
 * Convert Array(Maybe(Object(LineItem)) to usable [Object].
 * 
 * @param {Array(Maybe(Object(LineItem))} lis
 *   The array of maybe LineItems.
 * @param addr 
 *   The address to be used for any fake addresses.
 * @returns 
 *   Array of usable "isReal" LineItems
 */
const cleanLineItems = (lis, addr) => {
  return lis.map((x) => {
    return fromMaybe(x,
      (() => createFakeLineItem(addr)), 
      ((y) => createIsReal(true, y))
    ); 
  })
}

/**
 * Convert Array(Maybe(Object(MerchantItems)) to usable [Object].
 * 
 * @param {Array(Maybe(Object(MerchantItems))} mis
 *   The array of maybe LineItems.
 * @param addr 
 *   The address to be used for any fake addresses.
 * @returns 
 *   Array of usable "isReal" LineItems
 */
const cleanMerchantItems = (mis, addr) => {
  return mis.map((x) => { 
    return fromMaybe(x,
      (() => createFakeMerchantItems(addr)), 
      ((y) => createIsReal(true, y))
    ); 
  })
}

/**
 * Clean the entire orderData's tree.
 * 
 * @param {OrderData} orderData
 *   The order data to be cleaned. 
 * @param {Address} fakesAddr 
 *   The address to be used for fakes.
 * 
 * @returns {OrderData} 
 *   The cleaned OrderData. 
 */
const cleanOrderData = (orderData, fakesAddr) => {
  const merchantItemsClean = cleanMerchantItems(orderData.merchantItems, fakesAddr);
  const merchantItemsFinal = merchantItemsClean.reduce([], (mi, x) => {
    
    // Cleaning LineItems for single MerchantItem 
    const lineItemsClean = cleanLineItems(x.lineItems, fakesAddr);
    const lineItemsFinal = lineItemsClean.reduce([], (li, y) => {
      
      // Cleaning Benficiaries for a single LineItem
      const beneficiariesClean = cleanBeneficiaries(li.beneficiaries, fakesAddr);

      return {
        totalCost: y.totalCost, // The unit price * qty
        shipping: y.shipping,
        tax: y.tax,
        beneficiaries: beneficiariesClean
      }
    });
     
    return {
      addr: miRaw.addr,
      lineItems: lineItemsFinal
    }
  });

  return {
    orderTotal: orderData.orderTotal,
    merchantItems: merchantItemsFinal 
  }
}


// ========================================================
// Order Validation
// ========================================================

/**
 * Check whether or not the order is valid to be processed.
 * 
 * @todo Check that no merchants appear more than once.
 * 
 * @param {OrderData} orderData
 *   The CLEANED order data. The logic assumes that all
 *   objects are operable, i.e. no Maybes.
 */
const validateCleanOrder = (orderData) => {
  const positiveOrderTotal = orderData.orderTotal > 0;
  const orderTotalCalcd = orderData.merchantItems.reduce(0, (oTotal, x) => {
    const merchantTotal = x.lineItems.reduce(0, (mTotal, y) => mTotal + y.totalCost);
    return oTotal + merchantTotal;
  });

  // Ensure that the provided order total matches the order contents.
  const orderTotalsMatch = positiveOrderTotal == orderTotalCalcd;

  // All amounts on the order must be >= 0.
  const allAmtsNonNegative = orderData.merchantItems.reduce(true, (allAmtsPos, x) => {
    const itemsPositive = x.lineItems.reduce(true, (ip, y) => {
      const totalCostValid = y.isReal ? y.totalCost > 0 : y.totalCost == 0
      const shippingValid = y.isReal ? y.shipping >= 0 : y.shipping == 0
      const taxValid = y.isReal ? y.tax >= 0 : y.tax == 0
      return !ip ? false : totalCostValid && shippingValid && taxValid
    });

    return !allAmtsPos ? false : itemsPositive;
  });

  // Any individual item's beneficiary percentages need to be <= 100.
  const beneficiaryPctsValid = orderData.merchantItems.reduce(true, (pctsValid, x) => {
    const itemPctsValid = x.lineItems.reduce(true, (itemPctValid, y) => {
      const beneficiariesPct = y.beneficiaries.reduce(0, (pctTotal, z) => {
        return pctTotal + z.percentToReceive;
      });
      
      return !itemPctValid ? false : beneficiariesPct <= 100;
    });
 
    return !pctsValid ? false : itemPctsValid;
  });

  // Any individual items' tax + shipping must be less than the order item's totalCost.
  // If they exceed it then that means the total does not account for one of them.
  const taxShippingValid = orderData.merchantItems.reduce(true, (tsValid, x) => {
    const itemTsValid = x.lineItems.reduce(true, (itemTsValid, y) => {      
      return y.totalCost > y.tax + y.shipping;
    });

    return !tsValid ? false : itemTsValid;
  });

  const orderIsValid = orderTotalsMatch 
    && allAmtsNonNegative
    && beneficiaryPctsValid
    && taxShippingValid;

  return {
    orderIsValid,
    orderTotalsMatch, 
    allAmtsNonNegative,
    beneficiaryPctsValid,
    taxShippingValid
  }
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
  orderData: Object(OrderData),
  ...errors
};


// ========================================================
// Main Contract Logic
// ========================================================

export const main = Reach.App(
  {}, [ 
    ParticipantClass('Buyer', BuyerInterface),
    Participant('Bakesale', {}),
  ],
  (Buyer, Bakesale) => {
    Bakesale.publish();

    const keepGoing = 
      parallelReduce(true)
        .invariant(balance() == balance())
        .while(keepGoing)
        .case(Buyer,
          (() => {
            const orderData = declassify(interact.orderData);
            const orderDataClean = cleanOrderData(orderData, Buyer);
            const validationResult = validateCleanOrder(orderDataClean);

            if(!validationResult.shouldPayRecipients) {
              interact.errorGenericInvalidAmounts();
            } 
            return {
              when: validationResult.shouldPayRecipients
            }
          }), 
          ((_) => {
            commit();
            Buyer.only(() => {
              const orderData = declassify(interact.orderData);
            });
            Buyer.publish(orderData); 
            const orderDataClean = cleanOrderData(orderData, Buyer);
            const validationResult = validateCleanOrder(orderDataClean);

            // This should never happen since we validate in the 
            // local step above, but just in case.
            if(!validationResult.shouldPayRecipients) {
              Buyer.only(() => declassify(interact.errorGenericInvalidAmounts()));
              return true;
            } else {
              commit();
              Buyer.publish().pay(orderTotal);

              // Keep this all simple for MVP testing.
              // We can make the transfers more efficients
              // and aggregated after we know it works.
              orderDataClean.merchantItems.forEach(mi => {
                // Looking at a single merchant.
                if(mi.isReal) {
                  mi.lineItems.forEach(li => {
                    // Looking at a single line item.
                    if(li.isReal) {
                      const serviceFee = li.totalCost * BAKESALE_FEE_MULTIPLE;
                      const totalMinusFee = li.totalCost - serviceFee;

                      // @todo This needs to be split up so tax goes to a tax acct.
                      transfer(serviceFee).to(Bakesale);
                      transfer(li.tax).to(Bakesale)

                      const pctToBeneficiaries = li.beneficiaries.reduce(0, (pct, x) => {
                        return pct + x.percentToReceive;
                      });

                      // Pay out the merchant.
                      const pctToMerchant = (100 - pctToBeneficiaries) / 100;
                      const amtToMerchant = pctToMerchant * totalMinusFee;
                      transfer(amtToMerchant).to(mi.addr);

                      // Pay out the beneficiaries
                      li.beneficiaries.forEach(ben => {
                        if(ben.isReal) {
                          const amtToBen = totalMinusFee * ben.percentToReceive;
                          transfer(amtToBen).to(ben);
                        }
                      })
                    }
                  })
                }
              });

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