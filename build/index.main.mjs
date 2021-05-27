// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export async function Buyer(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Object({
    x: ctc0,
    y: ctc0
     });
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  
  
  const v7 = await ctc.creationTime();
  const v6 = stdlib.protect(ctc0, interact.orderTotal, null);
  const v10 = stdlib.protect(ctc2, await interact.getRecipients(), {
    at: './index.rsh:73:31:application',
    fs: ['at ./index.rsh:70:15:application call to [unknown function] (defined at: ./index.rsh:70:19:function exp)'],
    msg: 'getRecipients',
    who: 'Buyer'
     });
  const txn1 = await (ctc.sendrecv('Buyer', 1, 2, stdlib.checkedBigNumberify('./index.rsh:75:11:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc2], [v7, v6, v10], v6, [ctc0, ctc2], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:75:11:dot', stdlib.UInt_max, 0), v7]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:75:11:dot', stdlib.UInt_max, 0)]);
    const [v12, v13] = txn1.data;
    const v14 = txn1.value;
    const v18 = txn1.time;
    const v11 = txn1.from;
    
    const v15 = stdlib.eq(v14, v12);
    stdlib.assert(v15, {
      at: './index.rsh:75:11:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Buyer'
       });
    stdlib.assert(true, {
      at: './index.rsh:75:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
       });
    sim_r.txns.push({
      amt: v12,
      to: v11
       });
    sim_r.nextSt = stdlib.digest(ctc3, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc3, []);
    sim_r.isHalt = true;
    
    return sim_r;
     })));
  const [v12, v13] = txn1.data;
  const v14 = txn1.value;
  const v18 = txn1.time;
  const v11 = txn1.from;
  const v15 = stdlib.eq(v14, v12);
  stdlib.assert(v15, {
    at: './index.rsh:75:11:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Buyer'
     });
  stdlib.assert(true, {
    at: './index.rsh:75:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
     });
  ;
  return;
  
   }

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 4
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 4
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
assert
txn RekeyTo
global ZeroAddress
==
assert
global ZeroAddress
byte "{{Deployer}}"
global GroupSize
int 1
-
txn GroupIndex
==
gtxna 0 ApplicationArgs 2
btoi
&&
select
txn CloseRemainderTo
==
assert
txn GroupIndex
int 4
>=
assert
done:
int 1
return
`,
  stepargs: [0, 601],
  steps: [null, `#pragma version 3
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 7
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:75:11:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Just "sender correct"
// "./index.rsh:75:11:dot"
// "[]"
int 1
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxn 3 Sender
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 5
btoi
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false
   };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v7",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v12",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T1[32]",
                "name": "v13",
                "type": "tuple[32]"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v7",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v12",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T1[32]",
                "name": "v13",
                "type": "tuple[32]"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a1604080516020808201835243825282518082018452600080825292518152835180830184905290518185015283518082038501815260609091019093528251920191909120905561019f806100826000396000f3fe6080604052600436106100225760003560e01c806363a8af4d1461002e57610029565b3661002957005b600080fd5b61004161003c366004610103565b610043565b005b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461008057600080fd5b600080553460208201351461009457600080fd5b6040513390602083013580156108fc02916000818181858888f193505050501580156100c4573d6000803e3d6000fd5b507ff3ac13655ded57754e010ca304bbc02ec62930a2b70158e6f0992bf42e330237816040516100f4919061011b565b60405180910390a16000805533ff5b60006108408284031215610115578081fd5b50919050565b8135815260208083013581830152610840820190604080840181860160005b8481101561015e57813583528482013585840152918301919083019060010161013a565b50505050509291505056fea2646970667358221220235dd11b759ff8671ff9e5e1e3b43cb9acde82def8309e2eca5b49a6662ae46c64736f6c63430008020033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

