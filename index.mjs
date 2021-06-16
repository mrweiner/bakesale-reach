import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async () => {
  const stdlib = await loadStdlib();
  const startingBalance = stdlib.parseCurrency(100);

  const buyer = await stdlib.newTestAccount(startingBalance);
  const ctcBuyer = buyer.deploy(backend);

  const r1 = await stdlib.newTestAccount(startingBalance);
  const r2 = await stdlib.newTestAccount(startingBalance);
  const r3 = await stdlib.newTestAccount(startingBalance);
  const r4 = await stdlib.newTestAccount(startingBalance);
  const r5 = await stdlib.newTestAccount(startingBalance);


  const newRecipient = (address, amtToReceive) => ({
    address, amtToReceive
  });

  await Promise.all([
    backend.Buyer(ctcBuyer, {
      orderTotal: stdlib.parseCurrency(60),
      getRecipients: async () => { 
        return [
          newRecipient(r1.networkAccount, 10),
          newRecipient(r2.networkAccount, 10),
          newRecipient(r3.networkAccount, 10),
          null,
          null
          // newRecipient(r4.networkAccount, 10),
          // newRecipient(r5.networkAccount, 10)
        ]
      },
      alertPaidRecipient: (addr, amt) => {
        console.log(`Buyer paid ${amt} to ${addr}.`)
      }
    }),
  ]);
})();
