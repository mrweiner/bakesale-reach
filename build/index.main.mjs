// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export async function Bakesale(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    Buyer: ctc0
     });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    addr: ctc3,
    percentToReceive: ctc2
     });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
     });
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc7 = stdlib.T_Tuple([ctc2, ctc3, ctc2, ctc2]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc3, ctc2]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc2]);
  
  
  const v10 = await ctc.creationTime();
  const txn1 = await (ctc.sendrecv('Bakesale', 1, 0, stdlib.checkedBigNumberify('./index.rsh:126:14:dot', stdlib.UInt_max, 0), [ctc2], [v10], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:126:14:dot', stdlib.UInt_max, 0), v10]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:126:14:dot', stdlib.UInt_max, 0)]);
    const [] = txn1.data;
    const v12 = txn1.value;
    const v16 = txn1.time;
    const v11 = txn1.from;
    
    const v13 = stdlib.eq(v12, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v13, {
      at: './index.rsh:126:14:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Bakesale'
       });
    stdlib.assert(true, {
      at: './index.rsh:126:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bakesale'
       });
    const v15 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v12);
    const v18 = true;
    const v1311 = v15;
    const v1312 = v16;
    
    if ((() => {
      
      return v18; })()) {
      let v22;
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:129:21:after expr stmt semicolon', stdlib.UInt_max, 2), v11, v1311, v1312]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:129:21:after expr stmt semicolon', stdlib.UInt_max, 2), v11, v1311]);
      sim_r.isHalt = false;
       }
    else {
      const v1303 = stdlib.gt(v1311, stdlib.checkedBigNumberify('./index.rsh:201:20:decimal', stdlib.UInt_max, 0));
      if (v1303) {
        sim_r.txns.push({
          amt: v1311,
          to: v11
           });
        sim_r.nextSt = stdlib.digest(ctc9, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
        sim_r.isHalt = true;
         }
      else {
        sim_r.nextSt = stdlib.digest(ctc9, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
        sim_r.isHalt = true;
         } }
    return sim_r;
     })));
  const [] = txn1.data;
  const v12 = txn1.value;
  const v16 = txn1.time;
  const v11 = txn1.from;
  const v13 = stdlib.eq(v12, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v13, {
    at: './index.rsh:126:14:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Bakesale'
     });
  stdlib.assert(true, {
    at: './index.rsh:126:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bakesale'
     });
  const v15 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v12);
  let v18 = true;
  let v1311 = v15;
  let v1312 = v16;
  
  while ((() => {
    
    return v18; })()) {
    let v22;
    const txn2 = await (ctc.recv('Bakesale', 4, 1, [ctc1], false, stdlib.checkedBigNumberify('./index.rsh:196:21:application', stdlib.UInt_max, 0)));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv('Bakesale', 5, 0, stdlib.checkedBigNumberify('./index.rsh:197:19:dot', stdlib.UInt_max, 2), [ctc3, ctc2, ctc2], [v11, v1311, v1312], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:197:19:dot', stdlib.UInt_max, 2), v11, v1311, v1312]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:197:19:dot', stdlib.UInt_max, 2), v11, v1311]);
        const [] = txn3.data;
        const v1296 = txn3.value;
        const v1300 = txn3.time;
        const v1295 = txn3.from;
        
        const v1297 = stdlib.eq(v1296, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v1297, {
          at: './index.rsh:197:19:dot',
          fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
          msg: 'pay amount correct',
          who: 'Bakesale'
           });
        stdlib.assert(true, {
          at: './index.rsh:197:19:dot',
          fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
          msg: 'sender correct',
          who: 'Bakesale'
           });
        const v1299 = stdlib.add(v1311, v1296);
        v22 = true;
        const cv18 = v22;
        const cv1311 = v1299;
        const cv1312 = v1300;
        
        (() => {
          const v18 = cv18;
          const v1311 = cv1311;
          const v1312 = cv1312;
          
          if ((() => {
            
            return v18; })()) {
            let v22;
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:129:21:after expr stmt semicolon', stdlib.UInt_max, 2), v11, v1311, v1312]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:129:21:after expr stmt semicolon', stdlib.UInt_max, 2), v11, v1311]);
            sim_r.isHalt = false;
             }
          else {
            const v1303 = stdlib.gt(v1311, stdlib.checkedBigNumberify('./index.rsh:201:20:decimal', stdlib.UInt_max, 0));
            if (v1303) {
              sim_r.txns.push({
                amt: v1311,
                to: v11
                 });
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.isHalt = true;
               }
            else {
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.isHalt = true;
               } } })();
        return sim_r;
         })));
      const [] = txn3.data;
      const v1296 = txn3.value;
      const v1300 = txn3.time;
      const v1295 = txn3.from;
      const v1297 = stdlib.eq(v1296, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v1297, {
        at: './index.rsh:197:19:dot',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: 'pay amount correct',
        who: 'Bakesale'
         });
      stdlib.assert(true, {
        at: './index.rsh:197:19:dot',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: 'sender correct',
        who: 'Bakesale'
         });
      const v1299 = stdlib.add(v1311, v1296);
      v22 = true;
      const cv18 = v22;
      const cv1311 = v1299;
      const cv1312 = v1300;
      
      v18 = cv18;
      v1311 = cv1311;
      v1312 = cv1312;
      
      continue;
       }
    else {
      const [v733] = txn2.data;
      const v734 = txn2.value;
      const v742 = txn2.time;
      const v732 = txn2.from;
      let v735;
      switch (v733[0]) {
        case 'Buyer': {
          
          v735 = stdlib.checkedBigNumberify('./index.rsh:132:14:decimal', stdlib.UInt_max, 0);
          
          break;
           }
         }
      const v739 = stdlib.eq(v734, v735);
      stdlib.assert(v739, {
        at: './index.rsh:129:21:dot',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: 'pay amount correct',
        who: 'Bakesale'
         });
      stdlib.assert(true, {
        at: './index.rsh:129:21:dot',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: 'sender correct',
        who: 'Bakesale'
         });
      const v741 = stdlib.add(v1311, v734);
      let v743;
      switch (v733[0]) {
        case 'Buyer': {
          
          v743 = true;
          
          break;
           }
         }
      stdlib.assert(v743, {
        at: './index.rsh:129:21:application',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: null,
        who: 'Bakesale'
         });
      switch (v733[0]) {
        case 'Buyer': {
          
          const txn3 = await (ctc.recv('Bakesale', 6, 2, [ctc2, ctc6], false, false));
          const [v752, v753] = txn3.data;
          const v754 = txn3.value;
          const v758 = txn3.time;
          const v751 = txn3.from;
          const v755 = stdlib.eq(v754, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v755, {
            at: './index.rsh:159:19:dot',
            fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
            msg: 'pay amount correct',
            who: 'Bakesale'
             });
          stdlib.assert(true, {
            at: './index.rsh:159:19:dot',
            fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
            msg: 'sender correct',
            who: 'Bakesale'
             });
          const v757 = stdlib.add(v741, v754);
          const v760 = stdlib.gt(v752, stdlib.checkedBigNumberify('./index.rsh:90:43:decimal', stdlib.UInt_max, 0));
          const v776 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 0)];
          const v777 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 1)];
          const v778 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 2)];
          const v779 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 3)];
          const v780 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 4)];
          let v782;
          switch (v776[0]) {
            case 'None': {
              
              v782 = false;
              
              break;
               }
            case 'Some': {
              const v786 = v776[1];
              const v788 = v786.addr;
              const v789 = stdlib.eq(v788, v751);
              v782 = v789;
              
              break;
               }
             }
          let v804;
          if (v782) {
            v804 = v782;
             }
          else {
            let v794;
            switch (v777[0]) {
              case 'None': {
                
                v794 = false;
                
                break;
                 }
              case 'Some': {
                const v798 = v777[1];
                const v800 = v798.addr;
                const v801 = stdlib.eq(v800, v751);
                v794 = v801;
                
                break;
                 }
               }
            v804 = v794;
             }
          let v817;
          if (v804) {
            v817 = v804;
             }
          else {
            let v807;
            switch (v778[0]) {
              case 'None': {
                
                v807 = false;
                
                break;
                 }
              case 'Some': {
                const v811 = v778[1];
                const v813 = v811.addr;
                const v814 = stdlib.eq(v813, v751);
                v807 = v814;
                
                break;
                 }
               }
            v817 = v807;
             }
          let v830;
          if (v817) {
            v830 = v817;
             }
          else {
            let v820;
            switch (v779[0]) {
              case 'None': {
                
                v820 = false;
                
                break;
                 }
              case 'Some': {
                const v824 = v779[1];
                const v826 = v824.addr;
                const v827 = stdlib.eq(v826, v751);
                v820 = v827;
                
                break;
                 }
               }
            v830 = v820;
             }
          let v843;
          if (v830) {
            v843 = v830;
             }
          else {
            let v833;
            switch (v780[0]) {
              case 'None': {
                
                v833 = false;
                
                break;
                 }
              case 'Some': {
                const v837 = v780[1];
                const v839 = v837.addr;
                const v840 = stdlib.eq(v839, v751);
                v833 = v840;
                
                break;
                 }
               }
            v843 = v833;
             }
          let v867;
          switch (v776[0]) {
            case 'None': {
              
              const v877 = {
                addr: v751,
                isReal: false,
                percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                 };
              v867 = v877;
              
              break;
               }
            case 'Some': {
              const v871 = v776[1];
              const v873 = v871.addr;
              const v874 = v871.percentToReceive;
              const v878 = {
                addr: v873,
                isReal: true,
                percentToReceive: v874
                 };
              v867 = v878;
              
              break;
               }
             }
          let v881;
          switch (v777[0]) {
            case 'None': {
              
              const v891 = {
                addr: v751,
                isReal: false,
                percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                 };
              v881 = v891;
              
              break;
               }
            case 'Some': {
              const v885 = v777[1];
              const v887 = v885.addr;
              const v888 = v885.percentToReceive;
              const v892 = {
                addr: v887,
                isReal: true,
                percentToReceive: v888
                 };
              v881 = v892;
              
              break;
               }
             }
          let v895;
          switch (v778[0]) {
            case 'None': {
              
              const v905 = {
                addr: v751,
                isReal: false,
                percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                 };
              v895 = v905;
              
              break;
               }
            case 'Some': {
              const v899 = v778[1];
              const v901 = v899.addr;
              const v902 = v899.percentToReceive;
              const v906 = {
                addr: v901,
                isReal: true,
                percentToReceive: v902
                 };
              v895 = v906;
              
              break;
               }
             }
          let v909;
          switch (v779[0]) {
            case 'None': {
              
              const v919 = {
                addr: v751,
                isReal: false,
                percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                 };
              v909 = v919;
              
              break;
               }
            case 'Some': {
              const v913 = v779[1];
              const v915 = v913.addr;
              const v916 = v913.percentToReceive;
              const v920 = {
                addr: v915,
                isReal: true,
                percentToReceive: v916
                 };
              v909 = v920;
              
              break;
               }
             }
          let v923;
          switch (v780[0]) {
            case 'None': {
              
              const v933 = {
                addr: v751,
                isReal: false,
                percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                 };
              v923 = v933;
              
              break;
               }
            case 'Some': {
              const v927 = v780[1];
              const v929 = v927.addr;
              const v930 = v927.percentToReceive;
              const v934 = {
                addr: v929,
                isReal: true,
                percentToReceive: v930
                 };
              v923 = v934;
              
              break;
               }
             }
          const v959 = v867.isReal;
          const v961 = v959 ? false : true;
          const v963 = v867.percentToReceive;
          const v964 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v963);
          const v966 = stdlib.lt(v963, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
          const v967 = v964 ? v966 : false;
          const v968 = v961 ? true : v967;
          const v972 = v968 ? false : true;
          const v974 = v881.isReal;
          const v976 = v974 ? false : true;
          const v978 = v972 ? true : v976;
          const v979 = v881.percentToReceive;
          const v980 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v979);
          const v982 = stdlib.lt(v979, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
          const v983 = v980 ? v982 : false;
          const v984 = v978 ? v968 : v983;
          const v988 = v984 ? false : true;
          const v990 = v895.isReal;
          const v992 = v990 ? false : true;
          const v994 = v988 ? true : v992;
          const v995 = v895.percentToReceive;
          const v996 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v995);
          const v998 = stdlib.lt(v995, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
          const v999 = v996 ? v998 : false;
          const v1000 = v994 ? v984 : v999;
          const v1004 = v1000 ? false : true;
          const v1006 = v909.isReal;
          const v1008 = v1006 ? false : true;
          const v1010 = v1004 ? true : v1008;
          const v1011 = v909.percentToReceive;
          const v1012 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v1011);
          const v1014 = stdlib.lt(v1011, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
          const v1015 = v1012 ? v1014 : false;
          const v1016 = v1010 ? v1000 : v1015;
          const v1020 = v1016 ? false : true;
          const v1022 = v923.isReal;
          const v1024 = v1022 ? false : true;
          const v1026 = v1020 ? true : v1024;
          const v1027 = v923.percentToReceive;
          const v1028 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v1027);
          const v1030 = stdlib.lt(v1027, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
          const v1031 = v1028 ? v1030 : false;
          const v1032 = v1026 ? v1016 : v1031;
          const v1052 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:104:55:decimal', stdlib.UInt_max, 0), v963);
          const v1053 = v961 ? stdlib.checkedBigNumberify('./index.rsh:104:55:decimal', stdlib.UInt_max, 0) : v1052;
          const v1061 = stdlib.add(v1053, v979);
          const v1062 = v976 ? v1053 : v1061;
          const v1070 = stdlib.add(v1062, v995);
          const v1071 = v992 ? v1062 : v1070;
          const v1079 = stdlib.add(v1071, v1011);
          const v1080 = v1008 ? v1071 : v1079;
          const v1088 = stdlib.add(v1080, v1027);
          const v1089 = v1024 ? v1080 : v1088;
          const v1092 = v843 ? false : true;
          const v1094 = v760 ? v1092 : false;
          const v1095 = v1094 ? v1032 : false;
          const v1096 = stdlib.eq(v1089, stdlib.checkedBigNumberify('./index.rsh:107:120:decimal', stdlib.UInt_max, 1));
          const v1097 = v1095 ? v1096 : false;
          const v1100 = v1097 ? false : true;
          if (v1100) {
            v22 = true;
            const cv18 = v22;
            const cv1311 = v757;
            const cv1312 = v758;
            
            v18 = cv18;
            v1311 = cv1311;
            v1312 = cv1312;
            
            continue; }
          else {
            const txn4 = await (ctc.recv('Bakesale', 7, 0, [], false, false));
            const [] = txn4.data;
            const v1110 = txn4.value;
            const v1114 = txn4.time;
            const v1109 = txn4.from;
            const v1111 = stdlib.eq(v1110, v752);
            stdlib.assert(v1111, {
              at: './index.rsh:170:21:dot',
              fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
              msg: 'pay amount correct',
              who: 'Bakesale'
               });
            stdlib.assert(true, {
              at: './index.rsh:170:21:dot',
              fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
              msg: 'sender correct',
              who: 'Bakesale'
               });
            const v1113 = stdlib.add(v757, v1110);
            const v1153 = stdlib.mul(v752, v963);
            if (v961) {
               }
            else {
               }
            const v1172 = v867.addr;
            ;
            const v1176 = stdlib.sub(v1113, v1153);
            const v1181 = stdlib.mul(v752, v979);
            if (v976) {
               }
            else {
               }
            const v1200 = v881.addr;
            ;
            const v1204 = stdlib.sub(v1176, v1181);
            const v1209 = stdlib.mul(v752, v995);
            if (v992) {
               }
            else {
               }
            const v1228 = v895.addr;
            ;
            const v1232 = stdlib.sub(v1204, v1209);
            const v1237 = stdlib.mul(v752, v1011);
            if (v1008) {
               }
            else {
               }
            const v1256 = v909.addr;
            ;
            const v1260 = stdlib.sub(v1232, v1237);
            const v1265 = stdlib.mul(v752, v1027);
            if (v1024) {
               }
            else {
               }
            const v1284 = v923.addr;
            ;
            const v1288 = stdlib.sub(v1260, v1265);
            v22 = true;
            const cv18 = v22;
            const cv1311 = v1288;
            const cv1312 = v1114;
            
            v18 = cv18;
            v1311 = cv1311;
            v1312 = cv1312;
            
            continue;
             }
          
          break;
           }
         } }
     }
  const v1303 = stdlib.gt(v1311, stdlib.checkedBigNumberify('./index.rsh:201:20:decimal', stdlib.UInt_max, 0));
  if (v1303) {
    ;
    return; }
  else {
    return; }
  
   }
