import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

// Maximums allowed by the contract.
// This will exist in the final version.
const MAX_BENEFICIARIES_PER_ITEM = 5;
const MAX_LINE_ITEMS_PER_MERCHANT = 10;
const MAX_TOTAL_MERCHANTS = 5

// Used to generate the "real" objects that represent 
// the order information passed in from the user's real 
// cart/order interaction. These exist for TESTING ONLY 
// and SHOULD NOT EXIST in the final version of the program
// as all values should be provided by checkout.
const REAL_BENFICIARIES_PER_ITEM_COUNT = 3
const FAKE_BENFICIARIES_PER_ITEM_COUNT = MAX_BENEFICIARIES_PER_ITEM - REAL_BENFICIARIES_PER_ITEM_COUNT;

const REAL_LINE_ITEMS_PER_MERCHANT_COUNT = 4
const FAKE_LINE_ITEMS_PER_MERCHANT_COUNT = MAX_LINE_ITEMS_PER_MERCHANT - REAL_LINE_ITEMS_PER_MERCHANT_COUNT;

const REAL_MERCHANTS_COUNT = 2;
const FAKE_MERCHANTS_COUNT = MAX_TOTAL_MERCHANTS - REAL_MERCHANTS_COUNT;

const PRICE_PER_LINE_ITEM = 20;
const TOTAL_PRICE_PER_MERCHANT = PRICE_PER_LINE_ITEM * REAL_LINE_ITEMS_PER_MERCHANT_COUNT;
const ORDER_TOTAL = TOTAL_PRICE_PER_MERCHANT * REAL_MERCHANTS_COUNT;


(async () => {
  const stdlib = await loadStdlib();
  const startingBalance = stdlib.parseCurrency(10000);

  const createTestAcct = async () => {
    await stdlib.newTestAccount(startingBalance)
  }

  const bakesale = await createTestAcct();
  const ctcBakesale = bakesale.deploy(backend);
  const ctcBakesaleInfo = ctcBakesale.getInfo();

  const buyer = await createTestAcct();
  const ctcBuyer = buyer.attach(backend, ctcBakesaleInfo);

  const createRealBeneficiary = (addr, percentToReceive) => ({
    isReal: true,
    addr,
    parentToReceive
  });

  const createRealLineItem = (totalCost, shipping, tax, beneficiaries) => ({
    isReal: true,
    totalCost,
    shipping,
    tax,
    beneficiaries
  });

  const createRealMerchant = (addr, lineItems) => ({
    isReal: true,
    addr,
    lineItems
  });

  const createOrderData = (orderTotal, Merchants) => ({
    orderTotal, Merchants
  });

  const generateDummyOrderData = async () => {
    const baseBeneficiaries = Promise.all (
      Array.from(REAL_BENFICIARIES_PER_ITEM_COUNT).map(x => {
          const acct = await createTestAcct();
          const addr = acct.networkAccount;
          const pct = 5;
          return createRealBeneficiary(addr, pct)
      })
    ).concat(
      Array.from(FAKE_BENFICIARIES_PER_ITEM_COUNT).map(x => null)
    );

    const baseLineItems = Promise.all (
      Array.from(REAL_LINE_ITEMS_PER_MERCHANT_COUNT).map(x => {
          const totalPrice = stdlib.parseCurrency(PRICE_PER_LINE_ITEM)
          return createRealLineItem(totalPrice, 0, 0, await baseBeneficiaries)
      })
    ).concat(
      Array.from(FAKE_LINE_ITEMS_PER_MERCHANT_COUNT).map(x => null)
    );
    
    const baseMerchants = Promise.all (
      Array.from(REAL_MERCHANTS_COUNT).map(x => {
          const acct = await createTestAcct();
          const addr = acct.networkAccount;
          return createRealMerchant(addr, await baseLineItems);
      })
    ).concat(
      Array.from(FAKE_MERCHANTS_COUNT).map(x => null)
    );

    const orderTotalParsed = stdlib.parseCurrency(ORDER_TOTAL);
    return (async () => createOrderData(orderTotalParsed, await baseMerchants))();
  };

  await Promise.all([
    backend.Bakesale(ctcBakesaleInfo, {}),
    backend.Buyer(ctcBuyer, {
      orderData: async () => {
        return await generateDummyOrderData();
      },
      errorGenericInvalidOrder: () => {
        console.log('Order was not processed due to an error.')
      },
      // alertPaidRecipient: (addr, amt, reason) => {
      //   console.log(`Buyer paid ${amt} to ${addr} for ${reason}.`)
      // }
    }),
  ]);
})();