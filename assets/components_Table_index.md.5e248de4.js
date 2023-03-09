import{_ as I,c as W,a as y,w as p,e as T,b as n,d as s,r as F,o as z,V as m}from"./app.c8723cd7.js";const P={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:c,resolveComponent:r,withCtx:u,createVNode:k,openBlock:i,createElementBlock:g}=m;function o(d,e){const l=r("WvTable");return i(),g("div",null,[k(l,{columns:d.columns66,"data-source":d.dataSource1},{income:u(()=>[c(" 66666 ")]),outlays:u(()=>[c(" 77777 ")]),balance:u(()=>[c(" 88888 ")]),_:1},8,["columns","data-source"])])}const{ref:t}=m;return{render:o,...{setup(){return{columns66:t([{title:"\u8D26\u6237",width:"200px",key:"username"},{title:"\u5BC6\u7801",width:"180px",key:"password"},{title:"\u8D44\u91D1\u5F80\u6765",align:"center",children:[{title:"\u94F6\u884C\u6536\u5165(\uFFE5)",key:"income",align:"center",customSlot:"income"},{title:"\u94F6\u884C\u652F\u51FA(\uFFE5)",key:"outlays",align:"center",customSlot:"outlays"},{title:"\u94F6\u884C\u4F59\u989D(\uFFE5)",key:"balance",align:"center",customSlot:"balance"}]}]),dataSource1:[{username:"root",password:"root",age:"18",remark:"weView"},{username:"root",password:"root",age:"18",remark:"weView"},{username:"woow",password:"woow",age:"20",remark:"weView -  \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002"}]}}}}}(),"render-demo-1":function(){const{createTextVNode:c,resolveComponent:r,withCtx:u,createVNode:k,createElementVNode:i,openBlock:g,createElementBlock:o}=m;function t(e,l){const w=r("WvRadio"),E=r("WvTable");return g(),o("div",null,[i("form",null,[k(w,{modelValue:e.size2,"onUpdate:modelValue":l[0]||(l[0]=v=>e.size2=v),name:"action",value:"sm"},{default:u(()=>[c("sm")]),_:1},8,["modelValue"]),k(w,{modelValue:e.size2,"onUpdate:modelValue":l[1]||(l[1]=v=>e.size2=v),name:"action",value:"md"},{default:u(()=>[c("md")]),_:1},8,["modelValue"]),k(w,{modelValue:e.size2,"onUpdate:modelValue":l[2]||(l[2]=v=>e.size2=v),name:"action",value:"lg"},{default:u(()=>[c("lg")]),_:1},8,["modelValue"])]),k(E,{columns:e.columns2,"data-source":e.dataSource2,size:e.size2},null,8,["columns","data-source","size"])])}const{ref:a}=m;return{render:t,...{setup(){const e=[{title:"\u8D26\u6237",width:"200px",key:"username"},{title:"\u5BC6\u7801",width:"180px",key:"password"},{title:"\u5E74\u9F84",width:"180px",key:"age"}],l=[{username:"root",password:"root",age:"18"},{username:"woow",password:"woow",age:"20"}];return{size2:a("md"),columns2:e,dataSource2:l}}}}}(),"render-demo-2":function(){const{resolveComponent:c,createVNode:r,openBlock:u,createElementBlock:k}=m;function i(t,a){const d=c("WvTable");return u(),k("div",null,[r(d,{columns:t.columns3,"data-source":t.dataSource3,page:t.page3,onChange:t.change3},null,8,["columns","data-source","page","onChange"])])}const{ref:g}=m;return{render:i,...{setup(){return{page3:g({total:100,limit:10,current:2,showRefresh:!0}),change3:({current:l,limit:w})=>{alert("current:"+l+" limit:"+w)},columns3:[{type:"number"},{title:"\u8D26\u6237",width:"200px",slot:"username",key:"username"},{title:"\u5BC6\u7801",width:"180px",slot:"password",key:"password"},{title:"\u5E74\u9F84",width:"180px",key:"age"}],dataSource3:[{username:"root",password:"root",age:"18"},{username:"woow",password:"woow",age:"20"}]}}}}}(),"render-demo-3":function(){const{resolveComponent:c,createVNode:r,openBlock:u,createElementBlock:k}=m;function i(o,t){const a=c("wv-table");return u(),k("div",null,[r(a,{columns:o.columns4,"data-source":o.dataSource4},null,8,["columns","data-source"])])}return{render:i,...{setup(){return{columns4:[{title:"\u59D3\u540D",width:"200px",key:"name"},{title:"\u6210\u7EE9",width:"180px",key:"score",sort:!0}],dataSource4:[{name:"\u5F20\u4E09",score:100},{name:"\u674E\u56DB",score:80},{name:"\u738B\u4E94",score:99},{name:"\u6709\u540D",score:92},{name:"\u65E0\u540D",score:60}]}}}}}(),"render-demo-4":function(){const{resolveComponent:c,createVNode:r,withCtx:u,openBlock:k,createElementBlock:i}=m;function g(a,d){const e=c("wv-table");return k(),i("div",null,[r(e,{columns:a.columns6,"data-source":a.dataSource6,"default-expand-all":a.defaultExpandAll6,expandKeys:a.expandKeys6,"onUpdate:expandKeys":d[0]||(d[0]=l=>a.expandKeys6=l)},{expand:u(({data:l})=>[r(e,{columns:a.columns6,"data-source":a.dataSource6},null,8,["columns","data-source"])]),_:1},8,["columns","data-source","default-expand-all","expandKeys"])])}const{ref:o}=m;return{render:g,...{setup(){const a=[{title:"\u59D3\u540D",width:"200px",key:"name"},{title:"\u6210\u7EE9",width:"180px",key:"score"}],d=[{id:"1",name:"\u5F20\u4E09",score:100},{id:"2",name:"\u674E\u56DB",score:80},{id:"3",name:"\u738B\u4E94",score:99},{id:"4",name:"\u6709\u540D",score:92},{id:"5",name:"\u65E0\u540D",score:60}],e=o(["1"]),l=o(!1);return{columns6:a,dataSource6:d,expandKeys6:e,defaultExpandAll6:l}}}}}(),"render-demo-5":function(){const{toDisplayString:c,createTextVNode:r,resolveComponent:u,withCtx:k,createVNode:i,openBlock:g,createElementBlock:o}=m;function t(e,l){const w=u("wv-table");return g(),o("div",null,[i(w,{columns:e.columns7,"data-source":e.dataSource7,"default-expand-all":e.defaultExpandAll7,expandKeys:e.expandKeys7,"onUpdate:expandKeys":l[0]||(l[0]=E=>e.expandKeys7=E)},{score:k(({data:E})=>[r(c(E),1)]),_:1},8,["columns","data-source","default-expand-all","expandKeys"])])}const{ref:a}=m;return{render:t,...{setup(){const e=[{title:"\u59D3\u540D",width:"200px",key:"name",ellipsisTooltip:!0},{title:"\u6210\u7EE9",width:"180px",key:"score"}],l=[{id:"1",name:"\u7CFB\u7EDF\u7BA1\u7406",score:100,children:[{id:"3",name:"\u7528\u6237\u7BA1\u7406",score:99},{id:"5",name:"\u89D2\u8272\u7BA1\u7406",score:96,children:[{id:"7",name:"\u7528\u6237\u7BA1\u7406",score:99},{id:"8",name:"\u89D2\u8272\u7BA1\u7406",score:96}]}]},{id:"2",name:"\u7535\u5546\u7BA1\u7406",score:100,children:[{id:"4",name:"\u5546\u54C1\u7BA1\u7406",score:11},{id:"6",name:"\u5206\u7C7B\u7BA1\u7406",score:22}]}],w=a(["1"]),E=a(!1);return{columns7:e,dataSource7:l,expandKeys7:w,defaultExpandAll7:E}}}}}(),"render-demo-6":function(){const{createElementVNode:c,resolveComponent:r,withCtx:u,createVNode:k,openBlock:i,createElementBlock:g}=m,o=["onClick"];function t(e,l){const w=r("wv-table");return i(),g("div",null,[k(w,{columns:e.columns8,"data-source":e.dataSource8,"max-height":e.maxHeight},{operator:u(({data:E})=>[c("button",{class:"btn2",onClick:v=>e.deleteColumn(E)},"\u5220\u9664",8,o)]),_:1},8,["columns","data-source","max-height"])])}const{ref:a}=m;return{render:t,...{setup(){const e=a("300px"),l=({username:v})=>{const x=E.value.findIndex(h=>h.username===v);E.value.splice(x,1)},w=[{title:"\u8D26\u6237",minWidth:"200px",key:"username"},{title:"\u5BC6\u7801",minWidth:"180px",key:"password"},{title:"\u5E74\u9F84",minWidth:"180px",key:"age"},{title:"\u64CD\u4F5C",width:"200px",customSlot:"operator",key:"operator",align:"center"}],E=a([{username:"1",password:"root",age:"18",remark:"weView"},{username:"2",password:"root",age:"18",remark:"weView"},{username:"3",password:"root",age:"18",remark:"weView"},{username:"4",password:"root",age:"18",remark:"weView"},{username:"5",password:"root",age:"18",remark:"weView"},{username:"6",password:"root",age:"18",remark:"weView"},{username:"7",password:"root",age:"18",remark:"weView"},{username:"8",password:"woow",age:"20",remark:"weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002"},{username:"9",password:"woow",age:"20",remark:"weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002"},{username:"10",password:"woow",age:"20",remark:"weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002"},{username:"11",password:"woow",age:"20",remark:"weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002"}]);return{maxHeight:e,deleteColumn:l,columns8:w,dataSource8:E}}}}}(),"render-demo-7":function(){const{resolveComponent:c,createVNode:r,openBlock:u,createElementBlock:k}=m;function i(o,t){const a=c("wv-table");return u(),k("div",null,[r(a,{columns:o.columns1,"data-source":o.dataSource1,even:""},null,8,["columns","data-source"])])}return{render:i,...{setup(){return{columns1:[{title:"\u8D26\u6237",width:"200px",key:"username"},{title:"\u5BC6\u7801",width:"180px",key:"password"},{title:"\u5E74\u9F84",width:"180px",key:"age"},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],dataSource1:[{username:"root",password:"root",age:"18",remark:"weView"},{username:"root",password:"root",age:"18",remark:"weView"},{username:"woow",password:"woow",age:"20",remark:"weView"},{username:"woow",password:"woow",age:"20",remark:"weView"},{username:"woow",password:"woow",age:"20",remark:"weView"}]}}}}}(),"render-demo-8":function(){const{resolveComponent:c,createVNode:r,openBlock:u,createElementBlock:k}=m;function i(o,t){const a=c("wv-table");return u(),k("div",null,[r(a,{columns:o.columns1,"data-source":o.dataSource1,"cell-style":o.cellStyle,"row-style":o.rowStyle},null,8,["columns","data-source","cell-style","row-style"])])}return{render:i,...{setup(){return{columns1:[{title:"\u8D26\u6237",width:"200px",key:"username"},{title:"\u5BC6\u7801",width:"180px",key:"password"},{title:"\u5E74\u9F84",width:"180px",key:"age"},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],dataSource1:[{username:"root",password:"root",age:"18",remark:"weView"},{username:"root",password:"root",age:"18",remark:"weView"},{username:"woow",password:"woow",age:"20",remark:"weView"},{username:"woow",password:"woow",age:"20",remark:"weView"},{username:"woow",password:"woow",age:"20",remark:"weView"}],cellStyle:function(e,l,w,E){if(E%2==0)return"color:red"},rowStyle:function(e,l){if(l%2==0)return"color:blue"}}}}}}(),"render-demo-9":function(){const{createTextVNode:c,resolveComponent:r,withCtx:u,createVNode:k,createElementVNode:i,openBlock:g,createElementBlock:o}=m;function t(e,l){const w=r("wv-radio"),E=r("wv-table");return g(),o("div",null,[i("form",null,[k(w,{modelValue:e.skin1,"onUpdate:modelValue":l[0]||(l[0]=v=>e.skin1=v),name:"action",value:"line"},{default:u(()=>[c("line")]),_:1},8,["modelValue"]),k(w,{modelValue:e.skin1,"onUpdate:modelValue":l[1]||(l[1]=v=>e.skin1=v),name:"action",value:"nob"},{default:u(()=>[c("nob")]),_:1},8,["modelValue"]),k(w,{modelValue:e.skin1,"onUpdate:modelValue":l[2]||(l[2]=v=>e.skin1=v),name:"action",value:"row"},{default:u(()=>[c("row")]),_:1},8,["modelValue"])]),k(E,{columns:e.columns1,"data-source":e.dataSource1,skin:e.skin1},null,8,["columns","data-source","skin"])])}const{ref:a}=m;return{render:t,...{setup(){return{skin1:a("line"),columns1:[{title:"\u8D26\u6237",width:"200px",key:"username"},{title:"\u5BC6\u7801",width:"180px",key:"password"},{title:"\u5E74\u9F84",width:"180px",key:"age"},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],dataSource1:[{username:"root",password:"root",age:"18",remark:"weView"},{username:"root",password:"root",age:"18",remark:"weView"},{username:"woow",password:"woow",age:"20",remark:"weView"},{username:"woow",password:"woow",age:"20",remark:"weView"},{username:"woow",password:"woow",age:"20",remark:"weView"}]}}}}}(),"render-demo-10":function(){const{resolveComponent:c,createVNode:r,openBlock:u,createElementBlock:k}=m;function i(o,t){const a=c("wv-table");return u(),k("div",null,[r(a,{columns:o.columns20,"data-source":o.dataSource20},null,8,["columns","data-source"])])}return{render:i,...{setup(){return{columns20:[{title:"\u8D26\u6237",width:"200px",key:"username"},{title:"\u5BC6\u7801",width:"300px",key:"password"},{fixed:"right",title:"\u6027\u522B",width:"180px",key:"sex"},{fixed:"right",title:"\u5E74\u9F84",width:"180px",key:"age"},{fixed:"right",title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],dataSource20:[{username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"}]}}}}}(),"render-demo-11":function(){const{resolveComponent:c,createVNode:r,openBlock:u,createElementBlock:k}=m;function i(o,t){const a=c("wv-table");return u(),k("div",null,[r(a,{columns:o.columns21,"data-source":o.dataSource21},null,8,["columns","data-source"])])}return{render:i,...{setup(){return{columns21:[{type:"number"},{title:"\u8D26\u6237",width:"200px",key:"username"},{title:"\u5BC6\u7801",width:"300px",key:"password"},{title:"\u6027\u522B",key:"sex"},{title:"\u5E74\u9F84",width:"300px",key:"age"},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],dataSource21:[{username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"}]}}}}}(),"render-demo-12":function(){const{createElementVNode:c,resolveComponent:r,createVNode:u,openBlock:k,createElementBlock:i}=m;function g(a,d){const e=r("wv-table");return k(),i("div",null,[c("button",{class:"update-btn",onClick:d[0]||(d[0]=(...l)=>a.changeSelectedKeys&&a.changeSelectedKeys(...l))},"\u4FEE\u6539\u9009\u4E2D"),c("button",{class:"update-btn",onClick:d[1]||(d[1]=(...l)=>a.changeDataSource23&&a.changeDataSource23(...l))},"\u4FEE\u6539\u6570\u636E"),u(e,{columns:a.columns23,"data-source":a.dataSource23,selectedKeys:a.selectedKeys5,"onUpdate:selectedKeys":d[2]||(d[2]=l=>a.selectedKeys5=l)},null,8,["columns","data-source","selectedKeys"])])}const{ref:o}=m;return{render:g,...{setup(){const a=o(["1"]),d=(v,x)=>x==2?{disabled:!0}:{},e=()=>{a.value=["2"]},l=()=>{E.value=[{id:"1",username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{id:"2",username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"}]},w=[{fixed:"left",type:"checkbox"},{title:"\u8D26\u6237",width:"200px",key:"username",fixed:"left"},{title:"\u5BC6\u7801",width:"300px",key:"password"},{title:"\u6027\u522B",key:"sex"},{title:"\u5E74\u9F84",width:"300px",key:"age"},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],E=o([{id:"1",username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{id:"2",username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{id:"3",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{id:"4",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{id:"5",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"}]);return{columns23:w,dataSource23:E,selectedKeys5:a,changeSelectedKeys:e,getCheckboxProps:d,changeDataSource23:l}}}}}(),"render-demo-13":function(){const{resolveComponent:c,createVNode:r,openBlock:u,createElementBlock:k}=m;function i(t,a){const d=c("wv-table");return u(),k("div",null,[r(d,{columns:t.columns24,"data-source":t.dataSource24,"selected-key":t.selectedKey24,"onUpdate:selectedKey":a[0]||(a[0]=e=>t.selectedKey24=e)},null,8,["columns","data-source","selected-key"])])}const{ref:g}=m;return{render:i,...{setup(){const t=[{type:"radio"},{title:"\u8D26\u6237",width:"200px",key:"username"},{title:"\u5BC6\u7801",width:"300px",key:"password"},{title:"\u6027\u522B",key:"sex"},{title:"\u5E74\u9F84",width:"300px",key:"age"},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],a=g("2");return{columns24:t,dataSource24:[{id:"1",username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{id:"2",username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{id:"3",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{id:"4",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{id:"5",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"}],selectedKey24:a}}}}}(),"render-demo-14":function(){const{resolveComponent:c,createVNode:r,openBlock:u,createElementBlock:k}=m;function i(o,t){const a=c("wv-table");return u(),k("div",null,[r(a,{columns:o.columns25,"data-source":o.dataSource25},null,8,["columns","data-source"])])}return{render:i,...{setup(){return{columns25:[{title:"\u8D26\u6237",width:"500px",key:"username"},{title:"\u5BC6\u7801",width:"500px",key:"password"},{title:"\u6027\u522B",key:"sex"},{title:"\u5E74\u9F84",width:"600px",key:"age"},{title:"\u5907\u6CE8",width:"380px",key:"remark",ellipsisTooltip:!0}],dataSource25:[]}}}}}(),"render-demo-15":function(){const{createElementVNode:c,resolveComponent:r,createVNode:u,openBlock:k,createElementBlock:i}=m;function g(a,d){const e=r("wv-table");return k(),i("div",null,[c("button",{class:"update-btn",onClick:d[0]||(d[0]=(...l)=>a.changeDataSource22&&a.changeDataSource22(...l))},"\u66F4\u65B0\u6570\u636E"),u(e,{columns:a.columns22,"data-source":a.dataSource22},null,8,["columns","data-source"])])}const{ref:o}=m;return{render:g,...{setup(){const a=[{title:"\u8D26\u6237",width:"200px",key:"username"},{title:"\u5BC6\u7801",width:"300px",key:"password"},{title:"\u6027\u522B",width:"300px",key:"sex"},{title:"\u5E74\u9F84",width:"300px",key:"age"},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],d=o([{username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"}]);return{columns22:a,dataSource22:d,changeDataSource22:()=>{d.value=[{username:"update",password:"update",sex:"boy",age:"18",remark:"\u66F4\u65B0\u6570\u636E "}]}}}}}}(),"render-demo-16":function(){const{resolveComponent:c,createVNode:r,openBlock:u,createElementBlock:k}=m;function i(o,t){const a=c("wv-table");return u(),k("div",null,[r(a,{columns:o.columns26,"data-source":o.dataSource26},null,8,["columns","data-source"])])}return{render:i,...{setup(){return{columns26:[{title:"\u8D26\u6237",width:"200px",key:"username"},{title:"\u5BC6\u7801",width:"300px",key:"password"},{title:"\u6027\u522B",key:"sex",totalRow:"\u5408\u5E76:"},{title:"\u5E74\u9F84",width:"300px",key:"age"},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],dataSource26:[{username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"}]}}}}}(),"render-demo-17":function(){const{resolveComponent:c,createVNode:r,openBlock:u,createElementBlock:k}=m;function i(o,t){const a=c("wv-table");return u(),k("div",null,[r(a,{columns:o.columns27,"data-source":o.dataSource27,"span-method":o.spanMethod27,"default-toolbar":!0},null,8,["columns","data-source","span-method"])])}return{render:i,...{setup(){return{columns27:[{title:"\u8D26\u6237",width:"200px",key:"username"},{title:"\u5BC6\u7801",width:"300px",key:"password"},{title:"\u6027\u522B",key:"sex"},{title:"\u5E74\u9F84",width:"300px",key:"age"},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],dataSource27:[{id:"1",username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{id:"2",username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{id:"3",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{id:"4",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{id:"5",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"}],spanMethod27:(d,e,l,w)=>{if(l%2===0){if(w===0)return[1,2];if(w===1)return[0,0]}}}}}}}(),"render-demo-18":function(){const{openBlock:c,createElementBlock:r,createCommentVNode:u,toDisplayString:k,createTextVNode:i,resolveComponent:g,withCtx:o,createVNode:t}=m,a=["value","onInput"],d=["onClick"],e={key:2},l=["onClick"];function w(x,h){const f=g("wv-table");return c(),r("div",null,[t(f,{columns:x.columns28,"data-source":x.dataSource28},{username:o(({data:b})=>[x.edingKeys.includes(b)?(c(),r("input",{key:0,value:b.username,onInput:C=>x.changeUsername(C,b)},null,40,a)):u("",!0),x.edingKeys.includes(b)?(c(),r("i",{key:1,class:"wv-icon wv-icon-close",style:{position:"absolute",right:"10px",cursor:"pointer"},onClick:C=>x.deleteEdit(b)},null,8,d)):(c(),r("span",e,[i(k(b.username)+" ",1),x.edingKeys.includes(b)?u("",!0):(c(),r("i",{key:0,class:"wv-icon wv-icon-edit",style:{position:"absolute",right:"10px",cursor:"pointer"},onClick:C=>x.editHandle(b)},null,8,l))]))]),_:1},8,["columns","data-source"])])}const{ref:E}=m;return{render:w,...{setup(){const x=E([]),h=[{title:"\u8D26\u6237",width:"200px",key:"username",customSlot:"username"},{title:"\u5BC6\u7801",width:"300px",key:"password"},{title:"\u6027\u522B",key:"sex"},{title:"\u5E74\u9F84",width:"300px",key:"age"},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],f=E([{id:"1",username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{id:"2",username:"root",password:"root",sex:"\u7537",age:"18",remark:"weView"},{id:"3",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{id:"4",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{id:"5",username:"woow",password:"woow",sex:"\u7537",age:"20",remark:"weView"}]);return{edingKeys:x,deleteEdit:_=>{x.value.splice(x.value.indexOf(_),1)},columns28:h,editHandle:_=>{x.value.push(_)},dataSource28:f,changeUsername:(_,V)=>{f.value.forEach(A=>{A.id==V.id&&(A.username=_.target.value)})}}}}}}(),"render-demo-19":function(){const{resolveComponent:c,createVNode:r,openBlock:u,createElementBlock:k}=m;function i(o,t){const a=c("wv-table");return u(),k("div",null,[r(a,{columns:o.columns29,"data-source":o.dataSource29,"default-toolbar":!0},null,8,["columns","data-source"])])}return{render:i,...{setup(){return{columns29:[{title:"\u540D\u79F0",width:"200px",key:"username"},{title:"\u5730\u5740",key:"address",children:[{title:"\u7701",key:"province",width:"300px"},{title:"\u5E02",key:"city",width:"300px"},{title:"\u533A",key:"area",width:"300px"}]},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0,children:[{title:"\u6027\u522B",key:"sex"},{title:"\u5E74\u9F84",width:"300px",totalRow:"\u7EDF\u8BA1",key:"age"}]}],dataSource29:[{id:"1",username:"\u5C31\u7720\u5100\u5F0F",province:"\u5C71\u4E1C",city:"\u6D4E\u5357",area:"\u9AD8\u65B0\u533A",password:"root",sex:"\u7537",age:"18",remark:"weView"},{id:"2",username:"\u5C31\u7720\u5100\u5F0F",province:"\u5C71\u4E1C",city:"\u6D4E\u5357",area:"\u9AD8\u65B0\u533A",password:"root",sex:"\u7537",age:"18",remark:"weView"},{id:"3",username:"\u5C31\u7720\u5100\u5F0F",province:"\u5C71\u4E1C",city:"\u6D4E\u5357",area:"\u9AD8\u65B0\u533A",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{id:"4",username:"\u5C31\u7720\u5100\u5F0F",province:"\u5C71\u4E1C",city:"\u6D4E\u5357",area:"\u9AD8\u65B0\u533A",password:"woow",sex:"\u7537",age:"20",remark:"weView"},{id:"5",username:"\u5C31\u7720\u5100\u5F0F",province:"\u5C71\u4E1C",city:"\u6D4E\u5357",area:"\u9AD8\u65B0\u533A",password:"woow",sex:"\u7537",age:"20",remark:"weView"}]}}}}}(),"render-demo-20":function(){const{createElementVNode:c,resolveComponent:r,createVNode:u,openBlock:k,createElementBlock:i}=m;function g(a,d){const e=r("wv-table");return k(),i("div",null,[c("button",{class:"load-btn",onClick:d[0]||(d[0]=(...l)=>a.loadData&&a.loadData(...l))},"\u52A0\u8F7D\u6570\u636E"),u(e,{columns:a.columns30,"data-source":a.dataSource30,loading:a.loading},null,8,["columns","data-source","loading"])])}const{ref:o}=m;return{render:g,...{setup(){const a=o(!1),d=[{title:"\u540D\u79F0",width:"200px",key:"username"},{title:"\u5730\u5740",key:"address",children:[{title:"\u7701",key:"province",width:"300px"},{title:"\u5E02",key:"city",width:"300px"},{title:"\u533A",children:[{title:"\u53BF",key:"xian",width:"100px"},{title:"\u6751",key:"cun",width:"100px"}]}]},{title:"\u6027\u522B",key:"sex"},{title:"\u5E74\u9F84",width:"300px",key:"age"},{title:"\u5907\u6CE8",width:"180px",key:"remark",ellipsisTooltip:!0}],e=o([]);return{loading:a,loadData:()=>{a.value=!0,setTimeout(()=>{e.value=[{id:"1",username:"\u5C31\u7720\u5100\u5F0F",province:"\u5C71\u4E1C",city:"\u6D4E\u5357",area:"\u9AD8\u65B0\u533A",password:"root",sex:"\u7537",age:"18",remark:"weView",xian:"1",cun:"2"},{id:"2",username:"\u5C31\u7720\u5100\u5F0F",province:"\u5C71\u4E1C",city:"\u6D4E\u5357",area:"\u9AD8\u65B0\u533A",password:"root",sex:"\u7537",age:"18",remark:"weView",xian:"1",cun:"2"},{id:"3",username:"\u5C31\u7720\u5100\u5F0F",province:"\u5C71\u4E1C",city:"\u6D4E\u5357",area:"\u9AD8\u65B0\u533A",password:"woow",sex:"\u7537",age:"20",remark:"weView",xian:"1",cun:"2"},{id:"4",username:"\u5C31\u7720\u5100\u5F0F",province:"\u5C71\u4E1C",city:"\u6D4E\u5357",area:"\u9AD8\u65B0\u533A",password:"woow",sex:"\u7537",age:"20",remark:"weView",xian:"1",cun:"2"},{id:"5",username:"\u5C31\u7720\u5100\u5F0F",province:"\u5C71\u4E1C",city:"\u6D4E\u5357",area:"\u9AD8\u65B0\u533A",password:"woow",sex:"\u7537",age:"20",remark:"weView",xian:"1",cun:"2"}],a.value=!1},2e3)},columns30:d,dataSource30:e}}}}}(),"render-demo-21":function(){const{createElementVNode:c,toDisplayString:r,createTextVNode:u,resolveComponent:k,withCtx:i,createVNode:g,openBlock:o,createElementBlock:t}=m,a=c("button",{class:"btn",style:{background:"#1AAD19"}},"\u65B0\u589E",-1),d=c("button",{class:"btn"},"\u5220\u9664",-1),e=c("button",{class:"btn2",style:{background:"#1e9fff"}},"\u4FEE\u6539",-1),l=c("button",{class:"btn2"},"\u5220\u9664",-1);function w(h,f){const b=k("wv-table");return o(),t("div",null,[g(b,{id:"id","max-height":h.maxHeight5,columns:h.columns5,"expand-index":1,"data-source":h.dataSource5,checkbox:h.checkbox5,page:h.page5,"default-toolbar":h.defaultToolbar5,"selected-keys":h.selectedKeys5,"onUpdate:selectedKeys":f[0]||(f[0]=C=>h.selectedKeys5=C),onRow:h.rowClick5,onChange:h.change555},{toolbar:i(()=>[a,d]),name:i(({row:C,column:D,rowIndex:_,columnIndex:V})=>[u(r(C.name),1)]),"name-title":i(()=>[u("\u{1F60A}")]),operator:i(({row:C})=>[e,l]),_:1},8,["max-height","columns","data-source","checkbox","page","default-toolbar","selected-keys","onRow","onChange"])])}const{ref:E,watch:v}=m;return{render:w,...{setup(){const h=E(["1"]),f=E(!0),b=E(["export","print","filter"]),C=E("600px"),D={total:100,limit:10,current:1},_=E([]),V=function(B){console.log(JSON.stringify(B))};setTimeout(()=>{_.value=[{title:"\u5E8F\u53F7",key:"index",fixed:"left",type:"checkbox",width:"50px"},{title:"\u59D3\u540D",fixed:"left",width:"200px",titleSlot:"name-title",customSlot:"name",key:"name",align:"left"},{title:"\u5E74\u9F84",width:"300px",key:"age",ellipsisTooltip:!0},{title:"\u5907\u6CE8",width:"300px",key:"remark",ellipsisTooltip:!0},{title:"\u64CD\u4F5C",width:"150px",fixed:"right",customSlot:"operator",key:"operator"}]},2e3);const A=[{id:"1",name:"\u5C0F\u660E",age:"18",remark:"weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002"},{id:"2",name:"\u5C0F\u7EA2",age:"20",remark:"weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002"},{id:"3",name:"\u5C0F\u521A",age:"20",remark:"weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002"},{id:"4",name:"\u5C0F\u674E",age:"20",remark:"weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002"},{id:"5",name:"\u5C0F\u67CF",age:"20",remark:"weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002"},{id:"6",name:"\u5C0F\u5409",age:"20",remark:"weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002"}],S=function(B){console.log(JSON.stringify(B))},q=function(B){console.log(JSON.stringify(B))};return v(h,()=>{console.log("\u590D\u9009\u6846\u76D1\u542C:"+h.value)}),{maxHeight5:C,columns5:_,dataSource5:A,selectedKeys5:h,checkbox5:f,defaultToolbar5:b,rowClick5:S,rowDoubleClick5:q,page5:D,change555:V}}}}}()}},hs='{"title":"Table \u8868\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":3,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":3,"title":"\u8868\u683C\u5C5E\u6027","slug":"\u8868\u683C\u5C5E\u6027"},{"level":3,"title":"\u5217\u5C5E\u6027","slug":"\u5217\u5C5E\u6027"},{"level":3,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":3,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u57FA\u7840\u4F7F\u7528","slug":"\u57FA\u7840\u4F7F\u7528"},{"level":3,"title":"\u4E0D\u540C\u5C3A\u5BF8","slug":"\u4E0D\u540C\u5C3A\u5BF8"},{"level":3,"title":"\u5F00\u542F\u5206\u9875","slug":"\u5F00\u542F\u5206\u9875"},{"level":3,"title":"\u5F00\u542F\u6392\u5E8F","slug":"\u5F00\u542F\u6392\u5E8F"},{"level":3,"title":"\u5F00\u542F\u5B50\u8868","slug":"\u5F00\u542F\u5B50\u8868"},{"level":3,"title":"\u6811\u5F62\u8868\u683C","slug":"\u6811\u5F62\u8868\u683C"},{"level":3,"title":"\u56FA\u5B9A\u8868\u5934","slug":"\u56FA\u5B9A\u8868\u5934"},{"level":3,"title":"\u6591\u9A6C\u6761\u7EB9","slug":"\u6591\u9A6C\u6761\u7EB9"},{"level":3,"title":"\u5B9A\u4E49\u6837\u5F0F","slug":"\u5B9A\u4E49\u6837\u5F0F"},{"level":3,"title":"\u4E0D\u540C\u98CE\u683C","slug":"\u4E0D\u540C\u98CE\u683C"},{"level":3,"title":"\u56FA\u5B9A\u884C\u5217","slug":"\u56FA\u5B9A\u884C\u5217"},{"level":3,"title":"\u5F00\u542F\u5E8F\u53F7","slug":"\u5F00\u542F\u5E8F\u53F7"},{"level":3,"title":"\u5F00\u542F\u591A\u9009","slug":"\u5F00\u542F\u591A\u9009"},{"level":3,"title":"\u5F00\u542F\u5355\u9009","slug":"\u5F00\u542F\u5355\u9009"},{"level":3,"title":"\u65E0\u6570\u636E","slug":"\u65E0\u6570\u636E"},{"level":3,"title":"\u5237\u65B0\u6570\u636E","slug":"\u5237\u65B0\u6570\u636E"},{"level":3,"title":"\u5F00\u542F\u7EDF\u8BA1","slug":"\u5F00\u542F\u7EDF\u8BA1"},{"level":3,"title":"\u5408\u5E76\u884C\u5217","slug":"\u5408\u5E76\u884C\u5217"},{"level":3,"title":"\u884C\u5185\u7F16\u8F91","slug":"\u884C\u5185\u7F16\u8F91"},{"level":3,"title":"\u590D\u6742\u8868\u5934","slug":"\u590D\u6742\u8868\u5934"},{"level":3,"title":"\u52A0\u8F7D\u8FC7\u6E21","slug":"\u52A0\u8F7D\u8FC7\u6E21"},{"level":3,"title":"\u5B8C\u6574\u8868\u683C","slug":"\u5B8C\u6574\u8868\u683C"}],"relativePath":"components/Table/index.md"}',R=T('<h1 id="table-\u8868\u683C" tabindex="-1">Table \u8868\u683C <a class="header-anchor" href="#table-\u8868\u683C" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><hr><h3 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h3><p>\u5C55\u793A\u884C\u5217\u6570\u636E\u3002</p><h3 id="\u8868\u683C\u5C5E\u6027" tabindex="-1">\u8868\u683C\u5C5E\u6027 <a class="header-anchor" href="#\u8868\u683C\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>columns</td><td>\u5217\u914D\u7F6E - <a href="#%E5%88%97%E5%B1%9E%E6%80%A7">\u66F4\u591A</a></td><td>--</td><td>--</td><td>--</td></tr><tr><td>dataSource</td><td>\u6570\u636E\u6E90</td><td>--</td><td>--</td><td>--</td></tr><tr><td>checkbox</td><td>\u5F00\u542F\u590D\u9009\u6846</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code> <code>false</code></td></tr><tr><td>id</td><td>\u4E3B\u952E</td><td><code>string</code></td><td>--</td><td>--</td></tr><tr><td>v-model:selectedKeys</td><td>\u9009\u4E2D\u9879 (\u591A\u9009)</td><td>--</td><td>--</td><td>--</td></tr><tr><td>v-model:selectedKey</td><td>\u9009\u4E2D\u9879 (\u5355\u9009)</td><td>--</td><td>--</td><td>--</td></tr><tr><td>default-toolbar</td><td>\u5DE5\u5177\u680F</td><td><code>boolean</code> <code>array</code></td><td><code>false</code></td><td><code>true</code> <code>false</code> <code>[&#39;filter&#39;,&#39;export&#39;,&#39;print&#39;]</code></td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td><code>string</code></td><td><code>md</code></td><td><code>lg</code> <code>md</code> <code>sm</code></td></tr><tr><td>children-column-name</td><td>\u6811\u8282\u70B9\u5B57\u6BB5</td><td><code>string</code></td><td><code>children</code></td><td>--</td></tr><tr><td>indent-size</td><td>\u6811\u8868\u884C\u7EA7\u7F29\u8FDB</td><td><code>number</code></td><td><code>30</code></td><td>--</td></tr><tr><td>height</td><td>\u8868\u683C\u9AD8\u5EA6</td><td><code>number</code></td><td>--</td><td>--</td></tr><tr><td>maxHeight</td><td>\u8868\u683C\u6700\u5927\u9AD8\u5EA6</td><td><code>number</code></td><td>--</td><td>--</td></tr><tr><td>even</td><td>\u6591\u9A6C\u6761\u7EB9</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code> <code>false</code></td></tr><tr><td>cellStyle</td><td>\u5217\u6837\u5F0F function(row, column, rowIndex, columnIndex)</td><td><code>string</code> <code>function</code></td><td>--</td><td>--</td></tr><tr><td>rowStyle</td><td>\u884C\u6837\u5F0F function(row, rowIndex)</td><td><code>string</code> <code>function</code></td><td>--</td><td>--</td></tr><tr><td>cellClassName</td><td>\u5217\u7C7B\u540D\u79F0 function(row, column, rowIndex, columnIndex)</td><td><code>string</code> <code>function</code></td><td>--</td><td>--</td></tr><tr><td>rowClassName</td><td>\u884C\u7C7B\u540D\u79F0 function(row, rowIndex)</td><td><code>string</code> <code>function</code></td><td>--</td><td>--</td></tr><tr><td>skin</td><td>\u98CE\u683C</td><td><code>string</code></td><td>--</td><td><code>line</code> <code>row</code> <code>nob</code></td></tr><tr><td>expand-index</td><td>\u5C55\u5F00\u6240\u5728\u5217</td><td><code>number</code></td><td>--</td><td>--</td></tr><tr><td>default-expand-all</td><td>\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u5217</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code> <code>false</code></td></tr><tr><td>expand-keys</td><td>\u5C55\u5F00\u7684\u5217</td><td><code>array</code></td><td><code>[]</code></td><td>--</td></tr><tr><td>span-method</td><td>\u5408\u5E76\u7B97\u6CD5</td><td><code>function</code></td><td>--</td><td>--</td></tr><tr><td>getCheckboxProps</td><td>\u591A\u9009\u884C\u5C5E\u6027</td><td><code>function</code></td><td>--</td><td>--</td></tr><tr><td>getRadioProps</td><td>\u5355\u9009\u884C\u5C5E\u6027</td><td><code>function</code></td><td>--</td><td>--</td></tr></tbody></table><h3 id="\u5217\u5C5E\u6027" tabindex="-1">\u5217\u5C5E\u6027 <a class="header-anchor" href="#\u5217\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u5217\u6807\u9898</td><td>--</td><td>--</td><td>--</td></tr><tr><td>key</td><td>\u6570\u636E\u5B57\u6BB5</td><td>--</td><td>--</td><td>--</td></tr><tr><td>customSlot</td><td>\u81EA\u5B9A\u4E49\u63D2\u69FD</td><td>--</td><td>--</td><td>--</td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>--</td><td>--</td><td>--</td></tr><tr><td>minWidth</td><td>\u6700\u5C0F\u5BBD\u5EA6</td><td>--</td><td><code>100px</code></td><td>--</td></tr><tr><td>sort</td><td>\u6392\u5E8F</td><td>--</td><td>--</td><td>--</td></tr><tr><td>titleSlot</td><td>\u6807\u9898\u63D2\u69FD</td><td>--</td><td>--</td><td>--</td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td><code>string</code></td><td><code>left</code></td><td><code>left</code> <code>right</code> <code>center</code></td></tr><tr><td>ellipsisTooltip</td><td>\u5F53\u5185\u5BB9\u8FC7\u957F\u88AB\u9690\u85CF\u65F6\u663E\u793A tooltip</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code> <code>false</code></td></tr><tr><td>fixed</td><td>\u5217\u56FA\u5B9A</td><td><code>string</code></td><td>--</td><td><code>left</code> <code>right</code></td></tr><tr><td>type</td><td>\u5217\u7C7B\u578B</td><td><code>string</code></td><td>--</td><td><code>number</code> <code>checkbox</code> <code>radio</code></td></tr><tr><td>children</td><td>\u8868\u5934\u5206\u7EC4</td><td><code>string</code></td><td>--</td><td><code>number</code> <code>checkbox</code> <code>radio</code></td></tr></tbody></table><h3 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>row</td><td>\u884C\u5355\u51FB</td><td><code>{ row: \u5F53\u524D\u884C\u6570\u636E } </code></td></tr><tr><td>row-double</td><td>\u884C\u53CC\u51FB</td><td><code>{ row: \u5F53\u524D\u884C\u6570\u636E }</code></td></tr><tr><td>row-contextmenu</td><td>\u884C\u53F3\u51FB</td><td><code>{ row: \u5F53\u524D\u884C\u6570\u636E }</code></td></tr><tr><td>change</td><td>\u5206\u9875\u4E8B\u4EF6</td><td><code>{ current: \u5F53\u524D\u9875\u7801, limit: \u6BCF\u9875\u6570\u91CF }</code></td></tr></tbody></table><h3 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD</th><th>\u63CF\u8FF0</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toolbar</td><td>\u81EA\u5B9A\u4E49\u5DE5\u5177\u680F</td><td>--</td></tr><tr><td>footer</td><td>\u5E95\u90E8\u6269\u5C55</td><td>--</td></tr><tr><td>expand</td><td>\u5D4C\u5957\u9762\u677F</td><td><code>{ row }</code>\uFF0Cdata \u53C2\u6570\u7531 row \u66FF\u4EE3\uFF0C\u4F46 data \u4ECD\u7136\u53EF\u7528</td></tr><tr><td>customSlot</td><td>\u81EA\u5B9A\u4E49\u5217\u63D2\u69FD</td><td><code>{ row\uFF0CrowIndex\uFF0Ccolumn\uFF0CcolumnIndex }</code>\uFF0Cdata \u53C2\u6570\u7531 row \u66FF\u4EE3\uFF0C\u4F46 data \u4ECD\u7136\u53EF\u7528\uFF0CrowIndex \u884C\u7D22\u5F15 columnIndex \u5217\u7D22\u5F15 column \u5217\u4FE1\u606F\u53C2\u6570</td></tr></tbody></table></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1">\u57FA\u7840\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a></h3>',5),H=n("div",null,[s("\u4F7F\u7528 "),n("code",null,"WvTable"),s(" \u6807\u7B7E, \u521B\u5EFA\u8868\u683C")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("WvTable")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns66"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#income"),n("span",{class:"token punctuation"},">")]),s(" 66666 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#outlays"),n("span",{class:"token punctuation"},">")]),s(" 77777 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#balance"),n("span",{class:"token punctuation"},">")]),s(" 88888 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("WvTable")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns66 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D44\u91D1\u5F80\u6765'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u94F6\u884C\u6536\u5165(\uFFE5)'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'income'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"customSlot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'income'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u94F6\u884C\u652F\u51FA(\uFFE5)'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'outlays'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"customSlot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'outlays'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u94F6\u884C\u4F59\u989D(\uFFE5)'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'balance'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"customSlot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'balance'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token string"},"'weView -  \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns66`),n("span",{class:"token punctuation"},","),s(`
      dataSource1`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"tr:nth-child(2n)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" revert"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),U=n("h3",{id:"\u4E0D\u540C\u5C3A\u5BF8",tabindex:"-1"},[s("\u4E0D\u540C\u5C3A\u5BF8 "),n("a",{class:"header-anchor",href:"#\u4E0D\u540C\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),O=n("div",null,"\u4E0D\u540C\u5C3A\u5BF8",-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("form")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("WvRadio")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("size2"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("action"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("sm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("sm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("WvRadio")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("WvRadio")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("size2"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("action"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("md"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("md"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("WvRadio")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("WvRadio")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("size2"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("action"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("lg"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("lg"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("WvRadio")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("form")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("WvTable")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns2"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource2"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("size2"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("WvTable")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" size2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'md'"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      size2`),n("span",{class:"token punctuation"},","),s(`
      columns2`),n("span",{class:"token punctuation"},","),s(`
      dataSource2`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),M=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"size"),s(" \u5C5E\u6027\u8868\u683C\u5C3A\u5BF8\u3002")])],-1),$=n("h3",{id:"\u5F00\u542F\u5206\u9875",tabindex:"-1"},[s("\u5F00\u542F\u5206\u9875 "),n("a",{class:"header-anchor",href:"#\u5F00\u542F\u5206\u9875","aria-hidden":"true"},"#")],-1),G=n("div",null,"\u5F00\u542F\u5206\u9875",-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("WvTable")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":page"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("page3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("change3"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("WvTable")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" page3 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"total"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"limit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"current"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"showRefresh"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"change3"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" current"),n("span",{class:"token punctuation"},","),s(" limit "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'current:'"),s(),n("span",{class:"token operator"},"+"),s(" current "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"' limit:'"),s(),n("span",{class:"token operator"},"+"),s(" limit"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" columns3 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"slot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"slot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource3 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      page3`),n("span",{class:"token punctuation"},","),s(`
      change3`),n("span",{class:"token punctuation"},","),s(`
      columns3`),n("span",{class:"token punctuation"},","),s(`
      dataSource3`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},`.pager *:not(select),
.wv-table-page`),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),s(" content-box"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".wv-table-page"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 7px 0 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Q=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"page"),s(" \u5C5E\u6027\u8BBE\u7F6E\u5206\u9875\u3002")])],-1),X=n("h3",{id:"\u5F00\u542F\u6392\u5E8F",tabindex:"-1"},[s("\u5F00\u542F\u6392\u5E8F "),n("a",{class:"header-anchor",href:"#\u5F00\u542F\u6392\u5E8F","aria-hidden":"true"},"#")],-1),Y=n("div",null,"\u5F00\u542F\u6392\u5E8F",-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns4"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns4 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6210\u7EE9'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'score'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sort"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource4 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F20\u4E09'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u674E\u56DB'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"80"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u738B\u4E94'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"99"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6709\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"92"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65E0\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns4`),n("span",{class:"token punctuation"},","),s(`
      dataSource4`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),nn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u8BBE\u7F6E\u5217\u5C5E\u6027 "),n("code",null,"sort: true"),s(", \u5F00\u542F\u6392\u5E8F\u3002")])],-1),sn=n("h3",{id:"\u5F00\u542F\u5B50\u8868",tabindex:"-1"},[s("\u5F00\u542F\u5B50\u8868 "),n("a",{class:"header-anchor",href:"#\u5F00\u542F\u5B50\u8868","aria-hidden":"true"},"#")],-1),an=n("div",null,"\u5F00\u542F\u5B50\u8868",-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns6"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource6"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":default-expand-all"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("defaultExpandAll6"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandKeys6"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#expand"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ data }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns6"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns6 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6210\u7EE9'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'score'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource6 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F20\u4E09'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u674E\u56DB'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"80"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u738B\u4E94'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"99"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6709\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"92"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65E0\u540D'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" expandKeys6 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" defaultExpandAll6 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns6`),n("span",{class:"token punctuation"},","),s(`
      dataSource6`),n("span",{class:"token punctuation"},","),s(`
      expandKeys6`),n("span",{class:"token punctuation"},","),s(`
      defaultExpandAll6`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),en=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u5F53\u8868\u683C\u5185\u5BB9\u8F83\u591A\u4E0D\u80FD\u4E00\u6B21\u6027\u5B8C\u5168\u5C55\u793A\u65F6, \u53EF\u4EE5\u5C06\u591A\u4F59\u5185\u5BB9\u5C55\u793A\u5230 "),n("code",null,"expand"),s(" \u63D2\u69FD\u3002")])],-1),on=n("h3",{id:"\u6811\u5F62\u8868\u683C",tabindex:"-1"},[s("\u6811\u5F62\u8868\u683C "),n("a",{class:"header-anchor",href:"#\u6811\u5F62\u8868\u683C","aria-hidden":"true"},"#")],-1),pn=n("div",null,"\u6811\u5F62\u8868\u683C",-1),cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns7"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource7"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":default-expand-all"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("defaultExpandAll7"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandKeys7"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#score"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ data }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ data }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns7 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6210\u7EE9'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'score'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource7 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7CFB\u7EDF\u7BA1\u7406'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7528\u6237\u7BA1\u7406'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"99"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u89D2\u8272\u7BA1\u7406'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'7'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7528\u6237\u7BA1\u7406'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"99"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u89D2\u8272\u7BA1\u7406'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"96"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7535\u5546\u7BA1\u7406'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5546\u54C1\u7BA1\u7406'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'6'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7BA1\u7406'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"score"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"22"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" expandKeys7 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" defaultExpandAll7 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns7`),n("span",{class:"token punctuation"},","),s(`
      dataSource7`),n("span",{class:"token punctuation"},","),s(`
      expandKeys7`),n("span",{class:"token punctuation"},","),s(`
      defaultExpandAll7`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),ln=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u6811\u5F62\u6570\u636E\u7684\u5C55\u793A\uFF0C\u5F53\u6570\u636E\u4E2D\u6709 "),n("code",null,"children"),s(" \u5B57\u6BB5\u65F6\u4F1A\u81EA\u52A8\u5C55\u793A\u4E3A\u6811\u5F62\u8868\u683C, \u901A\u8FC7\u8BBE\u7F6E "),n("code",null,"indentSize"),s(" \u4EE5\u63A7\u5236\u6BCF\u4E00\u5C42\u7684\u7F29\u8FDB\u5BBD\u5EA6, \u4F7F\u7528 "),n("code",null,"childrenColumnName"),s(" \u66FF\u6362\u9ED8\u8BA4\u5B57\u6BB5\u3002")])],-1),un=n("h3",{id:"\u56FA\u5B9A\u8868\u5934",tabindex:"-1"},[s("\u56FA\u5B9A\u8868\u5934 "),n("a",{class:"header-anchor",href:"#\u56FA\u5B9A\u8868\u5934","aria-hidden":"true"},"#")],-1),rn=n("div",null,"\u56FA\u5B9A\u8868\u5934",-1),kn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns8"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource8"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":max-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("maxHeight"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#operator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ data }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn2"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deleteColumn(data)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5220\u9664"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" maxHeight "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"deleteColumn"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" username "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" findIndex "),n("span",{class:"token operator"},"="),s(" dataSource8"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"findIndex"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" item"),n("span",{class:"token punctuation"},"."),s("username "),n("span",{class:"token operator"},"==="),s(` username
      `),n("span",{class:"token punctuation"},")"),s(`
      dataSource8`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("findIndex"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" columns8 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"minWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"minWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"minWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u64CD\u4F5C'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"customSlot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'operator'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'operator'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource8 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'6'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'7'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token string"},"'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'9'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token string"},"'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'10'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token string"},"'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token string"},"'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      maxHeight`),n("span",{class:"token punctuation"},","),s(`
      deleteColumn`),n("span",{class:"token punctuation"},","),s(`
      columns8`),n("span",{class:"token punctuation"},","),s(`
      dataSource8`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".btn2"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 0.2em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" orangered"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),dn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u8BBE\u7F6E "),n("code",null,"height"),s(" \u6216\u8005 "),n("code",null,"max-height"),s(" \u5373\u53EF\u5B9E\u73B0\u56FA\u5B9A\u8868\u5934\u3002")])],-1),yn=n("h3",{id:"\u6591\u9A6C\u6761\u7EB9",tabindex:"-1"},[s("\u6591\u9A6C\u6761\u7EB9 "),n("a",{class:"header-anchor",href:"#\u6591\u9A6C\u6761\u7EB9","aria-hidden":"true"},"#")],-1),gn=n("div",null,"\u6591\u9A6C\u6761\u7EB9",-1),mn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns1"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource1"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"even"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns1`),n("span",{class:"token punctuation"},","),s(`
      dataSource1`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),wn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"even"),s(" \u5C5E\u6027, \u5F00\u542F\u6591\u9A6C\u6761\u7EB9, \u9ED8\u8BA4\u4E3A "),n("code",null,"false"),s("\u3002")])],-1),En=n("h3",{id:"\u5B9A\u4E49\u6837\u5F0F",tabindex:"-1"},[s("\u5B9A\u4E49\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u5B9A\u4E49\u6837\u5F0F","aria-hidden":"true"},"#")],-1),Fn=n("div",null,"\u5B9A\u4E49\u6837\u5F0F",-1),hn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns1"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource1"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":cell-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cellStyle"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":row-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rowStyle"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"cellStyle"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("row"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},","),s(" rowIndex"),n("span",{class:"token punctuation"},","),s(" columnIndex")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("columnIndex "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'color:red'"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"rowStyle"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("row"),n("span",{class:"token punctuation"},","),s(" rowIndex")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("rowIndex "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'color:blue'"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns1`),n("span",{class:"token punctuation"},","),s(`
      dataSource1`),n("span",{class:"token punctuation"},","),s(`
      cellStyle`),n("span",{class:"token punctuation"},","),s(`
      rowStyle`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),vn=T('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u901A\u8FC7 <code>cellStyle</code> <code>rowStyle</code> <code>cellClassName</code> <code>rowClassName</code> \u5C5E\u6027, \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6837\u5F0F\u3002</p></div><h3 id="\u4E0D\u540C\u98CE\u683C" tabindex="-1">\u4E0D\u540C\u98CE\u683C <a class="header-anchor" href="#\u4E0D\u540C\u98CE\u683C" aria-hidden="true">#</a></h3>',2),xn=n("div",null,"\u4E0D\u540C\u98CE\u683C",-1),bn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("form")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-radio")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("skin1"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("action"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("line"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("line"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-radio")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-radio")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("skin1"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("action"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("nob"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("nob"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-radio")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-radio")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("skin1"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("action"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("row"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-radio")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("form")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns1"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource1"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":skin"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("skin1"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" skin1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'line'"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" columns1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      skin1`),n("span",{class:"token punctuation"},","),s(`
      columns1`),n("span",{class:"token punctuation"},","),s(`
      dataSource1`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Cn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"skin"),s(" \u5C5E\u6027, \u5207\u6362 table \u5355\u5143\u683C\u8FB9\u6846\u6837\u5F0F\u3002")])],-1),fn=n("h3",{id:"\u56FA\u5B9A\u884C\u5217",tabindex:"-1"},[s("\u56FA\u5B9A\u884C\u5217 "),n("a",{class:"header-anchor",href:"#\u56FA\u5B9A\u884C\u5217","aria-hidden":"true"},"#")],-1),_n=n("div",null,"\u56FA\u5B9A\u884C\u5217",-1),Bn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns20"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource20"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns20 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource20 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns20`),n("span",{class:"token punctuation"},","),s(`
      dataSource20`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Vn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"fixed"),s(" \u5C5E\u6027\u5B9E\u73B0\u5217\u56FA\u5B9A, \u53EF\u9009\u503C\u4E3A "),n("code",null,"left"),s(" \u4E0E "),n("code",null,"right"),s("\u3002")])],-1),An=n("h3",{id:"\u5F00\u542F\u5E8F\u53F7",tabindex:"-1"},[s("\u5F00\u542F\u5E8F\u53F7 "),n("a",{class:"header-anchor",href:"#\u5F00\u542F\u5E8F\u53F7","aria-hidden":"true"},"#")],-1),Dn=n("div",null,"\u5F00\u542F\u5E8F\u53F7",-1),Sn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns21"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource21"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns21 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'number'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource21 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns21`),n("span",{class:"token punctuation"},","),s(`
      dataSource21`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),qn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"columns"),s(" \u6DFB\u52A0\u5217 "),n("code",null,"type:'number'"),s(" \u5F00\u542F\u5E8F\u53F7\u5217\u3002")])],-1),Tn=n("h3",{id:"\u5F00\u542F\u591A\u9009",tabindex:"-1"},[s("\u5F00\u542F\u591A\u9009 "),n("a",{class:"header-anchor",href:"#\u5F00\u542F\u591A\u9009","aria-hidden":"true"},"#")],-1),Kn=n("div",null,"\u5F00\u542F\u591A\u9009",-1),Nn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("update-btn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeSelectedKeys"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u4FEE\u6539\u9009\u4E2D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("update-btn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeDataSource23"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u4FEE\u6539\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns23"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource23"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys5"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys5 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getCheckboxProps"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("data"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeSelectedKeys"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      selectedKeys5`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeDataSource23"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      dataSource23`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" columns23 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource23 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns23`),n("span",{class:"token punctuation"},","),s(`
      dataSource23`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys5`),n("span",{class:"token punctuation"},","),s(`
      changeSelectedKeys`),n("span",{class:"token punctuation"},","),s(`
      getCheckboxProps`),n("span",{class:"token punctuation"},","),s(`
      changeDataSource23`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".update-btn"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 1em 1em 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0.5em 1em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 0.2em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #1e9fff"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),In=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"columns"),s(" \u914D\u7F6E "),n("code",null,"type:'checkbox'"),s(" \u5F00\u542F\u591A\u9009\u5217\u3002")])],-1),Wn=n("h3",{id:"\u5F00\u542F\u5355\u9009",tabindex:"-1"},[s("\u5F00\u542F\u5355\u9009 "),n("a",{class:"header-anchor",href:"#\u5F00\u542F\u5355\u9009","aria-hidden":"true"},"#")],-1),zn=n("div",null,"\u5F00\u542F\u5355\u9009",-1),Pn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns24"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource24"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selected-key")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKey24"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns24 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" selectedKey24 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource24 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns24`),n("span",{class:"token punctuation"},","),s(`
      dataSource24`),n("span",{class:"token punctuation"},","),s(`
      selectedKey24`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Rn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"columns"),s(" \u914D\u7F6E "),n("code",null,"type:'radio'"),s(" \u5F00\u542F\u5355\u9009\u5217\u3002")])],-1),Hn=n("h3",{id:"\u65E0\u6570\u636E",tabindex:"-1"},[s("\u65E0\u6570\u636E "),n("a",{class:"header-anchor",href:"#\u65E0\u6570\u636E","aria-hidden":"true"},"#")],-1),jn=n("div",null,"\u65E0\u6570\u636E",-1),Un=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns25"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource25"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns25 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'600px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'380px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource25 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns25`),n("span",{class:"token punctuation"},","),s(`
      dataSource25`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),On=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,"\u8868\u683C\u65E0\u6570\u636E\u65F6\u663E\u793A\u4E3A\u4E00\u4E2A\u7A7A\u7684 LOGO\u3002")],-1),Jn=n("h3",{id:"\u5237\u65B0\u6570\u636E",tabindex:"-1"},[s("\u5237\u65B0\u6570\u636E "),n("a",{class:"header-anchor",href:"#\u5237\u65B0\u6570\u636E","aria-hidden":"true"},"#")],-1),Mn=n("div",null,"\u5237\u65B0\u6570\u636E",-1),$n=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("update-btn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeDataSource22"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u66F4\u65B0\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns22"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource22"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns22 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource22 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeDataSource22"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      dataSource22`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'update'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'update'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'boy'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u66F4\u65B0\u6570\u636E '"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns22`),n("span",{class:"token punctuation"},","),s(`
      dataSource22`),n("span",{class:"token punctuation"},","),s(`
      changeDataSource22`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".update-btn"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 1em 1em 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0.5em 1em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 0.2em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #1e9fff"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Gn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"data-source"),s(" \u7684\u8D4B\u503C\uFF0C\u5B9E\u73B0\u6570\u636E\u7684\u66F4\u65B0\u3002")])],-1),Ln=n("h3",{id:"\u5F00\u542F\u7EDF\u8BA1",tabindex:"-1"},[s("\u5F00\u542F\u7EDF\u8BA1 "),n("a",{class:"header-anchor",href:"#\u5F00\u542F\u7EDF\u8BA1","aria-hidden":"true"},"#")],-1),Qn=n("div",null,"\u5F00\u542F\u7EDF\u8BA1",-1),Xn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns26"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource26"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns26 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"totalRow"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5408\u5E76:'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource26 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns26`),n("span",{class:"token punctuation"},","),s(`
      dataSource26`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Yn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"columns"),s(" \u914D\u7F6E "),n("code",null,"totalRow"),s(" \u5F00\u542F\u884C\u7EDF\u8BA1\u3002")])],-1),Zn=n("h3",{id:"\u5408\u5E76\u884C\u5217",tabindex:"-1"},[s("\u5408\u5E76\u884C\u5217 "),n("a",{class:"header-anchor",href:"#\u5408\u5E76\u884C\u5217","aria-hidden":"true"},"#")],-1),ns=n("div",null,"\u5408\u5E76\u884C\u5217",-1),ss=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns27"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource27"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":span-method"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("spanMethod27"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":default-toolbar"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns27 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource27 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"spanMethod27"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("row"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},","),s(" rowIndex"),n("span",{class:"token punctuation"},","),s(" columnIndex")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("rowIndex "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("columnIndex "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("columnIndex "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns27`),n("span",{class:"token punctuation"},","),s(`
      dataSource27`),n("span",{class:"token punctuation"},","),s(`
      spanMethod27`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),as=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"span-method"),s(" \u5C5E\u6027, \u81EA\u5B9A\u4E49\u884C\u5217\u5408\u5E76\u7684\u903B\u8F91\u3002")])],-1),ts=n("h3",{id:"\u884C\u5185\u7F16\u8F91",tabindex:"-1"},[s("\u884C\u5185\u7F16\u8F91 "),n("a",{class:"header-anchor",href:"#\u884C\u5185\u7F16\u8F91","aria-hidden":"true"},"#")],-1),es=n("div",null,"\u884C\u5185\u7F16\u8F91",-1),os=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns28"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource28"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#username"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ data }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("input")]),s(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("edingKeys.includes(data)"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("data.username"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"@input"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeUsername($event, data)"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),s(`
        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("wv-icon wv-icon-close"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("edingKeys.includes(data)"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deleteEdit(data)"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s(`
        {{ data.username }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),s(`
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("wv-icon wv-icon-edit"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(`
          `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("!edingKeys.includes(data)"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("editHandle(data)"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" edingKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" columns28 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D26\u6237'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"customSlot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5BC6\u7801'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'password'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource28 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"editHandle"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      edingKeys`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"deleteEdit"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      edingKeys`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("edingKeys"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeUsername"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("val"),n("span",{class:"token punctuation"},","),s(" data")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      dataSource28`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"element"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("element"),n("span",{class:"token punctuation"},"."),s("id "),n("span",{class:"token operator"},"=="),s(" data"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          element`),n("span",{class:"token punctuation"},"."),s("username "),n("span",{class:"token operator"},"="),s(" val"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s(`value
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      edingKeys`),n("span",{class:"token punctuation"},","),s(`
      deleteEdit`),n("span",{class:"token punctuation"},","),s(`
      columns28`),n("span",{class:"token punctuation"},","),s(`
      editHandle`),n("span",{class:"token punctuation"},","),s(`
      dataSource28`),n("span",{class:"token punctuation"},","),s(`
      changeUsername`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"input"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" inline-block"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 2em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" transparent"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #eeeeee"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".wv-icon-close:before"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),s(" sub"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),ps=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7\u5217\u5C5E\u6027 "),n("code",null,"customSlot"),s(", \u81EA\u5B9A\u4E49\u5217\u63D2\u69FD\u3002")])],-1),cs=n("h3",{id:"\u590D\u6742\u8868\u5934",tabindex:"-1"},[s("\u590D\u6742\u8868\u5934 "),n("a",{class:"header-anchor",href:"#\u590D\u6742\u8868\u5934","aria-hidden":"true"},"#")],-1),ls=n("div",null,"\u590D\u6742\u8868\u5934",-1),us=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns29"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource29"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":default-toolbar"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" columns29 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7701'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'province'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E02'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'city'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u533A'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'area'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"totalRow"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7EDF\u8BA1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource29 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C31\u7720\u5100\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C71\u4E1C'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4E\u5357'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"area"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9AD8\u65B0\u533A'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C31\u7720\u5100\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C71\u4E1C'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4E\u5357'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"area"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9AD8\u65B0\u533A'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C31\u7720\u5100\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C71\u4E1C'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4E\u5357'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"area"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9AD8\u65B0\u533A'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C31\u7720\u5100\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C71\u4E1C'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4E\u5357'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"area"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9AD8\u65B0\u533A'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C31\u7720\u5100\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C71\u4E1C'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4E\u5357'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"area"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9AD8\u65B0\u533A'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns29`),n("span",{class:"token punctuation"},","),s(`
      dataSource29`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),rs=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7\u5217\u5C5E\u6027 "),n("code",null,"children"),s(", \u6DFB\u52A0\u6B21\u7EA7\u8868\u5934\u3002")])],-1),ks=n("h3",{id:"\u52A0\u8F7D\u8FC7\u6E21",tabindex:"-1"},[s("\u52A0\u8F7D\u8FC7\u6E21 "),n("a",{class:"header-anchor",href:"#\u52A0\u8F7D\u8FC7\u6E21","aria-hidden":"true"},"#")],-1),is=n("div",null,"\u52A0\u8F7D\u8FC7\u6E21",-1),ds=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("load-btn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("loadData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u52A0\u8F7D\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns30"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource30"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("loading"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" loading "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" columns30 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'username'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7701'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'province'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E02'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'city'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u533A'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u53BF'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xian'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100px'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6751'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'cun'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100px'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6027\u522B'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'180px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource30 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"loadData"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      loading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        dataSource30`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C31\u7720\u5100\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C71\u4E1C'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4E\u5357'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"area"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9AD8\u65B0\u533A'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"xian"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"cun"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C31\u7720\u5100\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C71\u4E1C'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4E\u5357'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"area"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9AD8\u65B0\u533A'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"xian"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"cun"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C31\u7720\u5100\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C71\u4E1C'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4E\u5357'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"area"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9AD8\u65B0\u533A'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"xian"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"cun"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C31\u7720\u5100\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C71\u4E1C'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4E\u5357'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"area"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9AD8\u65B0\u533A'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"xian"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"cun"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C31\u7720\u5100\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"province"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C71\u4E1C'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4E\u5357'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"area"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9AD8\u65B0\u533A'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'woow'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weView'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"xian"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"cun"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
        loading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      loading`),n("span",{class:"token punctuation"},","),s(`
      loadData`),n("span",{class:"token punctuation"},","),s(`
      columns30`),n("span",{class:"token punctuation"},","),s(`
      dataSource30`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".load-btn"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 1em 1em 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0.5em 1em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 0.2em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #1e9fff"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),ys=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u901A\u8FC7 "),n("code",null,"loading"),s(" \u5C5E\u6027, \u5207\u6362\u8868\u683C\u52A0\u8F7D\u52A8\u753B\u3002")])],-1),gs=n("h3",{id:"\u5B8C\u6574\u8868\u683C",tabindex:"-1"},[s("\u5B8C\u6574\u8868\u683C "),n("a",{class:"header-anchor",href:"#\u5B8C\u6574\u8868\u683C","aria-hidden":"true"},"#")],-1),ms=n("div",null,"\u5B8C\u6574\u8868\u683C",-1),ws=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("wv-table")]),s(`
    `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("id"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":max-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("maxHeight5"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns5"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":expand-index"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataSource5"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":checkbox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkbox5"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":page"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("page5"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":default-toolbar"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("defaultToolbar5"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selected-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys5"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@row"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rowClick5"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("change555"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#toolbar"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #1AAD19")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("\u65B0\u589E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5220\u9664"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ row, column, rowIndex, columnIndex }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      {{ row.name }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#name-title"),n("span",{class:"token punctuation"},">")]),s("\u{1F60A}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#operator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ row }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn2"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #1e9fff")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("\u4FEE\u6539"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5220\u9664"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("wv-table")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys5 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" checkbox5 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" defaultToolbar5 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'export'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'print'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'filter'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" maxHeight5 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'600px'"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" page5 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"total"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"limit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"current"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" columns5 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"change555"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"page"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("page"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      columns5`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E8F\u53F7'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'50px'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'200px'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"titleSlot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name-title'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"customSlot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5907\u6CE8'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'remark'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"ellipsisTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u64CD\u4F5C'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'150px'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"customSlot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'operator'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'operator'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" dataSource5 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C0F\u660E'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token string"},"'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C0F\u7EA2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token string"},"'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C0F\u521A'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token string"},"'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C0F\u674E'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token string"},"'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C0F\u67CF'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token string"},"'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'6'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C0F\u5409'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"remark"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token string"},"'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"rowClick5"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"rowDoubleClick5"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("selectedKeys5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u590D\u9009\u6846\u76D1\u542C:'"),s(),n("span",{class:"token operator"},"+"),s(" selectedKeys5"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      maxHeight5`),n("span",{class:"token punctuation"},","),s(`
      columns5`),n("span",{class:"token punctuation"},","),s(`
      dataSource5`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys5`),n("span",{class:"token punctuation"},","),s(`
      checkbox5`),n("span",{class:"token punctuation"},","),s(`
      defaultToolbar5`),n("span",{class:"token punctuation"},","),s(`
      rowClick5`),n("span",{class:"token punctuation"},","),s(`
      rowDoubleClick5`),n("span",{class:"token punctuation"},","),s(`
      page5`),n("span",{class:"token punctuation"},","),s(`
      change555`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".wv-table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" table"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".btn"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 1em 1em 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0.5em 1em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 0.2em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" orangered"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".btn2"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),s(" 0.5em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 0.2em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" orangered"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".wv-table-view .wv-table-page"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),s(" content-box"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 7px 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function Es(c,r,u,k,i,g){const o=F("render-demo-0"),t=F("demo"),a=F("render-demo-1"),d=F("render-demo-2"),e=F("render-demo-3"),l=F("render-demo-4"),w=F("render-demo-5"),E=F("render-demo-6"),v=F("render-demo-7"),x=F("render-demo-8"),h=F("render-demo-9"),f=F("render-demo-10"),b=F("render-demo-11"),C=F("render-demo-12"),D=F("render-demo-13"),_=F("render-demo-14"),V=F("render-demo-15"),A=F("render-demo-16"),S=F("render-demo-17"),q=F("render-demo-18"),B=F("render-demo-19"),K=F("render-demo-20"),N=F("render-demo-21");return z(),W("div",null,[R,y(t,{sourceCode:`<template>
  <WvTable :columns="columns66" :data-source="dataSource1">
    <template #income> 66666 </template>
    <template #outlays> 77777 </template>
    <template #balance> 88888 </template>
  </WvTable>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns66 = ref([
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '180px',
        key: 'password',
      },
      {
        title: '\u8D44\u91D1\u5F80\u6765',
        align: 'center',
        children: [
          {
            title: '\u94F6\u884C\u6536\u5165(\uFFE5)',
            key: 'income',
            align: 'center',
            customSlot: 'income',
          },
          {
            title: '\u94F6\u884C\u652F\u51FA(\uFFE5)',
            key: 'outlays',
            align: 'center',
            customSlot: 'outlays',
          },
          {
            title: '\u94F6\u884C\u4F59\u989D(\uFFE5)',
            key: 'balance',
            align: 'center',
            customSlot: 'balance',
          },
        ],
      },
    ])

    const dataSource1 = [
      {
        username: 'root',
        password: 'root',
        age: '18',
        remark: 'weView',
      },
      {
        username: 'root',
        password: 'root',
        age: '18',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        age: '20',
        remark:
          'weView -  \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002',
      },
    ]

    return {
      columns66,
      dataSource1,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
tr:nth-child(2n) {
  background-color: revert;
}
</style>
`},{description:p(()=>[H]),highlight:p(()=>[j]),default:p(()=>[y(o)]),_:1}),U,y(t,{sourceCode:`<template>
  <form>
    <WvRadio v-model="size2" name="action" value="sm">sm</WvRadio>
    <WvRadio v-model="size2" name="action" value="md">md</WvRadio>
    <WvRadio v-model="size2" name="action" value="lg">lg</WvRadio>
  </form>
  <WvTable
    :columns="columns2"
    :data-source="dataSource2"
    :size="size2"
  ></WvTable>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns2 = [
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '180px',
        key: 'password',
      },
      {
        title: '\u5E74\u9F84',
        width: '180px',
        key: 'age',
      },
    ]

    const dataSource2 = [
      { username: 'root', password: 'root', age: '18' },
      { username: 'woow', password: 'woow', age: '20' },
    ]

    const size2 = ref('md')

    return {
      size2,
      columns2,
      dataSource2,
    }
  },
}
<\/script>
<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[O]),highlight:p(()=>[J]),default:p(()=>[y(a)]),_:1}),M,$,y(t,{sourceCode:`<template>
  <WvTable
    :columns="columns3"
    :data-source="dataSource3"
    :page="page3"
    @change="change3"
  ></WvTable>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const page3 = ref({
      total: 100,
      limit: 10,
      current: 2,
      showRefresh: true,
    })

    const change3 = ({ current, limit }) => {
      alert('current:' + current + ' limit:' + limit)
    }

    const columns3 = [
      {
        type: 'number',
      },
      {
        title: '\u8D26\u6237',
        width: '200px',
        slot: 'username',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '180px',
        slot: 'password',
        key: 'password',
      },
      {
        title: '\u5E74\u9F84',
        width: '180px',
        key: 'age',
      },
    ]

    const dataSource3 = [
      { username: 'root', password: 'root', age: '18' },
      { username: 'woow', password: 'woow', age: '20' },
    ]

    return {
      page3,
      change3,
      columns3,
      dataSource3,
    }
  },
}
<\/script>
<style lang="scss" scoped>
.wv-table {
  display: table;
}
.pager *:not(select),
.wv-table-page {
  box-sizing: content-box;
}
.wv-table-page {
  padding: 7px 0 0;
  height: 50px;
}
</style>
`},{description:p(()=>[G]),highlight:p(()=>[L]),default:p(()=>[y(d)]),_:1}),Q,X,y(t,{sourceCode:`<template>
  <wv-table :columns="columns4" :data-source="dataSource4"></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns4 = [
      {
        title: '\u59D3\u540D',
        width: '200px',
        key: 'name',
      },
      {
        title: '\u6210\u7EE9',
        width: '180px',
        key: 'score',
        sort: true,
      },
    ]

    const dataSource4 = [
      { name: '\u5F20\u4E09', score: 100 },
      { name: '\u674E\u56DB', score: 80 },
      { name: '\u738B\u4E94', score: 99 },
      { name: '\u6709\u540D', score: 92 },
      { name: '\u65E0\u540D', score: 60 },
    ]

    return {
      columns4,
      dataSource4,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[Y]),highlight:p(()=>[Z]),default:p(()=>[y(e)]),_:1}),nn,sn,y(t,{sourceCode:`<template>
  <wv-table
    :columns="columns6"
    :data-source="dataSource6"
    :default-expand-all="defaultExpandAll6"
    v-model:expandKeys="expandKeys6"
  >
    <template #expand="{ data }">
      <wv-table :columns="columns6" :data-source="dataSource6"></wv-table>
    </template>
  </wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns6 = [
      {
        title: '\u59D3\u540D',
        width: '200px',
        key: 'name',
      },
      {
        title: '\u6210\u7EE9',
        width: '180px',
        key: 'score',
      },
    ]

    const dataSource6 = [
      { id: '1', name: '\u5F20\u4E09', score: 100 },
      { id: '2', name: '\u674E\u56DB', score: 80 },
      { id: '3', name: '\u738B\u4E94', score: 99 },
      { id: '4', name: '\u6709\u540D', score: 92 },
      { id: '5', name: '\u65E0\u540D', score: 60 },
    ]

    const expandKeys6 = ref(['1'])
    const defaultExpandAll6 = ref(false)

    return {
      columns6,
      dataSource6,
      expandKeys6,
      defaultExpandAll6,
    }
  },
}
<\/script>
<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[an]),highlight:p(()=>[tn]),default:p(()=>[y(l)]),_:1}),en,on,y(t,{sourceCode:`<template>
  <wv-table
    :columns="columns7"
    :data-source="dataSource7"
    :default-expand-all="defaultExpandAll7"
    v-model:expandKeys="expandKeys7"
  >
    <template #score="{ data }">{{ data }}</template>
  </wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns7 = [
      {
        title: '\u59D3\u540D',
        width: '200px',
        key: 'name',
        ellipsisTooltip: true,
      },
      {
        title: '\u6210\u7EE9',
        width: '180px',
        key: 'score',
      },
    ]

    const dataSource7 = [
      {
        id: '1',
        name: '\u7CFB\u7EDF\u7BA1\u7406',
        score: 100,
        children: [
          { id: '3', name: '\u7528\u6237\u7BA1\u7406', score: 99 },
          {
            id: '5',
            name: '\u89D2\u8272\u7BA1\u7406',
            score: 96,
            children: [
              { id: '7', name: '\u7528\u6237\u7BA1\u7406', score: 99 },
              { id: '8', name: '\u89D2\u8272\u7BA1\u7406', score: 96 },
            ],
          },
        ],
      },
      {
        id: '2',
        name: '\u7535\u5546\u7BA1\u7406',
        score: 100,
        children: [
          { id: '4', name: '\u5546\u54C1\u7BA1\u7406', score: 11 },
          { id: '6', name: '\u5206\u7C7B\u7BA1\u7406', score: 22 },
        ],
      },
    ]

    const expandKeys7 = ref(['1'])
    const defaultExpandAll7 = ref(false)

    return {
      columns7,
      dataSource7,
      expandKeys7,
      defaultExpandAll7,
    }
  },
}
<\/script>
<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[pn]),highlight:p(()=>[cn]),default:p(()=>[y(w)]),_:1}),ln,un,y(t,{sourceCode:`<template>
  <wv-table
    :columns="columns8"
    :data-source="dataSource8"
    :max-height="maxHeight"
  >
    <template #operator="{ data }">
      <button class="btn2" @click="deleteColumn(data)">\u5220\u9664</button>
    </template>
  </wv-table>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const maxHeight = ref('300px')

    const deleteColumn = ({ username }) => {
      const findIndex = dataSource8.value.findIndex(
        (item) => item.username === username
      )
      dataSource8.value.splice(findIndex, 1)
    }

    const columns8 = [
      {
        title: '\u8D26\u6237',
        minWidth: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        minWidth: '180px',
        key: 'password',
      },
      {
        title: '\u5E74\u9F84',
        minWidth: '180px',
        key: 'age',
      },
      {
        title: '\u64CD\u4F5C',
        width: '200px',
        customSlot: 'operator',
        key: 'operator',
        align: 'center',
      },
    ]

    const dataSource8 = ref([
      {
        username: '1',
        password: 'root',
        age: '18',
        remark: 'weView',
      },
      {
        username: '2',
        password: 'root',
        age: '18',
        remark: 'weView',
      },
      {
        username: '3',
        password: 'root',
        age: '18',
        remark: 'weView',
      },
      {
        username: '4',
        password: 'root',
        age: '18',
        remark: 'weView',
      },
      {
        username: '5',
        password: 'root',
        age: '18',
        remark: 'weView',
      },
      {
        username: '6',
        password: 'root',
        age: '18',
        remark: 'weView',
      },
      {
        username: '7',
        password: 'root',
        age: '18',
        remark: 'weView',
      },
      {
        username: '8',
        password: 'woow',
        age: '20',
        remark:
          'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002',
      },
      {
        username: '9',
        password: 'woow',
        age: '20',
        remark:
          'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002',
      },
      {
        username: '10',
        password: 'woow',
        age: '20',
        remark:
          'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002',
      },
      {
        username: '11',
        password: 'woow',
        age: '20',
        remark:
          'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002',
      },
    ])

    return {
      maxHeight,
      deleteColumn,
      columns8,
      dataSource8,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
.btn2 {
  border: 0;
  border-radius: 0.2em;
  background: orangered;
  color: white;
  cursor: pointer;
}
</style>
`},{description:p(()=>[rn]),highlight:p(()=>[kn]),default:p(()=>[y(E)]),_:1}),dn,yn,y(t,{sourceCode:`<template>
  <wv-table :columns="columns1" :data-source="dataSource1" even></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns1 = [
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '180px',
        key: 'password',
      },
      {
        title: '\u5E74\u9F84',
        width: '180px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource1 = [
      { username: 'root', password: 'root', age: '18', remark: 'weView' },
      { username: 'root', password: 'root', age: '18', remark: 'weView' },
      { username: 'woow', password: 'woow', age: '20', remark: 'weView' },
      { username: 'woow', password: 'woow', age: '20', remark: 'weView' },
      { username: 'woow', password: 'woow', age: '20', remark: 'weView' },
    ]

    return {
      columns1,
      dataSource1,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[gn]),highlight:p(()=>[mn]),default:p(()=>[y(v)]),_:1}),wn,En,y(t,{sourceCode:`<template>
  <wv-table
    :columns="columns1"
    :data-source="dataSource1"
    :cell-style="cellStyle"
    :row-style="rowStyle"
  ></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns1 = [
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '180px',
        key: 'password',
      },
      {
        title: '\u5E74\u9F84',
        width: '180px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource1 = [
      { username: 'root', password: 'root', age: '18', remark: 'weView' },
      { username: 'root', password: 'root', age: '18', remark: 'weView' },
      { username: 'woow', password: 'woow', age: '20', remark: 'weView' },
      { username: 'woow', password: 'woow', age: '20', remark: 'weView' },
      { username: 'woow', password: 'woow', age: '20', remark: 'weView' },
    ]

    const cellStyle = function (row, column, rowIndex, columnIndex) {
      if (columnIndex % 2 == 0) {
        return 'color:red'
      }
    }

    const rowStyle = function (row, rowIndex) {
      if (rowIndex % 2 == 0) {
        return 'color:blue'
      }
    }

    return {
      columns1,
      dataSource1,
      cellStyle,
      rowStyle,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[Fn]),highlight:p(()=>[hn]),default:p(()=>[y(x)]),_:1}),vn,y(t,{sourceCode:`<template>
  <form>
    <wv-radio v-model="skin1" name="action" value="line">line</wv-radio>
    <wv-radio v-model="skin1" name="action" value="nob">nob</wv-radio>
    <wv-radio v-model="skin1" name="action" value="row">row</wv-radio>
  </form>
  <wv-table
    :columns="columns1"
    :data-source="dataSource1"
    :skin="skin1"
  ></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const skin1 = ref('line')

    const columns1 = [
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '180px',
        key: 'password',
      },
      {
        title: '\u5E74\u9F84',
        width: '180px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource1 = [
      { username: 'root', password: 'root', age: '18', remark: 'weView' },
      { username: 'root', password: 'root', age: '18', remark: 'weView' },
      { username: 'woow', password: 'woow', age: '20', remark: 'weView' },
      { username: 'woow', password: 'woow', age: '20', remark: 'weView' },
      { username: 'woow', password: 'woow', age: '20', remark: 'weView' },
    ]

    return {
      skin1,
      columns1,
      dataSource1,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[xn]),highlight:p(()=>[bn]),default:p(()=>[y(h)]),_:1}),Cn,fn,y(t,{sourceCode:`<template>
  <wv-table :columns="columns20" :data-source="dataSource20"></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns20 = [
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '300px',
        key: 'password',
      },
      {
        fixed: 'right',
        title: '\u6027\u522B',
        width: '180px',
        key: 'sex',
      },
      {
        fixed: 'right',
        title: '\u5E74\u9F84',
        width: '180px',
        key: 'age',
      },
      {
        fixed: 'right',
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource20 = [
      {
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
    ]

    return {
      columns20,
      dataSource20,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[_n]),highlight:p(()=>[Bn]),default:p(()=>[y(f)]),_:1}),Vn,An,y(t,{sourceCode:`<template>
  <wv-table :columns="columns21" :data-source="dataSource21"></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns21 = [
      {
        type: 'number',
      },
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '300px',
        key: 'password',
      },
      {
        title: '\u6027\u522B',
        key: 'sex',
      },
      {
        title: '\u5E74\u9F84',
        width: '300px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource21 = [
      {
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
    ]

    return {
      columns21,
      dataSource21,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[Dn]),highlight:p(()=>[Sn]),default:p(()=>[y(b)]),_:1}),qn,Tn,y(t,{sourceCode:`<template>
  <button class="update-btn" @click="changeSelectedKeys">\u4FEE\u6539\u9009\u4E2D</button>
  <button class="update-btn" @click="changeDataSource23">\u4FEE\u6539\u6570\u636E</button>
  <wv-table
    :columns="columns23"
    :data-source="dataSource23"
    v-model:selectedKeys="selectedKeys5"
  ></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const selectedKeys5 = ref(['1'])

    const getCheckboxProps = (data, index) => {
      if (index == 2) {
        return { disabled: true }
      }
      return {}
    }

    const changeSelectedKeys = () => {
      selectedKeys5.value = ['2']
    }

    const changeDataSource23 = () => {
      dataSource23.value = [
        {
          id: '1',
          username: 'root',
          password: 'root',
          sex: '\u7537',
          age: '18',
          remark: 'weView',
        },
        {
          id: '2',
          username: 'root',
          password: 'root',
          sex: '\u7537',
          age: '18',
          remark: 'weView',
        },
      ]
    }

    const columns23 = [
      {
        fixed: 'left',
        type: 'checkbox',
      },
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
        fixed: 'left',
      },
      {
        title: '\u5BC6\u7801',
        width: '300px',
        key: 'password',
      },
      {
        title: '\u6027\u522B',
        key: 'sex',
      },
      {
        title: '\u5E74\u9F84',
        width: '300px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource23 = ref([
      {
        id: '1',
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        id: '2',
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        id: '3',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        id: '4',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        id: '5',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
    ])

    return {
      columns23,
      dataSource23,
      selectedKeys5,
      changeSelectedKeys,
      getCheckboxProps,
      changeDataSource23,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
.update-btn {
  margin: 0 1em 1em 0;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.2em;
  background: #1e9fff;
  color: white;
  cursor: pointer;
}
</style>
`},{description:p(()=>[Kn]),highlight:p(()=>[Nn]),default:p(()=>[y(C)]),_:1}),In,Wn,y(t,{sourceCode:`<template>
  <wv-table
    :columns="columns24"
    :data-source="dataSource24"
    v-model:selected-key="selectedKey24"
  ></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns24 = [
      {
        type: 'radio',
      },
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '300px',
        key: 'password',
      },
      {
        title: '\u6027\u522B',
        key: 'sex',
      },
      {
        title: '\u5E74\u9F84',
        width: '300px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const selectedKey24 = ref('2')

    const dataSource24 = [
      {
        id: '1',
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        id: '2',
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        id: '3',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        id: '4',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        id: '5',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
    ]

    return {
      columns24,
      dataSource24,
      selectedKey24,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[zn]),highlight:p(()=>[Pn]),default:p(()=>[y(D)]),_:1}),Rn,Hn,y(t,{sourceCode:`<template>
  <wv-table :columns="columns25" :data-source="dataSource25"></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns25 = [
      {
        title: '\u8D26\u6237',
        width: '500px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '500px',
        key: 'password',
      },
      {
        title: '\u6027\u522B',
        key: 'sex',
      },
      {
        title: '\u5E74\u9F84',
        width: '600px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '380px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource25 = []

    return {
      columns25,
      dataSource25,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[jn]),highlight:p(()=>[Un]),default:p(()=>[y(_)]),_:1}),On,Jn,y(t,{sourceCode:`<template>
  <button class="update-btn" @click="changeDataSource22">\u66F4\u65B0\u6570\u636E</button>
  <wv-table :columns="columns22" :data-source="dataSource22"></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns22 = [
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '300px',
        key: 'password',
      },
      {
        title: '\u6027\u522B',
        width: '300px',
        key: 'sex',
      },
      {
        title: '\u5E74\u9F84',
        width: '300px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource22 = ref([
      {
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
    ])

    const changeDataSource22 = () => {
      dataSource22.value = [
        {
          username: 'update',
          password: 'update',
          sex: 'boy',
          age: '18',
          remark: '\u66F4\u65B0\u6570\u636E ',
        },
      ]
    }

    return {
      columns22,
      dataSource22,
      changeDataSource22,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
.update-btn {
  margin: 0 1em 1em 0;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.2em;
  background: #1e9fff;
  color: white;
  cursor: pointer;
}
</style>
`},{description:p(()=>[Mn]),highlight:p(()=>[$n]),default:p(()=>[y(V)]),_:1}),Gn,Ln,y(t,{sourceCode:`<template>
  <wv-table :columns="columns26" :data-source="dataSource26"></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns26 = [
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '300px',
        key: 'password',
      },
      {
        title: '\u6027\u522B',
        key: 'sex',
        totalRow: '\u5408\u5E76:',
      },
      {
        title: '\u5E74\u9F84',
        width: '300px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource26 = [
      {
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
    ]

    return {
      columns26,
      dataSource26,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[Qn]),highlight:p(()=>[Xn]),default:p(()=>[y(A)]),_:1}),Yn,Zn,y(t,{sourceCode:`<template>
  <wv-table
    :columns="columns27"
    :data-source="dataSource27"
    :span-method="spanMethod27"
    :default-toolbar="true"
  ></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns27 = [
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '300px',
        key: 'password',
      },
      {
        title: '\u6027\u522B',
        key: 'sex',
      },
      {
        title: '\u5E74\u9F84',
        width: '300px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource27 = [
      {
        id: '1',
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        id: '2',
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        id: '3',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        id: '4',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        id: '5',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
    ]

    const spanMethod27 = (row, column, rowIndex, columnIndex) => {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    }

    return {
      columns27,
      dataSource27,
      spanMethod27,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[ns]),highlight:p(()=>[ss]),default:p(()=>[y(S)]),_:1}),as,ts,y(t,{sourceCode:`<template>
  <wv-table :columns="columns28" :data-source="dataSource28">
    <template #username="{ data }">
      <input
        v-if="edingKeys.includes(data)"
        :value="data.username"
        @input="changeUsername($event, data)"
      />
      <i
        class="wv-icon wv-icon-close"
        style="position: absolute;right: 10px;cursor: pointer;"
        v-if="edingKeys.includes(data)"
        @click="deleteEdit(data)"
      ></i>
      <span v-else>
        {{ data.username }}
        <i
          class="wv-icon wv-icon-edit"
          style="position: absolute;right: 10px;cursor: pointer;"
          v-if="!edingKeys.includes(data)"
          @click="editHandle(data)"
        ></i>
      </span>
    </template>
  </wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const edingKeys = ref([])

    const columns28 = [
      {
        title: '\u8D26\u6237',
        width: '200px',
        key: 'username',
        customSlot: 'username',
      },
      {
        title: '\u5BC6\u7801',
        width: '300px',
        key: 'password',
      },
      {
        title: '\u6027\u522B',
        key: 'sex',
      },
      {
        title: '\u5E74\u9F84',
        width: '300px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource28 = ref([
      {
        id: '1',
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        id: '2',
        username: 'root',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        id: '3',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        id: '4',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        id: '5',
        username: 'woow',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
    ])

    const editHandle = (data) => {
      edingKeys.value.push(data)
    }

    const deleteEdit = (data) => {
      edingKeys.value.splice(edingKeys.value.indexOf(data), 1)
    }

    const changeUsername = (val, data) => {
      dataSource28.value.forEach((element) => {
        if (element.id == data.id) {
          element.username = val.target.value
        }
      })
    }

    return {
      edingKeys,
      deleteEdit,
      columns28,
      editHandle,
      dataSource28,
      changeUsername,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
input {
  display: inline-block;
  height: 2em;
  padding-left: 10px;
  background-color: transparent;
  border: 1px solid #eeeeee;
}
.wv-icon-close:before {
  vertical-align: sub;
}
</style>
`},{description:p(()=>[es]),highlight:p(()=>[os]),default:p(()=>[y(q)]),_:1}),ps,cs,y(t,{sourceCode:`<template>
  <wv-table
    :columns="columns29"
    :data-source="dataSource29"
    :default-toolbar="true"
  ></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns29 = [
      {
        title: '\u540D\u79F0',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5730\u5740',
        key: 'address',
        children: [
          { title: '\u7701', key: 'province', width: '300px' },
          { title: '\u5E02', key: 'city', width: '300px' },
          { title: '\u533A', key: 'area', width: '300px' },
        ],
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
        children: [
          {
            title: '\u6027\u522B',
            key: 'sex',
          },
          {
            title: '\u5E74\u9F84',
            width: '300px',
            totalRow: '\u7EDF\u8BA1',
            key: 'age',
          },
        ],
      },
    ]

    const dataSource29 = [
      {
        id: '1',
        username: '\u5C31\u7720\u5100\u5F0F',
        province: '\u5C71\u4E1C',
        city: '\u6D4E\u5357',
        area: '\u9AD8\u65B0\u533A',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        id: '2',
        username: '\u5C31\u7720\u5100\u5F0F',
        province: '\u5C71\u4E1C',
        city: '\u6D4E\u5357',
        area: '\u9AD8\u65B0\u533A',
        password: 'root',
        sex: '\u7537',
        age: '18',
        remark: 'weView',
      },
      {
        id: '3',
        username: '\u5C31\u7720\u5100\u5F0F',
        province: '\u5C71\u4E1C',
        city: '\u6D4E\u5357',
        area: '\u9AD8\u65B0\u533A',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        id: '4',
        username: '\u5C31\u7720\u5100\u5F0F',
        province: '\u5C71\u4E1C',
        city: '\u6D4E\u5357',
        area: '\u9AD8\u65B0\u533A',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
      {
        id: '5',
        username: '\u5C31\u7720\u5100\u5F0F',
        province: '\u5C71\u4E1C',
        city: '\u6D4E\u5357',
        area: '\u9AD8\u65B0\u533A',
        password: 'woow',
        sex: '\u7537',
        age: '20',
        remark: 'weView',
      },
    ]

    return {
      columns29,
      dataSource29,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
</style>
`},{description:p(()=>[ls]),highlight:p(()=>[us]),default:p(()=>[y(B)]),_:1}),rs,ks,y(t,{sourceCode:`<template>
  <button class="load-btn" @click="loadData">\u52A0\u8F7D\u6570\u636E</button>
  <wv-table
    :columns="columns30"
    :data-source="dataSource30"
    :loading="loading"
  ></wv-table>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const loading = ref(false)

    const columns30 = [
      {
        title: '\u540D\u79F0',
        width: '200px',
        key: 'username',
      },
      {
        title: '\u5730\u5740',
        key: 'address',
        children: [
          { title: '\u7701', key: 'province', width: '300px' },
          { title: '\u5E02', key: 'city', width: '300px' },
          {
            title: '\u533A',
            children: [
              { title: '\u53BF', key: 'xian', width: '100px' },
              { title: '\u6751', key: 'cun', width: '100px' },
            ],
          },
        ],
      },
      {
        title: '\u6027\u522B',
        key: 'sex',
      },
      {
        title: '\u5E74\u9F84',
        width: '300px',
        key: 'age',
      },
      {
        title: '\u5907\u6CE8',
        width: '180px',
        key: 'remark',
        ellipsisTooltip: true,
      },
    ]

    const dataSource30 = ref([])

    const loadData = () => {
      loading.value = true
      setTimeout(() => {
        dataSource30.value = [
          {
            id: '1',
            username: '\u5C31\u7720\u5100\u5F0F',
            province: '\u5C71\u4E1C',
            city: '\u6D4E\u5357',
            area: '\u9AD8\u65B0\u533A',
            password: 'root',
            sex: '\u7537',
            age: '18',
            remark: 'weView',
            xian: '1',
            cun: '2',
          },
          {
            id: '2',
            username: '\u5C31\u7720\u5100\u5F0F',
            province: '\u5C71\u4E1C',
            city: '\u6D4E\u5357',
            area: '\u9AD8\u65B0\u533A',
            password: 'root',
            sex: '\u7537',
            age: '18',
            remark: 'weView',
            xian: '1',
            cun: '2',
          },
          {
            id: '3',
            username: '\u5C31\u7720\u5100\u5F0F',
            province: '\u5C71\u4E1C',
            city: '\u6D4E\u5357',
            area: '\u9AD8\u65B0\u533A',
            password: 'woow',
            sex: '\u7537',
            age: '20',
            remark: 'weView',
            xian: '1',
            cun: '2',
          },
          {
            id: '4',
            username: '\u5C31\u7720\u5100\u5F0F',
            province: '\u5C71\u4E1C',
            city: '\u6D4E\u5357',
            area: '\u9AD8\u65B0\u533A',
            password: 'woow',
            sex: '\u7537',
            age: '20',
            remark: 'weView',
            xian: '1',
            cun: '2',
          },
          {
            id: '5',
            username: '\u5C31\u7720\u5100\u5F0F',
            province: '\u5C71\u4E1C',
            city: '\u6D4E\u5357',
            area: '\u9AD8\u65B0\u533A',
            password: 'woow',
            sex: '\u7537',
            age: '20',
            remark: 'weView',
            xian: '1',
            cun: '2',
          },
        ]
        loading.value = false
      }, 2000)
    }

    return {
      loading,
      loadData,
      columns30,
      dataSource30,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
.load-btn {
  margin: 0 1em 1em 0;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.2em;
  background: #1e9fff;
  color: white;
  cursor: pointer;
}
</style>
`},{description:p(()=>[is]),highlight:p(()=>[ds]),default:p(()=>[y(K)]),_:1}),ys,gs,y(t,{sourceCode:`<template>
  <wv-table
    id="id"
    :max-height="maxHeight5"
    :columns="columns5"
    :expand-index="1"
    :data-source="dataSource5"
    :checkbox="checkbox5"
    :page="page5"
    :default-toolbar="defaultToolbar5"
    v-model:selected-keys="selectedKeys5"
    @row="rowClick5"
    @change="change555"
  >
    <template #toolbar>
      <button class="btn" style="background: #1AAD19">\u65B0\u589E</button>
      <button class="btn">\u5220\u9664</button>
    </template>
    <template #name="{ row, column, rowIndex, columnIndex }">
      {{ row.name }}
    </template>
    <template #name-title>\u{1F60A}</template>
    <template #operator="{ row }">
      <button class="btn2" style="background: #1e9fff">\u4FEE\u6539</button>
      <button class="btn2">\u5220\u9664</button>
    </template>
  </wv-table>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup() {
    const selectedKeys5 = ref(['1'])
    const checkbox5 = ref(true)
    const defaultToolbar5 = ref(['export', 'print', 'filter'])
    const maxHeight5 = ref('600px')

    const page5 = {
      total: 100,
      limit: 10,
      current: 1,
    }

    const columns5 = ref([])

    const change555 = function (page) {
      console.log(JSON.stringify(page))
    }

    setTimeout(() => {
      columns5.value = [
        {
          title: '\u5E8F\u53F7',
          key: 'index',
          fixed: 'left',
          type: 'checkbox',
          width: '50px',
        },
        {
          title: '\u59D3\u540D',
          fixed: 'left',
          width: '200px',
          titleSlot: 'name-title',
          customSlot: 'name',
          key: 'name',
          align: 'left',
        },
        {
          title: '\u5E74\u9F84',
          width: '300px',
          key: 'age',
          ellipsisTooltip: true,
        },
        {
          title: '\u5907\u6CE8',
          width: '300px',
          key: 'remark',
          ellipsisTooltip: true,
        },
        {
          title: '\u64CD\u4F5C',
          width: '150px',
          fixed: 'right',
          customSlot: 'operator',
          key: 'operator',
        },
      ]
    }, 2000)

    const dataSource5 = [
      {
        id: '1',
        name: '\u5C0F\u660E',
        age: '18',
        remark:
          'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002',
      },
      {
        id: '2',
        name: '\u5C0F\u7EA2',
        age: '20',
        remark:
          'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002',
      },
      {
        id: '3',
        name: '\u5C0F\u521A',
        age: '20',
        remark:
          'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002',
      },
      {
        id: '4',
        name: '\u5C0F\u674E',
        age: '20',
        remark:
          'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002',
      },
      {
        id: '5',
        name: '\u5C0F\u67CF',
        age: '20',
        remark:
          'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002',
      },
      {
        id: '6',
        name: '\u5C0F\u5409',
        age: '20',
        remark:
          'weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002weView - \u662F\u4E00\u4E2A\u4EFFelement-plus\u7684\u7EC4\u4EF6\u5E93\u3002',
      },
    ]

    const rowClick5 = function (data) {
      console.log(JSON.stringify(data))
    }

    const rowDoubleClick5 = function (data) {
      console.log(JSON.stringify(data))
    }

    watch(selectedKeys5, () => {
      console.log('\u590D\u9009\u6846\u76D1\u542C:' + selectedKeys5.value)
    })

    return {
      maxHeight5,
      columns5,
      dataSource5,
      selectedKeys5,
      checkbox5,
      defaultToolbar5,
      rowClick5,
      rowDoubleClick5,
      page5,
      change555,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.wv-table {
  display: table;
}
.btn {
  margin: 0 1em 1em 0;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.2em;
  background: orangered;
  color: white;
  cursor: pointer;
}
.btn2 {
  margin-right: 0.5em;
  border: 0;
  border-radius: 0.2em;
  background: orangered;
  color: white;
  cursor: pointer;
}
.wv-table-view .wv-table-page {
  box-sizing: content-box;
  padding: 7px 0;
}
</style>
`},{description:p(()=>[ms]),highlight:p(()=>[ws]),default:p(()=>[y(N)]),_:1})])}var vs=I(P,[["render",Es]]);export{hs as __pageData,vs as default};
