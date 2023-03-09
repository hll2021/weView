import{_ as B,c as b,a as m,w as u,e as y,b as n,d as t,r as v,o as C,V as g}from"./app.f3c61136.js";const _={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:l,openBlock:i,createElementBlock:r}=g;function k(a,e){const s=p("Pagination");return i(),r("div",null,[l(s,{modelValue:a.currentPage,"onUpdate:modelValue":e[0]||(e[0]=c=>a.currentPage=c),limit:a.limit,total:a.total,"show-page":!0},null,8,["modelValue","limit","total"])])}const{ref:o}=g;return{render:k,...{setup(){const a=o(20),e=o(100),s=o(2);return{limit:a,total:e,currentPage:s}}}}}(),"render-demo-1":function(){const{resolveComponent:p,createVNode:l,openBlock:i,createElementBlock:r}=g;function k(a,e){const s=p("Pagination");return i(),r("div",null,[l(s,{limit:a.limit1,modelValue:a.current1,"onUpdate:modelValue":e[0]||(e[0]=c=>a.current1=c),total:a.total1},null,8,["limit","modelValue","total"])])}const{ref:o}=g;return{render:k,...{setup(){const a=o(10),e=o(100),s=o(1);return{limit1:a,total1:e,current1:s}}}}}(),"render-demo-2":function(){const{resolveComponent:p,createVNode:l,openBlock:i,createElementBlock:r}=g;function k(a,e){const s=p("Pagination");return i(),r("div",null,[l(s,{limit:a.limit2,total:a.total2,"show-page":!0,theme:"orange"},null,8,["limit","total"])])}const{ref:o}=g;return{render:k,...{setup(){const a=o(20),e=o(100);return{limit2:a,total2:e}}}}}(),"render-demo-3":function(){const{resolveComponent:p,createVNode:l,openBlock:i,createElementBlock:r}=g;function k(a,e){const s=p("Pagination");return i(),r("div",null,[l(s,{limit:a.limit3,total:a.total3,showCount:"",showPage:"",limits:a.limits3},null,8,["limit","total","limits"])])}const{ref:o}=g;return{render:k,...{setup(){const a=o(5),e=o(125),s=o([5,10,50,100,200]);return{limit3:a,total3:e,limits3:s}}}}}(),"render-demo-4":function(){const{resolveComponent:p,createVNode:l,openBlock:i,createElementBlock:r}=g;function k(a,e){const s=p("Pagination");return i(),r("div",null,[l(s,{limit:a.limit4,total:a.total4,onChange:a.change4,"show-page":!0},null,8,["limit","total","onChange"])])}const{ref:o}=g;return{render:k,...{setup(){const a=o(20),e=o(100);return{limit4:a,total4:e,change4:({current:c,limit:f})=>{alert("current:"+c+" limit:"+f)}}}}}}(),"render-demo-5":function(){const{toDisplayString:p,createElementVNode:l,resolveComponent:i,createVNode:r,openBlock:k,createElementBlock:o}=g;function h(s,c){const f=i("Pagination");return k(),o("div",null,[l("button",{class:"btn",onClick:c[0]||(c[0]=(...d)=>s.changeCurrent5&&s.changeCurrent5(...d))}," update model "+p(s.current5),1),l("button",{class:"btn",onClick:c[1]||(c[1]=(...d)=>s.changeLimit5&&s.changeLimit5(...d))},"update limit "+p(s.limit5),1),r(f,{modelValue:s.current5,"onUpdate:modelValue":c[2]||(c[2]=d=>s.current5=d),limit:s.limit5,"onUpdate:limit":c[3]||(c[3]=d=>s.limit5=d),pages:s.pages5,total:s.total5,"show-count":!0,"show-page":!0,"show-limit":!0,"show-refresh":!0,showSkip:!0,onChange:s.change5},null,8,["modelValue","limit","pages","total","onChange"])])}const{ref:a}=g;return{render:h,...{setup(){const s=a(10),c=a(99),f=a(7),d=a(1);return{limit5:s,total5:c,pages5:f,current5:d,changeCurrent5:()=>{d.value=2},changeLimit5:()=>{s.value=20},change5:({current:F,limit:E})=>{console.log("current:"+F+" limit:"+E)}}}}}}()}},M='{"title":"Pagination \u5206\u9875","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":3,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":3,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":3,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":3,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u57FA\u7840\u4F7F\u7528","slug":"\u57FA\u7840\u4F7F\u7528"},{"level":3,"title":"\u7B80\u6D01\u6A21\u5F0F","slug":"\u7B80\u6D01\u6A21\u5F0F"},{"level":3,"title":"\u8BBE\u7F6E\u4E3B\u9898","slug":"\u8BBE\u7F6E\u4E3B\u9898"},{"level":3,"title":"\u5206\u9875\u5BB9\u91CF","slug":"\u5206\u9875\u5BB9\u91CF"},{"level":3,"title":"\u56DE\u8C03\u4E8B\u4EF6","slug":"\u56DE\u8C03\u4E8B\u4EF6"},{"level":3,"title":"\u5B8C\u6574\u5206\u9875","slug":"\u5B8C\u6574\u5206\u9875"}],"relativePath":"components/Pagination/index.md"}',w=y('<h1 id="pagination-\u5206\u9875" tabindex="-1">Pagination \u5206\u9875 <a class="header-anchor" href="#pagination-\u5206\u9875" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><hr><h3 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h3><p>\u63D0\u4F9B\u6781\u81F4\u7684\u5206\u9875\u903B\u8F91\uFF0C\u65E2\u53EF\u8F7B\u677E\u80DC\u4EFB\u5F02\u6B65\u5206\u9875\uFF0C\u4E5F\u53EF\u4F5C\u4E3A\u9875\u9762\u5237\u65B0\u5F0F\u5206\u9875\u3002</p><h3 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u9875</td><td>--</td></tr><tr><td>limit</td><td>\u6BCF\u9875\u6570\u91CF</td><td>--</td></tr><tr><td>total</td><td>\u603B\u6761\u6570</td><td>--</td></tr><tr><td>showCount</td><td>\u663E\u793A\u603B\u6570</td><td><code>false</code></td></tr><tr><td>showPage</td><td>\u663E\u793A\u6BCF\u9875</td><td><code>false</code></td></tr><tr><td>showLimit</td><td>\u663E\u793A\u6BCF\u9875\u6570\u91CF</td><td><code>false</code></td></tr><tr><td>showRefresh</td><td>\u663E\u793A\u5237\u65B0\u6309\u94AE</td><td><code>false</code></td></tr><tr><td>showSkip</td><td>\u663E\u793A\u8DF3\u8F6C</td><td><code>false</code></td></tr><tr><td>pages</td><td>\u663E\u793A\u5207\u9875\u6309\u94AE\u6570\u91CF</td><td><code>10</code></td></tr><tr><td>limits</td><td>\u5207\u6362\u6BCF\u9875\u6570\u91CF\u7684\u9009\u62E9\u9879</td><td><code>[10,20,30,40,50]</code></td></tr><tr><td>theme</td><td>\u4E3B\u9898\u8272</td><td><code>blue</code></td></tr></tbody></table><h3 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>jump</td><td>\u5207\u6362\u56DE\u8C03</td><td><code>{ current: \u5F53\u524D\u9875\u9762 } </code></td></tr><tr><td>limit</td><td>\u6BCF\u9875\u6570\u91CF\u53D8\u5316</td><td>\u53D8\u5316\u540E\u7684\u503C</td></tr><tr><td>change</td><td>\u5206\u9875\u4E8B\u4EF6</td><td><code>{ current: \u5F53\u524D\u9875\u7801, limit: \u6BCF\u9875\u6570\u91CF }</code></td></tr></tbody></table><h3 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD</th><th>\u63CF\u8FF0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prev</td><td>\u4E0A\u4E00\u9875</td><td>\u4E0A\u4E00\u9875</td></tr><tr><td>next</td><td>\u4E0B\u4E00\u9875</td><td>\u4E0B\u4E00\u9875</td></tr></tbody></table></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1">\u57FA\u7840\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a></h3>',5),P=n("div",null,"\u57FA\u7840\u4F7F\u7528",-1),x=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Pagination")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("currentPage"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":limit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("limit"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("total"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":show-page"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" limit "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" total "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" currentPage "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      limit`),n("span",{class:"token punctuation"},","),t(`
      total`),n("span",{class:"token punctuation"},","),t(`
      currentPage`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".pager-em"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),t(" content-box"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),D=n("h3",{id:"\u7B80\u6D01\u6A21\u5F0F",tabindex:"-1"},[t("\u7B80\u6D01\u6A21\u5F0F "),n("a",{class:"header-anchor",href:"#\u7B80\u6D01\u6A21\u5F0F","aria-hidden":"true"},"#")],-1),q=n("div",null,"\u7B80\u6D01\u6A21\u5F0F",-1),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Pagination")]),t(),n("span",{class:"token attr-name"},":limit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("limit1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("current1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("total1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Pagination")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" limit1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" total1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" current1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      limit1`),n("span",{class:"token punctuation"},","),t(`
      total1`),n("span",{class:"token punctuation"},","),t(`
      current1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".pager-em"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),t(" content-box"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),A=n("h3",{id:"\u8BBE\u7F6E\u4E3B\u9898",tabindex:"-1"},[t("\u8BBE\u7F6E\u4E3B\u9898 "),n("a",{class:"header-anchor",href:"#\u8BBE\u7F6E\u4E3B\u9898","aria-hidden":"true"},"#")],-1),N=n("div",null,"\u8BBE\u7F6E\u4E3B\u9898",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Pagination")]),t(`
    `),n("span",{class:"token attr-name"},":limit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("limit2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("total2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":show-page"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"theme"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("orange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Pagination")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" limit2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" total2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      limit2`),n("span",{class:"token punctuation"},","),t(`
      total2`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".pager-em"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),t(" content-box"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),L=n("h3",{id:"\u5206\u9875\u5BB9\u91CF",tabindex:"-1"},[t("\u5206\u9875\u5BB9\u91CF "),n("a",{class:"header-anchor",href:"#\u5206\u9875\u5BB9\u91CF","aria-hidden":"true"},"#")],-1),j=n("div",null,"\u5206\u9875\u5BB9\u91CF",-1),S=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Pagination")]),t(`
    `),n("span",{class:"token attr-name"},":limit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("limit3"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("total3"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"showCount"),t(`
    `),n("span",{class:"token attr-name"},"showPage"),t(`
    `),n("span",{class:"token attr-name"},":limits"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("limits3"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Pagination")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" limit3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" total3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"125"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" limits3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      limit3`),n("span",{class:"token punctuation"},","),t(`
      total3`),n("span",{class:"token punctuation"},","),t(`
      limits3`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".pager-em"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),t(" content-box"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),U=n("h3",{id:"\u56DE\u8C03\u4E8B\u4EF6",tabindex:"-1"},[t("\u56DE\u8C03\u4E8B\u4EF6 "),n("a",{class:"header-anchor",href:"#\u56DE\u8C03\u4E8B\u4EF6","aria-hidden":"true"},"#")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Pagination")]),t(`
    `),n("span",{class:"token attr-name"},":limit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("limit4"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("total4"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("change4"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":show-page"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Pagination")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" limit4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" total4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"change4"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" current"),n("span",{class:"token punctuation"},","),t(" limit "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'current:'"),t(),n("span",{class:"token operator"},"+"),t(" current "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"' limit:'"),t(),n("span",{class:"token operator"},"+"),t(" limit"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      limit4`),n("span",{class:"token punctuation"},","),t(`
      total4`),n("span",{class:"token punctuation"},","),t(`
      change4`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".pager-em"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),t(" content-box"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h3",{id:"\u5B8C\u6574\u5206\u9875",tabindex:"-1"},[t("\u5B8C\u6574\u5206\u9875 "),n("a",{class:"header-anchor",href:"#\u5B8C\u6574\u5206\u9875","aria-hidden":"true"},"#")],-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("btn"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("changeCurrent5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    update model {{ current5 }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("btn"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("changeLimit5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("update limit {{ limit5 }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Pagination")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("current5"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("limit")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("limit5"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":pages"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pages5"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("total5"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":show-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":show-page"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":show-limit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":show-refresh"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":showSkip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("change5"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Pagination")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" limit5 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" total5 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"99"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" pages5 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" current5 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"changeCurrent5"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      current5`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"2"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"changeLimit5"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      limit5`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"20"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"change5"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" current"),n("span",{class:"token punctuation"},","),t(" limit "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'current:'"),t(),n("span",{class:"token operator"},"+"),t(" current "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token string"},"' limit:'"),t(),n("span",{class:"token operator"},"+"),t(" limit"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      limit5`),n("span",{class:"token punctuation"},","),t(`
      total5`),n("span",{class:"token punctuation"},","),t(`
      pages5`),n("span",{class:"token punctuation"},","),t(`
      current5`),n("span",{class:"token punctuation"},","),t(`
      changeCurrent5`),n("span",{class:"token punctuation"},","),t(`
      changeLimit5`),n("span",{class:"token punctuation"},","),t(`
      change5`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".pager-em"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),t(" content-box"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".btn"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 1em"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 0.5em 1em"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 0.2em"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(" orangered"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" white"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function R(p,l,i,r,k,o){const h=v("render-demo-0"),a=v("demo"),e=v("render-demo-1"),s=v("render-demo-2"),c=v("render-demo-3"),f=v("render-demo-4"),d=v("render-demo-5");return C(),b("div",null,[w,m(a,{sourceCode:`<template>
  <Pagination
    v-model="currentPage"
    :limit="limit"
    :total="total"
    :show-page="true"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit = ref(20)
    const total = ref(100)
    const currentPage = ref(2)

    return {
      limit,
      total,
      currentPage,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
</style>
`},{description:u(()=>[P]),highlight:u(()=>[x]),default:u(()=>[m(h)]),_:1}),D,m(a,{sourceCode:`<template>
  <Pagination :limit="limit1" v-model="current1" :total="total1"></Pagination>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit1 = ref(10)
    const total1 = ref(100)
    const current1 = ref(1)

    return {
      limit1,
      total1,
      current1,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
</style>
`},{description:u(()=>[q]),highlight:u(()=>[V]),default:u(()=>[m(e)]),_:1}),A,m(a,{sourceCode:`<template>
  <Pagination
    :limit="limit2"
    :total="total2"
    :show-page="true"
    theme="orange"
  ></Pagination>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit2 = ref(20)
    const total2 = ref(100)

    return {
      limit2,
      total2,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
</style>
`},{description:u(()=>[N]),highlight:u(()=>[z]),default:u(()=>[m(s)]),_:1}),L,m(a,{sourceCode:`<template>
  <Pagination
    :limit="limit3"
    :total="total3"
    showCount
    showPage
    :limits="limits3"
  ></Pagination>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit3 = ref(5)
    const total3 = ref(125)
    const limits3 = ref([5, 10, 50, 100, 200])

    return {
      limit3,
      total3,
      limits3,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
</style>
`},{description:u(()=>[j]),highlight:u(()=>[S]),default:u(()=>[m(c)]),_:1}),U,m(a,{sourceCode:`<template>
  <Pagination
    :limit="limit4"
    :total="total4"
    @change="change4"
    :show-page="true"
  ></Pagination>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit4 = ref(20)
    const total4 = ref(100)
    const change4 = ({ current, limit }) => {
      alert('current:' + current + ' limit:' + limit)
    }

    return {
      limit4,
      total4,
      change4,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
</style>
`},{highlight:u(()=>[$]),default:u(()=>[m(f)]),_:1}),T,m(a,{sourceCode:`<template>
  <button class="btn" @click="changeCurrent5">
    update model {{ current5 }}
  </button>
  <button class="btn" @click="changeLimit5">update limit {{ limit5 }}</button>
  <Pagination
    v-model="current5"
    v-model:limit="limit5"
    :pages="pages5"
    :total="total5"
    :show-count="true"
    :show-page="true"
    :show-limit="true"
    :show-refresh="true"
    :showSkip="true"
    @change="change5"
  ></Pagination>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const limit5 = ref(10)
    const total5 = ref(99)
    const pages5 = ref(7)
    const current5 = ref(1)
    const changeCurrent5 = () => {
      current5.value = 2
    }
    const changeLimit5 = () => {
      limit5.value = 20
    }
    const change5 = ({ current, limit }) => {
      console.log('current:' + current + ' limit:' + limit)
    }
    return {
      limit5,
      total5,
      pages5,
      current5,
      changeCurrent5,
      changeLimit5,
      change5,
    }
  },
}
<\/script>

<style lang="scss" scoped>
.pager-em {
  box-sizing: content-box;
}
.btn {
  margin-right: 1em;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.2em;
  background: orangered;
  color: white;
  cursor: pointer;
}
</style>
`},{highlight:u(()=>[I]),default:u(()=>[m(d)]),_:1})])}var O=B(_,[["render",R]]);export{M as __pageData,O as default};