export async function Buyer(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    addr: ctc2,
    percentToReceive: ctc0
     });
  const ctc4 = stdlib.T_Data({
    None: ctc1,
    Some: ctc3
     });
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc6 = stdlib.T_Data({
    Buyer: ctc1
     });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc2, ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Object({
    addr: ctc2,
    isReal: ctc10,
    percentToReceive: ctc0
     });
  const ctc12 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc0, ctc0, ctc11, ctc11, ctc11, ctc11, ctc11, ctc10, ctc0, ctc10, ctc0, ctc10, ctc0, ctc10, ctc0, ctc10, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc0, ctc11, ctc11, ctc11, ctc11, ctc11, ctc10, ctc0, ctc10, ctc0, ctc10, ctc0, ctc10, ctc0, ctc10, ctc0]);
  
  
  const v10 = await ctc.creationTime();
  const v8 = stdlib.protect(ctc0, interact.orderTotal, null);
  const txn1 = await (ctc.recv('Buyer', 1, 0, [], false, false));
  const [] = txn1.data;
  const v12 = txn1.value;
  const v16 = txn1.time;
  const v11 = txn1.from;
  const v13 = stdlib.eq(v12, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v13, {
    at: './index.rsh:126:14:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Buyer'
     });
  stdlib.assert(true, {
    at: './index.rsh:126:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
     });
  const v15 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v12);
  let v18 = true;
  let v1311 = v15;
  let v1312 = v16;
  
  while ((() => {
    
    return v18; })()) {
    let v22;
    const v375 = ctc.selfAddress('Buyer', true, stdlib.checkedBigNumberify('./index.rsh:129:21:application', stdlib.UInt_max, 374));
    const v379 = stdlib.protect(ctc5, await interact.getRecipients(), {
      at: './index.rsh:136:37:application',
      fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:133:15:function exp)', 'at ./index.rsh:129:21:application call to "runBuyer0" (defined at: ./index.rsh:129:21:function exp)', 'at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)', 'at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
      msg: 'getRecipients',
      who: 'Buyer'
       });
    const v381 = stdlib.gt(v8, stdlib.checkedBigNumberify('./index.rsh:90:43:decimal', stdlib.UInt_max, 0));
    const v397 = v379[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 0)];
    const v398 = v379[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 1)];
    const v399 = v379[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 2)];
    const v400 = v379[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 3)];
    const v401 = v379[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 4)];
    let v403;
    switch (v397[0]) {
      case 'None': {
        
        v403 = false;
        
        break;
         }
      case 'Some': {
        const v407 = v397[1];
        const v409 = v407.addr;
        const v410 = stdlib.eq(v409, v375);
        v403 = v410;
        
        break;
         }
       }
    let v425;
    if (v403) {
      v425 = v403;
       }
    else {
      let v415;
      switch (v398[0]) {
        case 'None': {
          
          v415 = false;
          
          break;
           }
        case 'Some': {
          const v419 = v398[1];
          const v421 = v419.addr;
          const v422 = stdlib.eq(v421, v375);
          v415 = v422;
          
          break;
           }
         }
      v425 = v415;
       }
    let v438;
    if (v425) {
      v438 = v425;
       }
    else {
      let v428;
      switch (v399[0]) {
        case 'None': {
          
          v428 = false;
          
          break;
           }
        case 'Some': {
          const v432 = v399[1];
          const v434 = v432.addr;
          const v435 = stdlib.eq(v434, v375);
          v428 = v435;
          
          break;
           }
         }
      v438 = v428;
       }
    let v451;
    if (v438) {
      v451 = v438;
       }
    else {
      let v441;
      switch (v400[0]) {
        case 'None': {
          
          v441 = false;
          
          break;
           }
        case 'Some': {
          const v445 = v400[1];
          const v447 = v445.addr;
          const v448 = stdlib.eq(v447, v375);
          v441 = v448;
          
          break;
           }
         }
      v451 = v441;
       }
    let v464;
    if (v451) {
      v464 = v451;
       }
    else {
      let v454;
      switch (v401[0]) {
        case 'None': {
          
          v454 = false;
          
          break;
           }
        case 'Some': {
          const v458 = v401[1];
          const v460 = v458.addr;
          const v461 = stdlib.eq(v460, v375);
          v454 = v461;
          
          break;
           }
         }
      v464 = v454;
       }
    let v488;
    switch (v397[0]) {
      case 'None': {
        
        const v498 = {
          addr: v375,
          isReal: false,
          percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
           };
        v488 = v498;
        
        break;
         }
      case 'Some': {
        const v492 = v397[1];
        const v494 = v492.addr;
        const v495 = v492.percentToReceive;
        const v499 = {
          addr: v494,
          isReal: true,
          percentToReceive: v495
           };
        v488 = v499;
        
        break;
         }
       }
    let v502;
    switch (v398[0]) {
      case 'None': {
        
        const v512 = {
          addr: v375,
          isReal: false,
          percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
           };
        v502 = v512;
        
        break;
         }
      case 'Some': {
        const v506 = v398[1];
        const v508 = v506.addr;
        const v509 = v506.percentToReceive;
        const v513 = {
          addr: v508,
          isReal: true,
          percentToReceive: v509
           };
        v502 = v513;
        
        break;
         }
       }
    let v516;
    switch (v399[0]) {
      case 'None': {
        
        const v526 = {
          addr: v375,
          isReal: false,
          percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
           };
        v516 = v526;
        
        break;
         }
      case 'Some': {
        const v520 = v399[1];
        const v522 = v520.addr;
        const v523 = v520.percentToReceive;
        const v527 = {
          addr: v522,
          isReal: true,
          percentToReceive: v523
           };
        v516 = v527;
        
        break;
         }
       }
    let v530;
    switch (v400[0]) {
      case 'None': {
        
        const v540 = {
          addr: v375,
          isReal: false,
          percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
           };
        v530 = v540;
        
        break;
         }
      case 'Some': {
        const v534 = v400[1];
        const v536 = v534.addr;
        const v537 = v534.percentToReceive;
        const v541 = {
          addr: v536,
          isReal: true,
          percentToReceive: v537
           };
        v530 = v541;
        
        break;
         }
       }
    let v544;
    switch (v401[0]) {
      case 'None': {
        
        const v554 = {
          addr: v375,
          isReal: false,
          percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
           };
        v544 = v554;
        
        break;
         }
      case 'Some': {
        const v548 = v401[1];
        const v550 = v548.addr;
        const v551 = v548.percentToReceive;
        const v555 = {
          addr: v550,
          isReal: true,
          percentToReceive: v551
           };
        v544 = v555;
        
        break;
         }
       }
    const v580 = v488.isReal;
    const v582 = v580 ? false : true;
    const v584 = v488.percentToReceive;
    const v585 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v584);
    const v587 = stdlib.lt(v584, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
    const v588 = v585 ? v587 : false;
    const v589 = v582 ? true : v588;
    const v593 = v589 ? false : true;
    const v595 = v502.isReal;
    const v597 = v595 ? false : true;
    const v599 = v593 ? true : v597;
    const v600 = v502.percentToReceive;
    const v601 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v600);
    const v603 = stdlib.lt(v600, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
    const v604 = v601 ? v603 : false;
    const v605 = v599 ? v589 : v604;
    const v609 = v605 ? false : true;
    const v611 = v516.isReal;
    const v613 = v611 ? false : true;
    const v615 = v609 ? true : v613;
    const v616 = v516.percentToReceive;
    const v617 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v616);
    const v619 = stdlib.lt(v616, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
    const v620 = v617 ? v619 : false;
    const v621 = v615 ? v605 : v620;
    const v625 = v621 ? false : true;
    const v627 = v530.isReal;
    const v629 = v627 ? false : true;
    const v631 = v625 ? true : v629;
    const v632 = v530.percentToReceive;
    const v633 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v632);
    const v635 = stdlib.lt(v632, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
    const v636 = v633 ? v635 : false;
    const v637 = v631 ? v621 : v636;
    const v641 = v637 ? false : true;
    const v643 = v544.isReal;
    const v645 = v643 ? false : true;
    const v647 = v641 ? true : v645;
    const v648 = v544.percentToReceive;
    const v649 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v648);
    const v651 = stdlib.lt(v648, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
    const v652 = v649 ? v651 : false;
    const v653 = v647 ? v637 : v652;
    const v673 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:104:55:decimal', stdlib.UInt_max, 0), v584);
    const v674 = v582 ? stdlib.checkedBigNumberify('./index.rsh:104:55:decimal', stdlib.UInt_max, 0) : v673;
    const v682 = stdlib.add(v674, v600);
    const v683 = v597 ? v674 : v682;
    const v691 = stdlib.add(v683, v616);
    const v692 = v613 ? v683 : v691;
    const v700 = stdlib.add(v692, v632);
    const v701 = v629 ? v692 : v700;
    const v709 = stdlib.add(v701, v648);
    const v710 = v645 ? v701 : v709;
    const v713 = v464 ? false : true;
    const v715 = v381 ? v713 : false;
    const v716 = v715 ? v653 : false;
    const v717 = stdlib.eq(v710, stdlib.checkedBigNumberify('./index.rsh:107:120:decimal', stdlib.UInt_max, 1));
    const v718 = v716 ? v717 : false;
    const v721 = v718 ? false : true;
    if (v721) {
      stdlib.protect(ctc1, await interact.errorGenericInvalidAmounts(), {
        at: './index.rsh:141:50:application',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:133:15:function exp)', 'at ./index.rsh:129:21:application call to "runBuyer0" (defined at: ./index.rsh:129:21:function exp)', 'at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)', 'at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: 'errorGenericInvalidAmounts',
        who: 'Buyer'
         });
       }
    else {
       }
    const v727 = ['Buyer', null];
    const txn2 = await (ctc.sendrecv('Buyer', 4, 1, stdlib.checkedBigNumberify('./index.rsh:129:21:dot', stdlib.UInt_max, 2), [ctc2, ctc0, ctc0, ctc6], [v11, v1311, v1312, v727], stdlib.checkedBigNumberify('./index.rsh:132:14:decimal', stdlib.UInt_max, 0), [ctc6], v718, false, stdlib.checkedBigNumberify('./index.rsh:196:21:application', stdlib.UInt_max, 0), (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:129:21:dot', stdlib.UInt_max, 2), v11, v1311, v1312]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:129:21:dot', stdlib.UInt_max, 2), v11, v1311]);
      const [v733] = txn2.data;
      const v734 = txn2.value;
      const v742 = txn2.time;
      const v732 = txn2.from;
      
      let v735;
      switch (v733[0]) {
        case 'Buyer': {
          
          v735 = stdlib.checkedBigNumberify('./index.rsh:132:14:decimal', stdlib.UInt_max, 0);
          
          break;
           }
         }
      const v739 = stdlib.eq(v734, v735);
      stdlib.assert(v739, {
        at: './index.rsh:129:21:dot',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: 'pay amount correct',
        who: 'Buyer'
         });
      stdlib.assert(true, {
        at: './index.rsh:129:21:dot',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: 'sender correct',
        who: 'Buyer'
         });
      const v741 = stdlib.add(v1311, v734);
      let v743;
      switch (v733[0]) {
        case 'Buyer': {
          
          v743 = true;
          
          break;
           }
         }
      stdlib.assert(v743, {
        at: './index.rsh:129:21:application',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: null,
        who: 'Buyer'
         });
      switch (v733[0]) {
        case 'Buyer': {
          
          sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:152:21:after expr stmt semicolon', stdlib.UInt_max, 4), v11, v741, v742]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:152:21:after expr stmt semicolon', stdlib.UInt_max, 4), v11, v741]);
          sim_r.isHalt = false;
          
          break;
           }
         }
      return sim_r;
       })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv('Buyer', 5, 0, stdlib.checkedBigNumberify('./index.rsh:197:19:dot', stdlib.UInt_max, 2), [ctc2, ctc0, ctc0], [v11, v1311, v1312], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:197:19:dot', stdlib.UInt_max, 2), v11, v1311, v1312]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:197:19:dot', stdlib.UInt_max, 2), v11, v1311]);
        const [] = txn3.data;
        const v1296 = txn3.value;
        const v1300 = txn3.time;
        const v1295 = txn3.from;
        
        const v1297 = stdlib.eq(v1296, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v1297, {
          at: './index.rsh:197:19:dot',
          fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
          msg: 'pay amount correct',
          who: 'Buyer'
           });
        stdlib.assert(true, {
          at: './index.rsh:197:19:dot',
          fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
          msg: 'sender correct',
          who: 'Buyer'
           });
        const v1299 = stdlib.add(v1311, v1296);
        v22 = true;
        const cv18 = v22;
        const cv1311 = v1299;
        const cv1312 = v1300;
        
        (() => {
          const v18 = cv18;
          const v1311 = cv1311;
          const v1312 = cv1312;
          
          if ((() => {
            
            return v18; })()) {
            let v22;
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:129:21:after expr stmt semicolon', stdlib.UInt_max, 2), v11, v1311, v1312]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:129:21:after expr stmt semicolon', stdlib.UInt_max, 2), v11, v1311]);
            sim_r.isHalt = false;
             }
          else {
            const v1303 = stdlib.gt(v1311, stdlib.checkedBigNumberify('./index.rsh:201:20:decimal', stdlib.UInt_max, 0));
            if (v1303) {
              sim_r.txns.push({
                amt: v1311,
                to: v11
                 });
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.isHalt = true;
               }
            else {
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.isHalt = true;
               } } })();
        return sim_r;
         })));
      const [] = txn3.data;
      const v1296 = txn3.value;
      const v1300 = txn3.time;
      const v1295 = txn3.from;
      const v1297 = stdlib.eq(v1296, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v1297, {
        at: './index.rsh:197:19:dot',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: 'pay amount correct',
        who: 'Buyer'
         });
      stdlib.assert(true, {
        at: './index.rsh:197:19:dot',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: 'sender correct',
        who: 'Buyer'
         });
      const v1299 = stdlib.add(v1311, v1296);
      v22 = true;
      const cv18 = v22;
      const cv1311 = v1299;
      const cv1312 = v1300;
      
      v18 = cv18;
      v1311 = cv1311;
      v1312 = cv1312;
      
      continue;
       }
    else {
      const [v733] = txn2.data;
      const v734 = txn2.value;
      const v742 = txn2.time;
      const v732 = txn2.from;
      let v735;
      switch (v733[0]) {
        case 'Buyer': {
          
          v735 = stdlib.checkedBigNumberify('./index.rsh:132:14:decimal', stdlib.UInt_max, 0);
          
          break;
           }
         }
      const v739 = stdlib.eq(v734, v735);
      stdlib.assert(v739, {
        at: './index.rsh:129:21:dot',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: 'pay amount correct',
        who: 'Buyer'
         });
      stdlib.assert(true, {
        at: './index.rsh:129:21:dot',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: 'sender correct',
        who: 'Buyer'
         });
      const v741 = stdlib.add(v1311, v734);
      let v743;
      switch (v733[0]) {
        case 'Buyer': {
          
          v743 = true;
          
          break;
           }
         }
      stdlib.assert(v743, {
        at: './index.rsh:129:21:application',
        fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
        msg: null,
        who: 'Buyer'
         });
      switch (v733[0]) {
        case 'Buyer': {
          
          const v750 = stdlib.protect(ctc5, await interact.getRecipients(), {
            at: './index.rsh:157:39:application',
            fs: ['at ./index.rsh:154:23:application call to [unknown function] (defined at: ./index.rsh:154:27:function exp)', 'at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
            msg: 'getRecipients',
            who: 'Buyer'
             });
          const txn3 = await (ctc.sendrecv('Buyer', 6, 2, stdlib.checkedBigNumberify('./index.rsh:159:19:dot', stdlib.UInt_max, 2), [ctc2, ctc0, ctc0, ctc0, ctc5], [v11, v741, v742, v8, v750], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc5], true, false, false, (async (txn3) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:159:19:dot', stdlib.UInt_max, 4), v11, v741, v742]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:159:19:dot', stdlib.UInt_max, 4), v11, v741]);
            const [v752, v753] = txn3.data;
            const v754 = txn3.value;
            const v758 = txn3.time;
            const v751 = txn3.from;
            
            const v755 = stdlib.eq(v754, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v755, {
              at: './index.rsh:159:19:dot',
              fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
              msg: 'pay amount correct',
              who: 'Buyer'
               });
            stdlib.assert(true, {
              at: './index.rsh:159:19:dot',
              fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
              msg: 'sender correct',
              who: 'Buyer'
               });
            const v757 = stdlib.add(v741, v754);
            const v760 = stdlib.gt(v752, stdlib.checkedBigNumberify('./index.rsh:90:43:decimal', stdlib.UInt_max, 0));
            const v776 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 0)];
            const v777 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 1)];
            const v778 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 2)];
            const v779 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 3)];
            const v780 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 4)];
            let v782;
            switch (v776[0]) {
              case 'None': {
                
                v782 = false;
                
                break;
                 }
              case 'Some': {
                const v786 = v776[1];
                const v788 = v786.addr;
                const v789 = stdlib.eq(v788, v751);
                v782 = v789;
                
                break;
                 }
               }
            let v804;
            if (v782) {
              v804 = v782;
               }
            else {
              let v794;
              switch (v777[0]) {
                case 'None': {
                  
                  v794 = false;
                  
                  break;
                   }
                case 'Some': {
                  const v798 = v777[1];
                  const v800 = v798.addr;
                  const v801 = stdlib.eq(v800, v751);
                  v794 = v801;
                  
                  break;
                   }
                 }
              v804 = v794;
               }
            let v817;
            if (v804) {
              v817 = v804;
               }
            else {
              let v807;
              switch (v778[0]) {
                case 'None': {
                  
                  v807 = false;
                  
                  break;
                   }
                case 'Some': {
                  const v811 = v778[1];
                  const v813 = v811.addr;
                  const v814 = stdlib.eq(v813, v751);
                  v807 = v814;
                  
                  break;
                   }
                 }
              v817 = v807;
               }
            let v830;
            if (v817) {
              v830 = v817;
               }
            else {
              let v820;
              switch (v779[0]) {
                case 'None': {
                  
                  v820 = false;
                  
                  break;
                   }
                case 'Some': {
                  const v824 = v779[1];
                  const v826 = v824.addr;
                  const v827 = stdlib.eq(v826, v751);
                  v820 = v827;
                  
                  break;
                   }
                 }
              v830 = v820;
               }
            let v843;
            if (v830) {
              v843 = v830;
               }
            else {
              let v833;
              switch (v780[0]) {
                case 'None': {
                  
                  v833 = false;
                  
                  break;
                   }
                case 'Some': {
                  const v837 = v780[1];
                  const v839 = v837.addr;
                  const v840 = stdlib.eq(v839, v751);
                  v833 = v840;
                  
                  break;
                   }
                 }
              v843 = v833;
               }
            let v867;
            switch (v776[0]) {
              case 'None': {
                
                const v877 = {
                  addr: v751,
                  isReal: false,
                  percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                   };
                v867 = v877;
                
                break;
                 }
              case 'Some': {
                const v871 = v776[1];
                const v873 = v871.addr;
                const v874 = v871.percentToReceive;
                const v878 = {
                  addr: v873,
                  isReal: true,
                  percentToReceive: v874
                   };
                v867 = v878;
                
                break;
                 }
               }
            let v881;
            switch (v777[0]) {
              case 'None': {
                
                const v891 = {
                  addr: v751,
                  isReal: false,
                  percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                   };
                v881 = v891;
                
                break;
                 }
              case 'Some': {
                const v885 = v777[1];
                const v887 = v885.addr;
                const v888 = v885.percentToReceive;
                const v892 = {
                  addr: v887,
                  isReal: true,
                  percentToReceive: v888
                   };
                v881 = v892;
                
                break;
                 }
               }
            let v895;
            switch (v778[0]) {
              case 'None': {
                
                const v905 = {
                  addr: v751,
                  isReal: false,
                  percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                   };
                v895 = v905;
                
                break;
                 }
              case 'Some': {
                const v899 = v778[1];
                const v901 = v899.addr;
                const v902 = v899.percentToReceive;
                const v906 = {
                  addr: v901,
                  isReal: true,
                  percentToReceive: v902
                   };
                v895 = v906;
                
                break;
                 }
               }
            let v909;
            switch (v779[0]) {
              case 'None': {
                
                const v919 = {
                  addr: v751,
                  isReal: false,
                  percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                   };
                v909 = v919;
                
                break;
                 }
              case 'Some': {
                const v913 = v779[1];
                const v915 = v913.addr;
                const v916 = v913.percentToReceive;
                const v920 = {
                  addr: v915,
                  isReal: true,
                  percentToReceive: v916
                   };
                v909 = v920;
                
                break;
                 }
               }
            let v923;
            switch (v780[0]) {
              case 'None': {
                
                const v933 = {
                  addr: v751,
                  isReal: false,
                  percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                   };
                v923 = v933;
                
                break;
                 }
              case 'Some': {
                const v927 = v780[1];
                const v929 = v927.addr;
                const v930 = v927.percentToReceive;
                const v934 = {
                  addr: v929,
                  isReal: true,
                  percentToReceive: v930
                   };
                v923 = v934;
                
                break;
                 }
               }
            const v959 = v867.isReal;
            const v961 = v959 ? false : true;
            const v963 = v867.percentToReceive;
            const v964 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v963);
            const v966 = stdlib.lt(v963, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
            const v967 = v964 ? v966 : false;
            const v968 = v961 ? true : v967;
            const v972 = v968 ? false : true;
            const v974 = v881.isReal;
            const v976 = v974 ? false : true;
            const v978 = v972 ? true : v976;
            const v979 = v881.percentToReceive;
            const v980 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v979);
            const v982 = stdlib.lt(v979, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
            const v983 = v980 ? v982 : false;
            const v984 = v978 ? v968 : v983;
            const v988 = v984 ? false : true;
            const v990 = v895.isReal;
            const v992 = v990 ? false : true;
            const v994 = v988 ? true : v992;
            const v995 = v895.percentToReceive;
            const v996 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v995);
            const v998 = stdlib.lt(v995, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
            const v999 = v996 ? v998 : false;
            const v1000 = v994 ? v984 : v999;
            const v1004 = v1000 ? false : true;
            const v1006 = v909.isReal;
            const v1008 = v1006 ? false : true;
            const v1010 = v1004 ? true : v1008;
            const v1011 = v909.percentToReceive;
            const v1012 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v1011);
            const v1014 = stdlib.lt(v1011, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
            const v1015 = v1012 ? v1014 : false;
            const v1016 = v1010 ? v1000 : v1015;
            const v1020 = v1016 ? false : true;
            const v1022 = v923.isReal;
            const v1024 = v1022 ? false : true;
            const v1026 = v1020 ? true : v1024;
            const v1027 = v923.percentToReceive;
            const v1028 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v1027);
            const v1030 = stdlib.lt(v1027, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
            const v1031 = v1028 ? v1030 : false;
            const v1032 = v1026 ? v1016 : v1031;
            const v1052 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:104:55:decimal', stdlib.UInt_max, 0), v963);
            const v1053 = v961 ? stdlib.checkedBigNumberify('./index.rsh:104:55:decimal', stdlib.UInt_max, 0) : v1052;
            const v1061 = stdlib.add(v1053, v979);
            const v1062 = v976 ? v1053 : v1061;
            const v1070 = stdlib.add(v1062, v995);
            const v1071 = v992 ? v1062 : v1070;
            const v1079 = stdlib.add(v1071, v1011);
            const v1080 = v1008 ? v1071 : v1079;
            const v1088 = stdlib.add(v1080, v1027);
            const v1089 = v1024 ? v1080 : v1088;
            const v1092 = v843 ? false : true;
            const v1094 = v760 ? v1092 : false;
            const v1095 = v1094 ? v1032 : false;
            const v1096 = stdlib.eq(v1089, stdlib.checkedBigNumberify('./index.rsh:107:120:decimal', stdlib.UInt_max, 1));
            const v1097 = v1095 ? v1096 : false;
            const v1100 = v1097 ? false : true;
            if (v1100) {
              v22 = true;
              const cv18 = v22;
              const cv1311 = v757;
              const cv1312 = v758;
              
              (() => {
                const v18 = cv18;
                const v1311 = cv1311;
                const v1312 = cv1312;
                
                if ((() => {
                  
                  return v18; })()) {
                  let v22;
                  sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:129:21:after expr stmt semicolon', stdlib.UInt_max, 2), v11, v1311, v1312]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:129:21:after expr stmt semicolon', stdlib.UInt_max, 2), v11, v1311]);
                  sim_r.isHalt = false;
                   }
                else {
                  const v1303 = stdlib.gt(v1311, stdlib.checkedBigNumberify('./index.rsh:201:20:decimal', stdlib.UInt_max, 0));
                  if (v1303) {
                    sim_r.txns.push({
                      amt: v1311,
                      to: v11
                       });
                    sim_r.nextSt = stdlib.digest(ctc9, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                    sim_r.isHalt = true;
                     }
                  else {
                    sim_r.nextSt = stdlib.digest(ctc9, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                    sim_r.isHalt = true;
                     } } })(); }
            else {
              sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:169:23:after expr stmt semicolon', stdlib.UInt_max, 6), v11, v752, v757, v758, v867, v881, v895, v909, v923, v961, v963, v976, v979, v992, v995, v1008, v1011, v1024, v1027]);
              sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:169:23:after expr stmt semicolon', stdlib.UInt_max, 6), v11, v752, v757, v867, v881, v895, v909, v923, v961, v963, v976, v979, v992, v995, v1008, v1011, v1024, v1027]);
              sim_r.isHalt = false;
               }
            return sim_r;
             })));
          const [v752, v753] = txn3.data;
          const v754 = txn3.value;
          const v758 = txn3.time;
          const v751 = txn3.from;
          const v755 = stdlib.eq(v754, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v755, {
            at: './index.rsh:159:19:dot',
            fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
            msg: 'pay amount correct',
            who: 'Buyer'
             });
          stdlib.assert(true, {
            at: './index.rsh:159:19:dot',
            fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
            msg: 'sender correct',
            who: 'Buyer'
             });
          const v757 = stdlib.add(v741, v754);
          const v760 = stdlib.gt(v752, stdlib.checkedBigNumberify('./index.rsh:90:43:decimal', stdlib.UInt_max, 0));
          const v776 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 0)];
          const v777 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 1)];
          const v778 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 2)];
          const v779 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 3)];
          const v780 = v753[stdlib.checkedBigNumberify('./index.rsh:91:45:application', stdlib.UInt_max, 4)];
          let v782;
          switch (v776[0]) {
            case 'None': {
              
              v782 = false;
              
              break;
               }
            case 'Some': {
              const v786 = v776[1];
              const v788 = v786.addr;
              const v789 = stdlib.eq(v788, v751);
              v782 = v789;
              
              break;
               }
             }
          let v804;
          if (v782) {
            v804 = v782;
             }
          else {
            let v794;
            switch (v777[0]) {
              case 'None': {
                
                v794 = false;
                
                break;
                 }
              case 'Some': {
                const v798 = v777[1];
                const v800 = v798.addr;
                const v801 = stdlib.eq(v800, v751);
                v794 = v801;
                
                break;
                 }
               }
            v804 = v794;
             }
          let v817;
          if (v804) {
            v817 = v804;
             }
          else {
            let v807;
            switch (v778[0]) {
              case 'None': {
                
                v807 = false;
                
                break;
                 }
              case 'Some': {
                const v811 = v778[1];
                const v813 = v811.addr;
                const v814 = stdlib.eq(v813, v751);
                v807 = v814;
                
                break;
                 }
               }
            v817 = v807;
             }
          let v830;
          if (v817) {
            v830 = v817;
             }
          else {
            let v820;
            switch (v779[0]) {
              case 'None': {
                
                v820 = false;
                
                break;
                 }
              case 'Some': {
                const v824 = v779[1];
                const v826 = v824.addr;
                const v827 = stdlib.eq(v826, v751);
                v820 = v827;
                
                break;
                 }
               }
            v830 = v820;
             }
          let v843;
          if (v830) {
            v843 = v830;
             }
          else {
            let v833;
            switch (v780[0]) {
              case 'None': {
                
                v833 = false;
                
                break;
                 }
              case 'Some': {
                const v837 = v780[1];
                const v839 = v837.addr;
                const v840 = stdlib.eq(v839, v751);
                v833 = v840;
                
                break;
                 }
               }
            v843 = v833;
             }
          let v867;
          switch (v776[0]) {
            case 'None': {
              
              const v877 = {
                addr: v751,
                isReal: false,
                percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                 };
              v867 = v877;
              
              break;
               }
            case 'Some': {
              const v871 = v776[1];
              const v873 = v871.addr;
              const v874 = v871.percentToReceive;
              const v878 = {
                addr: v873,
                isReal: true,
                percentToReceive: v874
                 };
              v867 = v878;
              
              break;
               }
             }
          let v881;
          switch (v777[0]) {
            case 'None': {
              
              const v891 = {
                addr: v751,
                isReal: false,
                percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                 };
              v881 = v891;
              
              break;
               }
            case 'Some': {
              const v885 = v777[1];
              const v887 = v885.addr;
              const v888 = v885.percentToReceive;
              const v892 = {
                addr: v887,
                isReal: true,
                percentToReceive: v888
                 };
              v881 = v892;
              
              break;
               }
             }
          let v895;
          switch (v778[0]) {
            case 'None': {
              
              const v905 = {
                addr: v751,
                isReal: false,
                percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                 };
              v895 = v905;
              
              break;
               }
            case 'Some': {
              const v899 = v778[1];
              const v901 = v899.addr;
              const v902 = v899.percentToReceive;
              const v906 = {
                addr: v901,
                isReal: true,
                percentToReceive: v902
                 };
              v895 = v906;
              
              break;
               }
             }
          let v909;
          switch (v779[0]) {
            case 'None': {
              
              const v919 = {
                addr: v751,
                isReal: false,
                percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                 };
              v909 = v919;
              
              break;
               }
            case 'Some': {
              const v913 = v779[1];
              const v915 = v913.addr;
              const v916 = v913.percentToReceive;
              const v920 = {
                addr: v915,
                isReal: true,
                percentToReceive: v916
                 };
              v909 = v920;
              
              break;
               }
             }
          let v923;
          switch (v780[0]) {
            case 'None': {
              
              const v933 = {
                addr: v751,
                isReal: false,
                percentToReceive: stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, 0)
                 };
              v923 = v933;
              
              break;
               }
            case 'Some': {
              const v927 = v780[1];
              const v929 = v927.addr;
              const v930 = v927.percentToReceive;
              const v934 = {
                addr: v929,
                isReal: true,
                percentToReceive: v930
                 };
              v923 = v934;
              
              break;
               }
             }
          const v959 = v867.isReal;
          const v961 = v959 ? false : true;
          const v963 = v867.percentToReceive;
          const v964 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v963);
          const v966 = stdlib.lt(v963, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
          const v967 = v964 ? v966 : false;
          const v968 = v961 ? true : v967;
          const v972 = v968 ? false : true;
          const v974 = v881.isReal;
          const v976 = v974 ? false : true;
          const v978 = v972 ? true : v976;
          const v979 = v881.percentToReceive;
          const v980 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v979);
          const v982 = stdlib.lt(v979, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
          const v983 = v980 ? v982 : false;
          const v984 = v978 ? v968 : v983;
          const v988 = v984 ? false : true;
          const v990 = v895.isReal;
          const v992 = v990 ? false : true;
          const v994 = v988 ? true : v992;
          const v995 = v895.percentToReceive;
          const v996 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v995);
          const v998 = stdlib.lt(v995, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
          const v999 = v996 ? v998 : false;
          const v1000 = v994 ? v984 : v999;
          const v1004 = v1000 ? false : true;
          const v1006 = v909.isReal;
          const v1008 = v1006 ? false : true;
          const v1010 = v1004 ? true : v1008;
          const v1011 = v909.percentToReceive;
          const v1012 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v1011);
          const v1014 = stdlib.lt(v1011, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
          const v1015 = v1012 ? v1014 : false;
          const v1016 = v1010 ? v1000 : v1015;
          const v1020 = v1016 ? false : true;
          const v1022 = v923.isReal;
          const v1024 = v1022 ? false : true;
          const v1026 = v1020 ? true : v1024;
          const v1027 = v923.percentToReceive;
          const v1028 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, 0), v1027);
          const v1030 = stdlib.lt(v1027, stdlib.checkedBigNumberify('./index.rsh:103:76:decimal', stdlib.UInt_max, 1));
          const v1031 = v1028 ? v1030 : false;
          const v1032 = v1026 ? v1016 : v1031;
          const v1052 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:104:55:decimal', stdlib.UInt_max, 0), v963);
          const v1053 = v961 ? stdlib.checkedBigNumberify('./index.rsh:104:55:decimal', stdlib.UInt_max, 0) : v1052;
          const v1061 = stdlib.add(v1053, v979);
          const v1062 = v976 ? v1053 : v1061;
          const v1070 = stdlib.add(v1062, v995);
          const v1071 = v992 ? v1062 : v1070;
          const v1079 = stdlib.add(v1071, v1011);
          const v1080 = v1008 ? v1071 : v1079;
          const v1088 = stdlib.add(v1080, v1027);
          const v1089 = v1024 ? v1080 : v1088;
          const v1092 = v843 ? false : true;
          const v1094 = v760 ? v1092 : false;
          const v1095 = v1094 ? v1032 : false;
          const v1096 = stdlib.eq(v1089, stdlib.checkedBigNumberify('./index.rsh:107:120:decimal', stdlib.UInt_max, 1));
          const v1097 = v1095 ? v1096 : false;
          const v1100 = v1097 ? false : true;
          if (v1100) {
            stdlib.protect(ctc1, await interact.errorGenericInvalidAmounts(), {
              at: './index.rsh:163:78:application',
              fs: ['at ./index.rsh:163:25:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)', 'at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
              msg: 'errorGenericInvalidAmounts',
              who: 'Buyer'
               });
            
            v22 = true;
            const cv18 = v22;
            const cv1311 = v757;
            const cv1312 = v758;
            
            v18 = cv18;
            v1311 = cv1311;
            v1312 = cv1312;
            
            continue;
             }
          else {
            const txn4 = await (ctc.sendrecv('Buyer', 7, 0, stdlib.checkedBigNumberify('./index.rsh:170:21:dot', stdlib.UInt_max, 3), [ctc2, ctc0, ctc0, ctc0, ctc11, ctc11, ctc11, ctc11, ctc11, ctc10, ctc0, ctc10, ctc0, ctc10, ctc0, ctc10, ctc0, ctc10, ctc0], [v11, v752, v757, v758, v867, v881, v895, v909, v923, v961, v963, v976, v979, v992, v995, v1008, v1011, v1024, v1027], v752, [], true, false, false, (async (txn4) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:170:21:dot', stdlib.UInt_max, 6), v11, v752, v757, v758, v867, v881, v895, v909, v923, v961, v963, v976, v979, v992, v995, v1008, v1011, v1024, v1027]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:170:21:dot', stdlib.UInt_max, 6), v11, v752, v757, v867, v881, v895, v909, v923, v961, v963, v976, v979, v992, v995, v1008, v1011, v1024, v1027]);
              const [] = txn4.data;
              const v1110 = txn4.value;
              const v1114 = txn4.time;
              const v1109 = txn4.from;
              
              const v1111 = stdlib.eq(v1110, v752);
              stdlib.assert(v1111, {
                at: './index.rsh:170:21:dot',
                fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
                msg: 'pay amount correct',
                who: 'Buyer'
                 });
              stdlib.assert(true, {
                at: './index.rsh:170:21:dot',
                fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
                msg: 'sender correct',
                who: 'Buyer'
                 });
              const v1113 = stdlib.add(v757, v1110);
              const v1153 = stdlib.mul(v752, v963);
              if (v961) {
                 }
              else {
                 }
              const v1172 = v867.addr;
              sim_r.txns.push({
                amt: v1153,
                to: v1172
                 });
              const v1176 = stdlib.sub(v1113, v1153);
              const v1181 = stdlib.mul(v752, v979);
              if (v976) {
                 }
              else {
                 }
              const v1200 = v881.addr;
              sim_r.txns.push({
                amt: v1181,
                to: v1200
                 });
              const v1204 = stdlib.sub(v1176, v1181);
              const v1209 = stdlib.mul(v752, v995);
              if (v992) {
                 }
              else {
                 }
              const v1228 = v895.addr;
              sim_r.txns.push({
                amt: v1209,
                to: v1228
                 });
              const v1232 = stdlib.sub(v1204, v1209);
              const v1237 = stdlib.mul(v752, v1011);
              if (v1008) {
                 }
              else {
                 }
              const v1256 = v909.addr;
              sim_r.txns.push({
                amt: v1237,
                to: v1256
                 });
              const v1260 = stdlib.sub(v1232, v1237);
              const v1265 = stdlib.mul(v752, v1027);
              if (v1024) {
                 }
              else {
                 }
              const v1284 = v923.addr;
              sim_r.txns.push({
                amt: v1265,
                to: v1284
                 });
              const v1288 = stdlib.sub(v1260, v1265);
              v22 = true;
              const cv18 = v22;
              const cv1311 = v1288;
              const cv1312 = v1114;
              
              (() => {
                const v18 = cv18;
                const v1311 = cv1311;
                const v1312 = cv1312;
                
                if ((() => {
                  
                  return v18; })()) {
                  let v22;
                  sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:129:21:after expr stmt semicolon', stdlib.UInt_max, 2), v11, v1311, v1312]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:129:21:after expr stmt semicolon', stdlib.UInt_max, 2), v11, v1311]);
                  sim_r.isHalt = false;
                   }
                else {
                  const v1303 = stdlib.gt(v1311, stdlib.checkedBigNumberify('./index.rsh:201:20:decimal', stdlib.UInt_max, 0));
                  if (v1303) {
                    sim_r.txns.push({
                      amt: v1311,
                      to: v11
                       });
                    sim_r.nextSt = stdlib.digest(ctc9, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                    sim_r.isHalt = true;
                     }
                  else {
                    sim_r.nextSt = stdlib.digest(ctc9, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                    sim_r.isHalt = true;
                     } } })();
              return sim_r;
               })));
            const [] = txn4.data;
            const v1110 = txn4.value;
            const v1114 = txn4.time;
            const v1109 = txn4.from;
            const v1111 = stdlib.eq(v1110, v752);
            stdlib.assert(v1111, {
              at: './index.rsh:170:21:dot',
              fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
              msg: 'pay amount correct',
              who: 'Buyer'
               });
            stdlib.assert(true, {
              at: './index.rsh:170:21:dot',
              fs: ['at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
              msg: 'sender correct',
              who: 'Buyer'
               });
            const v1113 = stdlib.add(v757, v1110);
            const v1153 = stdlib.mul(v752, v963);
            if (v961) {
               }
            else {
               }
            const v1172 = v867.addr;
            ;
            const v1176 = stdlib.sub(v1113, v1153);
            const v1181 = stdlib.mul(v752, v979);
            if (v976) {
               }
            else {
               }
            const v1200 = v881.addr;
            ;
            const v1204 = stdlib.sub(v1176, v1181);
            const v1209 = stdlib.mul(v752, v995);
            if (v992) {
               }
            else {
               }
            const v1228 = v895.addr;
            ;
            const v1232 = stdlib.sub(v1204, v1209);
            const v1237 = stdlib.mul(v752, v1011);
            if (v1008) {
               }
            else {
               }
            const v1256 = v909.addr;
            ;
            const v1260 = stdlib.sub(v1232, v1237);
            const v1265 = stdlib.mul(v752, v1027);
            if (v1024) {
               }
            else {
               }
            const v1284 = v923.addr;
            ;
            const v1288 = stdlib.sub(v1260, v1265);
            v22 = true;
            const cv18 = v22;
            const cv1311 = v1288;
            const cv1312 = v1114;
            
            v18 = cv18;
            v1311 = cv1311;
            v1312 = cv1312;
            
            continue;
             }
          
          break;
           }
         } }
     }
  const v1303 = stdlib.gt(v1311, stdlib.checkedBigNumberify('./index.rsh:201:20:decimal', stdlib.UInt_max, 0));
  if (v1303) {
    ;
    return; }
  else {
    return; }
  
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
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
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
  stepargs: [0, 81, 0, 0, 122, 121, 334, 379],
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
int 5
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
// "./index.rsh:126:14:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:126:14:dot"
// "[]"
int 1
assert
int 0
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// compute state in HM_Set 2
int 2
itob
gtxn 3 Sender
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, null, null, `#pragma version 3
// Handler 4
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
int 8
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
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
gtxna 0 ApplicationArgs 7
int 0
getbyte
int 0
==
bz l1
int 0
store 253
l1:
l0:
// Just "pay amount correct"
// "./index.rsh:129:21:dot"
// "[at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
load 253
==
assert
// Just "sender correct"
// "./index.rsh:129:21:dot"
// "[at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)]"
int 1
assert
gtxna 0 ApplicationArgs 6
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 252
gtxna 0 ApplicationArgs 7
int 0
getbyte
int 0
==
bz l3
int 1
store 251
l3:
l2:
// Nothing
// "./index.rsh:129:21:application"
// "[at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)]"
load 251
assert
gtxna 0 ApplicationArgs 7
int 0
getbyte
int 0
==
bz l5
// compute state in HM_Set 4
int 4
itob
gtxna 0 ApplicationArgs 5
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 0
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l5:
l4:
done:
int 1
return
`, `#pragma version 3
// Handler 5
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
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
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
// "./index.rsh:197:19:dot"
// "[at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:197:19:dot"
// "[at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)]"
int 1
assert
gtxna 0 ApplicationArgs 6
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 254
int 1
dup
store 255
bz l0
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 0
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
l0:
load 254
int 0
>
bz l1
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
load 254
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
gtxna 0 ApplicationArgs 4
btoi
int 0
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
l1:
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
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
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 0
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 6
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
int 9
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
// compute state in HM_Check 4
int 4
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
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
// "./index.rsh:159:19:dot"
// "[at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:159:19:dot"
// "[at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)]"
int 1
assert
gtxna 0 ApplicationArgs 6
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 240
gtxna 0 ApplicationArgs 8
substring 0 41
store 239
gtxna 0 ApplicationArgs 8
substring 41 82
store 238
gtxna 0 ApplicationArgs 8
substring 82 123
store 237
gtxna 0 ApplicationArgs 8
substring 123 164
store 236
gtxna 0 ApplicationArgs 8
substring 164 205
store 235
load 239
int 0
getbyte
int 0
==
bz l1
int 0
store 234
l1:
load 239
int 0
getbyte
int 1
==
bz l2
load 239
substring 1 41
dup
store 233
substring 0 32
gtxn 3 Sender
==
store 234
l2:
l0:
load 234
bz l3
load 234
store 233
b l4
l3:
load 238
int 0
getbyte
int 0
==
bz l6
int 0
store 232
l6:
load 238
int 0
getbyte
int 1
==
bz l7
load 238
substring 1 41
dup
store 231
substring 0 32
gtxn 3 Sender
==
store 232
l7:
l5:
load 232
store 233
l4:
load 233
bz l8
load 233
store 232
b l9
l8:
load 237
int 0
getbyte
int 0
==
bz l11
int 0
store 231
l11:
load 237
int 0
getbyte
int 1
==
bz l12
load 237
substring 1 41
dup
store 230
substring 0 32
gtxn 3 Sender
==
store 231
l12:
l10:
load 231
store 232
l9:
load 232
bz l13
load 232
store 231
b l14
l13:
load 236
int 0
getbyte
int 0
==
bz l16
int 0
store 230
l16:
load 236
int 0
getbyte
int 1
==
bz l17
load 236
substring 1 41
dup
store 229
substring 0 32
gtxn 3 Sender
==
store 230
l17:
l15:
load 230
store 231
l14:
load 231
bz l18
load 231
store 230
b l19
l18:
load 235
int 0
getbyte
int 0
==
bz l21
int 0
store 229
l21:
load 235
int 0
getbyte
int 1
==
bz l22
load 235
substring 1 41
dup
store 228
substring 0 32
gtxn 3 Sender
==
store 229
l22:
l20:
load 229
store 230
l19:
load 239
int 0
getbyte
int 0
==
bz l24
gtxn 3 Sender
int 0
itob // bool
substring 7 8
concat
int 0
itob
concat
store 229
l24:
load 239
int 0
getbyte
int 1
==
bz l25
load 239
substring 1 41
dup
store 228
substring 0 32
int 1
itob // bool
substring 7 8
concat
load 228
substring 32 40
concat
store 229
l25:
l23:
load 238
int 0
getbyte
int 0
==
bz l27
gtxn 3 Sender
int 0
itob // bool
substring 7 8
concat
int 0
itob
concat
store 228
l27:
load 238
int 0
getbyte
int 1
==
bz l28
load 238
substring 1 41
dup
store 227
substring 0 32
int 1
itob // bool
substring 7 8
concat
load 227
substring 32 40
concat
store 228
l28:
l26:
load 237
int 0
getbyte
int 0
==
bz l30
gtxn 3 Sender
int 0
itob // bool
substring 7 8
concat
int 0
itob
concat
store 227
l30:
load 237
int 0
getbyte
int 1
==
bz l31
load 237
substring 1 41
dup
store 226
substring 0 32
int 1
itob // bool
substring 7 8
concat
load 226
substring 32 40
concat
store 227
l31:
l29:
load 236
int 0
getbyte
int 0
==
bz l33
gtxn 3 Sender
int 0
itob // bool
substring 7 8
concat
int 0
itob
concat
store 226
l33:
load 236
int 0
getbyte
int 1
==
bz l34
load 236
substring 1 41
dup
store 225
substring 0 32
int 1
itob // bool
substring 7 8
concat
load 225
substring 32 40
concat
store 226
l34:
l32:
load 235
int 0
getbyte
int 0
==
bz l36
gtxn 3 Sender
int 0
itob // bool
substring 7 8
concat
int 0
itob
concat
store 225
l36:
load 235
int 0
getbyte
int 1
==
bz l37
load 235
substring 1 41
dup
store 224
substring 0 32
int 1
itob // bool
substring 7 8
concat
load 224
substring 32 40
concat
store 225
l37:
l35:
load 229
substring 32 33
btoi
!
store 224
load 229
substring 33 41
btoi
store 223
load 224
int 0
load 223
<
load 223
int 1
<
&&
||
store 222
load 228
substring 32 33
btoi
!
store 221
load 228
substring 33 41
btoi
store 220
int 0
load 220
<
load 220
int 1
<
&&
load 222
load 222
!
load 221
||
select
store 219
load 227
substring 32 33
btoi
!
store 218
load 227
substring 33 41
btoi
store 217
int 0
load 217
<
load 217
int 1
<
&&
load 219
load 219
!
load 218
||
select
store 216
load 226
substring 32 33
btoi
!
store 215
load 226
substring 33 41
btoi
store 214
int 0
load 214
<
load 214
int 1
<
&&
load 216
load 216
!
load 215
||
select
store 213
load 225
substring 32 33
btoi
!
store 212
load 225
substring 33 41
btoi
store 211
int 0
load 223
+
int 0
load 224
select
dup
store 210
load 220
+
load 210
load 221
select
dup
store 209
load 217
+
load 209
load 218
select
dup
store 208
load 214
+
load 208
load 215
select
store 207
gtxna 0 ApplicationArgs 7
btoi
int 0
>
load 230
!
&&
int 0
load 211
<
load 211
int 1
<
&&
load 213
load 213
!
load 212
||
select
&&
load 207
load 211
+
load 207
load 212
select
int 1
==
&&
!
bz l38
int 1
dup
store 241
bz l39
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
load 240
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
l39:
load 240
int 0
>
bz l40
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
load 240
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
l40:
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
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
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
l38:
// compute state in HM_Set 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 7
concat
load 240
itob
concat
load 229
concat
load 228
concat
load 227
concat
load 226
concat
load 225
concat
load 224
itob // bool
substring 7 8
concat
load 223
itob
concat
load 221
itob // bool
substring 7 8
concat
load 220
itob
concat
load 218
itob // bool
substring 7 8
concat
load 217
itob
concat
load 215
itob // bool
substring 7 8
concat
load 214
itob
concat
load 212
itob // bool
substring 7 8
concat
load 211
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
// Handler 7
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
int 23
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
// compute state in HM_Check 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
gtxna 0 ApplicationArgs 12
concat
gtxna 0 ApplicationArgs 13
concat
gtxna 0 ApplicationArgs 14
concat
gtxna 0 ApplicationArgs 15
concat
gtxna 0 ApplicationArgs 16
concat
gtxna 0 ApplicationArgs 17
concat
gtxna 0 ApplicationArgs 18
concat
gtxna 0 ApplicationArgs 19
concat
gtxna 0 ApplicationArgs 20
concat
gtxna 0 ApplicationArgs 21
concat
gtxna 0 ApplicationArgs 22
concat
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
// "./index.rsh:170:21:dot"
// "[at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 6
btoi
==
assert
// Just "sender correct"
// "./index.rsh:170:21:dot"
// "[at ./index.rsh:129:21:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)]"
int 1
assert
gtxna 0 ApplicationArgs 6
btoi
gtxna 0 ApplicationArgs 14
btoi
*
store 254
int 1
bz l0
b l1
l0:
l1:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 8
substring 0 32
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 6
btoi
gtxna 0 ApplicationArgs 16
btoi
*
store 253
int 1
bz l2
b l3
l2:
l3:
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
gtxna 0 ApplicationArgs 9
substring 0 32
==
assert
gtxn 5 Amount
load 253
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 6
btoi
gtxna 0 ApplicationArgs 18
btoi
*
store 252
int 1
bz l4
b l5
l4:
l5:
gtxn 6 TypeEnum
int pay
==
assert
gtxn 6 Receiver
gtxna 0 ApplicationArgs 10
substring 0 32
==
assert
gtxn 6 Amount
load 252
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 6
btoi
gtxna 0 ApplicationArgs 20
btoi
*
store 251
int 1
bz l6
b l7
l6:
l7:
gtxn 7 TypeEnum
int pay
==
assert
gtxn 7 Receiver
gtxna 0 ApplicationArgs 11
substring 0 32
==
assert
gtxn 7 Amount
load 251
==
assert
gtxn 7 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 6
btoi
gtxna 0 ApplicationArgs 22
btoi
*
store 250
int 1
bz l8
b l9
l8:
l9:
gtxn 8 TypeEnum
int pay
==
assert
gtxn 8 Receiver
gtxna 0 ApplicationArgs 12
substring 0 32
==
assert
gtxn 8 Amount
load 250
==
assert
gtxn 8 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 7
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
load 254
-
load 253
-
load 252
-
load 251
-
load 250
-
store 249
int 1
dup
store 255
bz l10
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 9
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 8 Fee
gtxn 7 Fee
+
gtxn 6 Fee
+
gtxn 5 Fee
+
gtxn 4 Fee
+
==
assert
// Check time limits
l10:
load 249
int 0
>
bz l11
gtxn 9 TypeEnum
int pay
==
assert
gtxn 9 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 9 Amount
load 249
==
assert
gtxn 9 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 10 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 10 Amount
int 0
==
assert
gtxn 10 Sender
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
int 11
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 10 Fee
gtxn 9 Fee
+
gtxn 8 Fee
+
gtxn 7 Fee
+
gtxn 6 Fee
+
gtxn 5 Fee
+
gtxn 4 Fee
+
==
assert
// Check time limits
l11:
gtxn 9 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 9 Amount
int 0
==
assert
gtxn 9 Sender
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
int 10
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 9 Fee
gtxn 8 Fee
+
gtxn 7 Fee
+
gtxn 6 Fee
+
gtxn 5 Fee
+
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
                "name": "v10",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
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
                "internalType": "address payable",
                "name": "v11",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1311",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1312",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Buyer",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v733",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
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
                "internalType": "address payable",
                "name": "v11",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1311",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1312",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
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
                "internalType": "address payable",
                "name": "v11",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v741",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v742",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v752",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "addr",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "percentToReceive",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Some",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15[5]",
                "name": "v753",
                "type": "tuple[5]"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
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
                "internalType": "address payable",
                "name": "v11",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v752",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v757",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v758",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "isReal",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "percentToReceive",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T16",
                "name": "v867",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "isReal",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "percentToReceive",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T16",
                "name": "v881",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "isReal",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "percentToReceive",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T16",
                "name": "v895",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "isReal",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "percentToReceive",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T16",
                "name": "v909",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "isReal",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "percentToReceive",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T16",
                "name": "v923",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v961",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v963",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v976",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v979",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v992",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v995",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v1008",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v1011",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v1024",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v1027",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
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
                "name": "v10",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v11",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1311",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1312",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Buyer",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v733",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v11",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1311",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1312",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v11",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v741",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v742",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v752",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "addr",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "percentToReceive",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Some",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15[5]",
                "name": "v753",
                "type": "tuple[5]"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v11",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v752",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v757",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v758",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "isReal",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "percentToReceive",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T16",
                "name": "v867",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "isReal",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "percentToReceive",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T16",
                "name": "v881",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "isReal",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "percentToReceive",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T16",
                "name": "v895",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "isReal",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "percentToReceive",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T16",
                "name": "v909",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "isReal",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "percentToReceive",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T16",
                "name": "v923",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v961",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v963",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v976",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v979",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v992",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v995",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v1008",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v1011",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v1024",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v1027",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556123ba806100826000396000f3fe60806040526004361061004e5760003560e01c8063193afc731461005a5780632a9f2f391461006f57806351903f281461008257806378c24f7114610095578063e1d09700146100a857610055565b3661005557005b600080fd5b61006d610068366004611e83565b6100bb565b005b61006d61007d366004611dd5565b610182565b61006d610090366004611dec565b61038b565b61006d6100a3366004611e5f565b6104a5565b61006d6100b6366004611e71565b61133f565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146100f857600080fd5b60008055341561010757600080fd5b7fc32df0ce290a4082d696e286eb47ee901bff58c6d9bf2b65b404efaab9a729c781604051610136919061216e565b60405180910390a1610146611812565b805133905260208101516001905261015f34600061230a565b6020808301805190910191909152514360409091015261017e816116f9565b5050565b60405161019690600290839060200161218f565b6040516020818303038152906040528051906020012060001c600054146101bc57600080fd5b60008080556040805160608101825282815260208101839052808201839052916101e89184013561230a565b43106101f357600080fd5b60006102056080840160608501611dbb565b801561022157634e487b7160e01b600052602160045260246000fd5b141561022c57600081525b8051341461023957600080fd5b61024734602084013561230a565b6020820152600061025e6080840160608501611dbb565b801561027a57634e487b7160e01b600052602160045260246000fd5b141561028857600160408201525b806040015161029657600080fd5b60006102a86080840160608501611dbb565b80156102c457634e487b7160e01b600052602160045260246000fd5b141561017e577f26d015a5a03bb6ee6becfdcd5bc517285058ca7e439484a90ef35ce67f8e3837826040516102f9919061203d565b60405180910390a161032e604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b61033b6020840184611d66565b6001600160a01b0316815260208083015181830152436040808401919091525161036a916004918491016121a3565b60408051601f1981840301815291905280516020909101206000555061017e565b60405161039f90600290839060200161218f565b6040516020818303038152906040528051906020012060001c600054146103c557600080fd5b600080805560408051602081018252828152916103e49184013561230a565b43101580156103f1575060015b6103fa57600080fd5b341561040557600080fd5b600181526040517fa79131b90eed3f8fd1fd7a240cd14dfbbe91b3944da950e64ef12204610c869990610439908490612085565b60405180910390a1610449611812565b6104566020840184611d66565b81516001600160a01b039091169052815160208083015191151590915261048190349085013561230a565b602080830180519091019190915251436040909101526104a0816116f9565b505050565b6040516104b990600490839060200161218f565b6040516020818303038152906040528051906020012060001c600054146104df57600080fd5b600080556104eb61184a565b34156104f657600080fd5b61050434602084013561230a565b6020820152600061051b60a0840160808501611da1565b600181111561053a57634e487b7160e01b600052602160045260246000fd5b141561054c57600060408201526105ae565b600161055e60a0840160808501611da1565b600181111561057d57634e487b7160e01b600052602160045260246000fd5b14156105ae5761059536839003830160c08401611dfd565b60608201819052516001600160a01b0316331460408201525b8060400151156105c9576040810151151560c0820152610680565b60006105dd61012084016101008501611da1565b60018111156105fc57634e487b7160e01b600052602160045260246000fd5b141561060e5760006080820152610673565b600161062261012084016101008501611da1565b600181111561064157634e487b7160e01b600052602160045260246000fd5b14156106735761065a3683900383016101408401611dfd565b60a08201819052516001600160a01b0316331460808201525b6080810151151560c08201525b8060c001511561069c5760c08101511515610120820152610755565b60006106b06101a084016101808501611da1565b60018111156106cf57634e487b7160e01b600052602160045260246000fd5b14156106e157600060e0820152610747565b60016106f56101a084016101808501611da1565b600181111561071457634e487b7160e01b600052602160045260246000fd5b14156107475761072d3683900383016101c08401611dfd565b6101008201819052516001600160a01b0316331460e08201525b60e081015115156101208201525b8061012001511561077357610120810151151561018082015261082f565b600061078761022084016102008501611da1565b60018111156107a657634e487b7160e01b600052602160045260246000fd5b14156107b9576000610140820152610820565b60016107cd61022084016102008501611da1565b60018111156107ec57634e487b7160e01b600052602160045260246000fd5b1415610820576108053683900383016102408401611dfd565b6101608201819052516001600160a01b031633146101408201525b61014081015115156101808201525b8061018001511561084d5761018081015115156101e0820152610909565b60006108616102a084016102808501611da1565b600181111561088057634e487b7160e01b600052602160045260246000fd5b14156108935760006101a08201526108fa565b60016108a76102a084016102808501611da1565b60018111156108c657634e487b7160e01b600052602160045260246000fd5b14156108fa576108df3683900383016102c08401611dfd565b6101c08201819052516001600160a01b031633146101a08201525b6101a081015115156101e08201525b600061091b60a0840160808501611da1565b600181111561093a57634e487b7160e01b600052602160045260246000fd5b14156109685761024081018051339052805160006020909101819052815160400152516102008201526109ee565b600161097a60a0840160808501611da1565b600181111561099957634e487b7160e01b600052602160045260246000fd5b14156109ee576109b136839003830160c08401611dfd565b61022082018181529051610260830180516001600160a01b0390921690915280516001602091820152915190910151815160400152516102008201525b6000610a0261012084016101008501611da1565b6001811115610a2157634e487b7160e01b600052602160045260246000fd5b1415610a4f576102c08101805133905280516000602090910181905281516040015251610280820152610ad8565b6001610a6361012084016101008501611da1565b6001811115610a8257634e487b7160e01b600052602160045260246000fd5b1415610ad857610a9b3683900383016101408401611dfd565b6102a0820181815290516102e0830180516001600160a01b0390921690915280516001602091820152915190910151815160400152516102808201525b6000610aec6101a084016101808501611da1565b6001811115610b0b57634e487b7160e01b600052602160045260246000fd5b1415610b39576103408101805133905280516000602090910181905281516040015251610300820152610bc2565b6001610b4d6101a084016101808501611da1565b6001811115610b6c57634e487b7160e01b600052602160045260246000fd5b1415610bc257610b853683900383016101c08401611dfd565b61032082018181529051610360830180516001600160a01b0390921690915280516001602091820152915190910151815160400152516103008201525b6000610bd661022084016102008501611da1565b6001811115610bf557634e487b7160e01b600052602160045260246000fd5b1415610c23576103c08101805133905280516000602090910181905281516040015251610380820152610cac565b6001610c3761022084016102008501611da1565b6001811115610c5657634e487b7160e01b600052602160045260246000fd5b1415610cac57610c6f3683900383016102408401611dfd565b6103a0820181815290516103e0830180516001600160a01b0390921690915280516001602091820152915190910151815160400152516103808201525b6000610cc06102a084016102808501611da1565b6001811115610cdf57634e487b7160e01b600052602160045260246000fd5b1415610d0d576104408101805133905280516000602090910181905281516040015251610400820152610d96565b6001610d216102a084016102808501611da1565b6001811115610d4057634e487b7160e01b600052602160045260246000fd5b1415610d9657610d593683900383016102c08401611dfd565b61042082018181529051610460830180516001600160a01b0390921690915280516001602091820152915190910151815160400152516104008201525b80610200015160200151610dab576001610dae565b60005b15156104808201819052610de75780610200015160400151600010610dd4576000610de2565b600181610200015160400151105b610dea565b60015b15156104a082015261028081015160200151610e07576001610e0a565b60005b15156104c08201526104a0810151610e23576001610e26565b60005b610e3557806104c00151610e38565b60015b610e675780610280015160400151600010610e54576000610e62565b600181610280015160400151105b610e6e565b806104a001515b15156104e082015261030081015160200151610e8b576001610e8e565b60005b15156105008201526104e0810151610ea7576001610eaa565b60005b610eb957806105000151610ebc565b60015b610eeb5780610300015160400151600010610ed8576000610ee6565b600181610300015160400151105b610ef2565b806104e001515b151561052082015261038081015160200151610f0f576001610f12565b60005b1515610540820152610520810151610f2b576001610f2e565b60005b610f3d57806105400151610f40565b60015b610f6f5780610380015160400151600010610f5c576000610f6a565b600181610380015160400151105b610f76565b8061052001515b151561056082015261040081015160200151610f93576001610f96565b60005b1515610580820152610480810151610fc25761020081015160400151610fbd90600061230a565b610fc5565b60005b6105a08201526104c0810151610ff45780610280015160400151816105a00151610fef919061230a565b610ffb565b806105a001515b6105c082015261050081015161102a5780610300015160400151816105c00151611025919061230a565b611031565b806105c001515b6105e08201526105408101516110605780610380015160400151816105e0015161105b919061230a565b611067565b806105e001515b610600820152606082013561107d576000611091565b806101e0015161108e576001611091565b60005b61109c5760006110f8565b8061056001516110ad5760016110b0565b60005b6110bf578061058001516110c2565b60015b6110f157806104000151604001516000106110de5760006110ec565b600181610400015160400151105b6110f8565b8061056001515b611103576000611137565b600181610580015161112e5781610400015160400151826106000151611129919061230a565b611135565b8161060001515b145b611142576001611145565b60005b156111da57600181526040517f7c8af7435e1df3b9d6738ac5c213eb97e90ad336778105fec47d3fafd74f1e779061117e9084906120ac565b60405180910390a161118e611812565b61119b6020840184611d66565b81516001600160a01b0390911690528151602080830180519215159092528084015182519091015251436040909101526111d4816116f9565b5061017e565b7f7c8af7435e1df3b9d6738ac5c213eb97e90ad336778105fec47d3fafd74f1e778260405161120991906120ac565b60405180910390a1611219611bf9565b6112266020840184611d66565b6001600160a01b03168152606080840135602080840191909152838101516040808501919091524392840192909252610200808501805160808601526102808601805160a08701526103008701805160c08801526103808801805160e0890152610400890180516101008a01526104808a015115156101208a015293518701516101408901526104c08901511515610160890152915186015161018088015261050088015115156101a0880152518501516101c087015261054087015115156101e08701525184015191850191909152610580850151151561022085015251820151610240840152905161131f916006918491016121e9565b60408051601f198184030181529190528051602090910120600055505050565b6040516113539060069083906020016121d4565b6040516020818303038152906040528051906020012060001c6000541461137957600080fd5b600080819055506113bb6040518060c0016040528060001515815260200160008152602001600081526020016000815260200160008152602001600081525090565b346020830135146113cb57600080fd5b6113de6102808301356020840135612322565b60208201526113f561028083016102608401611d87565b5061140660a0830160808401611d66565b6001600160a01b03166108fc82602001519081150290604051600060405180830381858888f19350505050158015611442573d6000803e3d6000fd5b506114566102c08301356020840135612322565b604082015261146d6102c083016102a08401611d87565b5061147f610100830160e08401611d66565b6001600160a01b03166108fc82604001519081150290604051600060405180830381858888f193505050501580156114bb573d6000803e3d6000fd5b506114cf6103008301356020840135612322565b60608201526114e661030083016102e08401611d87565b506114f961016083016101408401611d66565b6001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015611535573d6000803e3d6000fd5b506115496103408301356020840135612322565b608082015261156061034083016103208401611d87565b506115736101c083016101a08401611d66565b6001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156115af573d6000803e3d6000fd5b506115c36103808301356020840135612322565b60a08201526115da61038083016103608401611d87565b506115ed61022083016102008401611d66565b6001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f19350505050158015611629573d6000803e3d6000fd5b50600181526040517f0ccd79e1e877a201daeca0aad350734f815c18cf8a41942650453cfc830ac8549061165e908490612144565b60405180910390a161166e611812565b61167b6020840184611d66565b81516001600160a01b039091169052815160208083015191151590915260a0830151608084015160608501516040808701519487015193949293919291906116c79034908a013561230a565b6116d19190612341565b6116db9190612341565b6116e59190612341565b6116ef9190612341565b6104819190612341565b6040805160208101909152600081526020820151511561177757611740604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8251516001600160a01b03168152602080840180518201518284015251604090810151818401525161036a916002918491016121a3565b604080516080810182526000918101828152606082018381528183526020808401949094528551516001600160a01b0316909152848301519092015191829052906104a09082901561180b57805180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611803573d6000803e3d6000fd5b506000805533ff5b6000805533ff5b604080516060810182526000918101918252908190815260408051606081018252600080825260208281018290529282015291015290565b604080516106208101825260008082526020808301829052828401829052835180850185528281528082018390526060840152608083018290528351808501855282815280820183905260a084015260c0830182905260e0830182905283518085018552828152808201839052610100840152610120830182905261014083018290528351808501855282815280820183905261016084015261018083018290526101a083018290528351808501909452818452830152906101c0820190815260006020820152604001611937604080516060810182526000808252602082018190529181019190915290565b8152602001611956604080518082019091526000808252602082015290565b81526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016119d5604080518082019091526000808252602082015290565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001611a54604080518082019091526000808252602082015290565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001611ad3604080518082019091526000808252602082015290565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001611b52604080518082019091526000808252602082015290565b81526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a09091015290565b60405180610260016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001611c4d604080516060810182526000808252602082018190529181019190915290565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101409091015290565b80356001600160a01b0381168114611d3357600080fd5b919050565b80358015158114611d3357600080fd5b803560028110611d3357600080fd5b803560018110611d3357600080fd5b600060208284031215611d77578081fd5b611d8082611d1c565b9392505050565b600060208284031215611d98578081fd5b611d8082611d38565b600060208284031215611db2578081fd5b611d8082611d48565b600060208284031215611dcc578081fd5b611d8082611d57565b600060a08284031215611de6578081fd5b50919050565b600060808284031215611de6578081fd5b600060408284031215611e0e578081fd5b6040516040810181811067ffffffffffffffff82111715611e3d57634e487b7160e01b83526041600452602483fd5b604052611e4983611d1c565b8152602083013560208201528091505092915050565b60006103008284031215611de6578081fd5b60006103c08284031215611de6578081fd5b600060408284031215611de6578081fd5b6001600160a01b03611ea582611d1c565b16825260208181013590830152604090810135910152565b6001600160a01b03611ece82611d1c565b168252611edd60208201611d38565b15156020830152604090810135910152565b80516001600160a01b03168252602080820151151590830152604090810151910152565b611f2d82611f2083611d1c565b6001600160a01b03169052565b602081013560208301526040810135604083015260608101356060830152611f5b6080830160808301611ebd565b611f6b60e0830160e08301611ebd565b610140611f7c818401828401611ebd565b506101a0611f8e818401828401611ebd565b50610200611fa0818401828401611ebd565b50610260611faf818301611d38565b15159083015261028081810135908301526102a0611fce818301611d38565b1515908301526102c081810135908301526102e0611fed818301611d38565b151590830152610300818101359083015261032061200c818301611d38565b151590830152610340818101359083015261036061202b818301611d38565b15159083015261038090810135910152565b60a0810161204b8284611e94565b61205760608401611d57565b600181106120675761206761236e565b606083015261207860808401611d38565b1515608083015292915050565b608081016120938284611e94565b61209f60608401611d38565b1515606083015292915050565b61030081016120bb8284611e94565b60608084013581840152608080840181860160005b6005811015612139576120e282611d48565b600281106120f2576120f261236e565b83526020612101838201611d38565b15159084015260406001600160a01b0361211c848301611d1c565b1690840152818501358584015291830191908301906001016120d0565b505050505092915050565b6103c081016121538284611f13565b6103a0612161818501611d38565b1515818401525092915050565b813581526040810161218260208401611d38565b1515602083015292915050565b82815260808101611d806020830184611e94565b82815260808101611d80602083018480516001600160a01b0316825260208082015190830152604090810151910152565b8281526103c08101611d806020830184611f13565b82815281516001600160a01b031660208201526103c08101602083015160408301526040830151606083015260608301516080830152608083015161223160a0840182611eef565b5060a083015161010061224681850183611eef565b60c0850151915061016061225c81860184611eef565b60e086015192506101c061227281870185611eef565b9186015192506102209161228886840185611eef565b61012087015115156102808701526101408701516102a08701529086015115156102c08601526101808601516102e08601526101a086015115156103008601528501516103208501526101e08501511515610340850152610200850151610360850152840151151561038084015250610240909201516103a090910152919050565b6000821982111561231d5761231d612358565b500190565b600081600019048311821515161561233c5761233c612358565b500290565b60008282101561235357612353612358565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea26469706673582212208dbfc107a5ac621d26bda1df785c2bdf3c039b638dd41db60c14d12e7bb3fdbc64736f6c63430008020033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

