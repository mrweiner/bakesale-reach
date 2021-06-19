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
const MAX_TOTAL_MERCHANTS = 1;

// ========================================================
// Primary Objects & Their Fakers
// ========================================================

/**
 * The beneficiary of a particular item.
 */
const Beneficiary = {
  isReal: Bool,
  addr: Address,
  percentToReceive: UInt,
};

/**
 * Create a fake benficiary.
 * 
 * @param {Address} addr 
 *   The fake address. 
 * @returns {Beneficiary}
 *   The fake Beneficiary.
 */
const createFakeBeneficiary = (addr) => ({
  isReal: false,
  addr,
  percentToReceive: 0
})

/**
 * An order line item.
 */
const LineItem = {
  isReal: Bool,
  totalCost: UInt, // The unit price * qty
  shipping: UInt,
  tax: UInt,
  beneficiaries: Array(Maybe(Object(Beneficiary)), MAX_BENEFICIARIES_PER_ITEM)
}

/**
 * Create a fake LineItem.
 * 
 * @param {Address} addr 
 *   The fake address.
 * @returns {LineItem}
 *   The fake LineItem.
 */
const createFakeLineItem = (addr) => ({
  isReal: false,
  totalCost: 0,
  shipping: 0,
  tax: 0,
  beneficiaries: Array.iota(MAX_BENEFICIARIES_PER_ITEM).map(_ =>  
    Maybe(Object(Beneficiary)).Some(createFakeBeneficiary(addr)))
})

/**
 * Array of order line items for a particular merchant.
 */
const Merchant = {
  isReal: Bool,
  addr: Address,
  lineItems: Array(Maybe(Object(LineItem)), MAX_LINE_ITEMS_PER_MERCHANT) 
}

/**
 * Create a fake Merchant.
 * 
 * @param {Address} addr 
 *   The fake address. 
 * @returns {Merchant}
 *   The fake Merchants obj.
 */
const createFakeMerchant = (addr) => ({ 
  isReal: false,
  addr,
  lineItems: Array.iota(MAX_LINE_ITEMS_PER_MERCHANT).map(_ => 
    Maybe(Object(LineItem)).Some(createFakeLineItem(addr)))
});

/**
 * The order data for which payment is processed.
 */
const OrderData = {
  orderTotal: UInt,
  merchantItems: Array(Maybe(Object(Merchant)), MAX_TOTAL_MERCHANTS),
}


// ========================================================
// Laundromat
// ========================================================

/**
 * Convert Array(Maybe(Object(Foo)) to usable Array(Object(Foo)).
 * 
 * @param {Array(Maybe(Object(Foo))} arr
 *   The array of maybe els.
 * @param {Address} addr 
 *   The address to be used for the fakes.
 * @param {Function} callbackCreateFaker
 *   The callback to create a fake for array Foo type.
 * @returns {Array(Object(Foo)}
 *   Array of operable Foo els.
 */
const cleanMaybeArr = (arr, addr, callbackCreateFaker) => {
  return arr.map((x) => {
    return fromMaybe(x,  
      (() => callbackCreateFaker(addr)), 
      ((y) => ({isReal: false, ...y}))
    );  
  })
}

/**
 * Convert Array(Maybe(Object(Beneficiary)) to usable Array(Object(Beneficiary)).
 * 
 * @param {Array(Maybe(Object(Beneficiary))} b
 *   The array of maybe beneficiaries.
 * @param {Address} addr 
 *   The address to be used for the fakes.
 * @returns {Array(Object(Beneficiary)}
 *   Array of usable beneficiaries.
 */
 const cleanBeneficiaries = (b, addr) => cleanMaybeArr(b, addr, createFakeBeneficiary);

/**
 * Convert Array(Maybe(Object(LineItem)) to usable Array(Object(LineItem)).
 * 
 * @param {Array(Maybe(Object(LineItem))} lis
 *   The array of maybe line items.
 * @param {Address} addr 
 *   The address to be used for the fakes.
 * @returns {Array(Object(LineItem)}
 *   Array of usable line items.
 */
const cleanLineItems = (lis, addr) => cleanMaybeArr(lis, addr, createFakeLineItem);

/**
 * Convert Array(Maybe(Object(Merchant)) to usable Array(Object(Merchant)).
 * 
 * @param {Array(Maybe(Object(Merchant))} m
 *   The array of maybe merchants.
 * @param {Address} addr 
 *   The address to be used for the fakes.
 * @returns {Array(Object(Merchant)} 
 *   Array of usable merchants.
 */
const cleanMerchants = (m, addr) => cleanMaybeArr(m, addr, createFakeMerchant);

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
  const merchantItemsClean = cleanMerchants(orderData.merchantItems, fakesAddr);
  const merchantItemsFinal = merchantItemsClean.map(x => {
    
    // Cleaning LineItems for single Merchant 
    const lineItemsClean = cleanLineItems(x.lineItems, fakesAddr);
    const lineItemsFinal = lineItemsClean.map(y => {
      
      // Cleaning Benficiaries for a single LineItem 
      const beneficiariesClean = cleanBeneficiaries(y.beneficiaries, fakesAddr);

      return {
        isReal: y.isReal,
        totalCost: y.totalCost,
        shipping: y.shipping,
        tax: y.tax,
        beneficiaries: beneficiariesClean
      }
    });
     
    return { 
      isReal: x.isReal,
      addr: x.addr,
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
  // errorInvalidOrderTotal: Fun([], Null),
  // errorAmountsExceedBalance: Fun([], Null),
  // errorInvalidRecipientAmounts: Fun([], Null),
  errorGenericInvalidOrder: Fun([], Null),
}
 
/**
 * The Buyer Interface.
 */
const BuyerInterface = {  
  getOrderData: Fun([], Object(OrderData)),
  // alertPaidRecipient: Fun([Address, UInt, Bytes], Null),
  ...errors,
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
            const orderData = declassify(interact.getOrderData());
            const orderDataClean = cleanOrderData(orderData, Bakesale);
            const validationResult = validateCleanOrder(orderDataClean);

            if(!validationResult.orderIsValid) {
              interact.errorGenericInvalidOrder();
            } 
            return {
              when: validationResult.orderIsValid
            }
          }), 
          ((_) => {
            commit();
            Buyer.only(() => {
              const orderData = declassify(interact.getOrderData());
            });
            Buyer.publish(orderData); 
            const orderDataClean = cleanOrderData(orderData, Bakesale);
            const validationResult = validateCleanOrder(orderDataClean);

            // This should never happen since we validate in the 
            // local step above, but just in case.
            if(!validationResult.orderIsValid) { 
              Buyer.only(() => declassify(interact.errorGenericInvalidOrder()));
              return true;
            } else {
              commit();
              Buyer.publish().pay(orderTotal);

              // Keep this all simple for MVP testing.
              // We can make the transfers more efficient
              // and aggregated after we know it works.
              orderDataClean.merchantItems.forEach(mi => {
                // Looking at a single merchant.
                if(mi.isReal) {
                  mi.lineItems.forEach(li => {
                    // Looking at a single line item.
                    if(li.isReal) {
                      const serviceFee = li.totalCost * BAKESALE_FEE_MULTIPLE;
                      const totalMinusFee = li.totalCost - serviceFee;

                      transfer(serviceFee).to(Bakesale);
                      // Buyer.interact(declassify(interact.alertPaidRecipient(Bakesale, serviceFee, 'service fee')))

                      /** @todo This needs to go to a tax acct. */
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

              assert(balace() == 0)

              return true;
            } 

          })
        )
        // Sufficiently long timeout that it will never be
        // executed since the contract needs to be persistent.
        .timeout(100^100, () => {
          Anybody.publish();
          return false;
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