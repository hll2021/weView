import{_ as D,c as h,a as k,w as s,b as u,d as a,r as E,o as C,V as F}from"./app.41a73a12.js";const B={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:c,openBlock:p,createElementBlock:l}=F;function i(n,e){const t=o("DateTimePicker");return p(),l("div",null,[c(t,{modelValue:n.DateTimeValue,"onUpdate:modelValue":[e[0]||(e[0]=m=>n.DateTimeValue=m),n.updateDate]},null,8,["modelValue","onUpdate:modelValue"])])}const{ref:r}=F;return{render:i,...{setup(){let n=r("");return{DateTimeValue:n,updateDate:t=>{n.value=t}}}}}}()}},y='{"title":"DateTimePicker \u65E5\u671F\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"}],"relativePath":"components/DateTimePicker/index.md"}',v=u("h1",{id:"datetimepicker-\u65E5\u671F\u9009\u62E9\u5668",tabindex:"-1"},[a("DateTimePicker \u65E5\u671F\u9009\u62E9\u5668 "),u("a",{class:"header-anchor",href:"#datetimepicker-\u65E5\u671F\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),_=u("div",null,"DateTimePicker \u65E5\u671F\u9009\u62E9\u5668",-1),f=u("div",{class:"language-vue"},[u("pre",null,[u("code",null,[u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),a("template")]),u("span",{class:"token punctuation"},">")]),a(`
  `),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),a("DateTimePicker")]),a(),u("span",{class:"token attr-name"},"v-model"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),a("DateTimeValue"),u("span",{class:"token punctuation"},'"')]),a(),u("span",{class:"token attr-name"},[u("span",{class:"token namespace"},"@update:"),a("model-value")]),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),a("updateDate"),u("span",{class:"token punctuation"},'"')]),a(),u("span",{class:"token punctuation"},"/>")]),a(`
`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),a("template")]),u("span",{class:"token punctuation"},">")]),a(`

`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),a("script")]),u("span",{class:"token punctuation"},">")]),u("span",{class:"token script"},[u("span",{class:"token language-javascript"},[a(`
`),u("span",{class:"token keyword"},"import"),a(),u("span",{class:"token punctuation"},"{"),a(" ref "),u("span",{class:"token punctuation"},"}"),a(),u("span",{class:"token keyword"},"from"),a(),u("span",{class:"token string"},"'vue'"),a(`
`),u("span",{class:"token keyword"},"export"),a(),u("span",{class:"token keyword"},"default"),a(),u("span",{class:"token punctuation"},"{"),a(`
  `),u("span",{class:"token function"},"setup"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),a(),u("span",{class:"token punctuation"},"{"),a(`
    `),u("span",{class:"token keyword"},"let"),a(" DateTimeValue "),u("span",{class:"token operator"},"="),a(),u("span",{class:"token function"},"ref"),u("span",{class:"token punctuation"},"("),u("span",{class:"token string"},"''"),u("span",{class:"token punctuation"},")"),a(`
    `),u("span",{class:"token keyword"},"const"),a(),u("span",{class:"token function-variable function"},"updateDate"),a(),u("span",{class:"token operator"},"="),a(),u("span",{class:"token punctuation"},"("),u("span",{class:"token parameter"},"val"),u("span",{class:"token punctuation"},")"),a(),u("span",{class:"token operator"},"=>"),a(),u("span",{class:"token punctuation"},"{"),a(`
      DateTimeValue`),u("span",{class:"token punctuation"},"."),a("value "),u("span",{class:"token operator"},"="),a(` val
    `),u("span",{class:"token punctuation"},"}"),a(`
    `),u("span",{class:"token keyword"},"return"),a(),u("span",{class:"token punctuation"},"{"),a(`
      DateTimeValue`),u("span",{class:"token punctuation"},","),a(`
      updateDate`),u("span",{class:"token punctuation"},","),a(`
    `),u("span",{class:"token punctuation"},"}"),a(`
  `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),a(`
`),u("span",{class:"token punctuation"},"}"),a(`
`)])]),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),a("script")]),u("span",{class:"token punctuation"},">")]),a(`
`),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),a("style")]),a(),u("span",{class:"token attr-name"},"lang"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),a("scss"),u("span",{class:"token punctuation"},'"')]),a(),u("span",{class:"token attr-name"},"scoped"),u("span",{class:"token punctuation"},">")]),u("span",{class:"token style"}),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),a("style")]),u("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),g=u("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[a("\u4ECB\u7ECD "),u("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#")],-1),V=u("div",{class:"tip custom-block"},[u("p",{class:"custom-block-title"},"TIP"),u("hr"),u("h4",{id:"\u529F\u80FD",tabindex:"-1"},[a("\u529F\u80FD "),u("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#")]),u("p",null,"\u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668\u6765\u81EA\u65E5\u671F\u9009\u62E9\u5668\u548C\u65F6\u95F4\u9009\u62E9\u5668\u7684\u7EC4\u5408,\u7528\u4E8E\u5728\u540C\u4E00\u4E2A\u9009\u62E9\u5668\u91CC\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4"),u("hr"),u("h4",{id:"\u5C5E\u6027",tabindex:"-1"},[a("\u5C5E\u6027 "),u("a",{class:"header-anchor",href:"#\u5C5E\u6027","aria-hidden":"true"},"#")]),u("p",null,"\u8BBE\u7F6E v-model \u5373\u53EF\u83B7\u53D6\u5230\u9009\u62E9\u5668\u4E2D\u6240\u9009\u62E9\u7684\u503C"),u("hr"),u("h4",{id:"\u4F7F\u7528\u4ECB\u7ECD",tabindex:"-1"},[a("\u4F7F\u7528\u4ECB\u7ECD "),u("a",{class:"header-anchor",href:"#\u4F7F\u7528\u4ECB\u7ECD","aria-hidden":"true"},"#")]),u("h5",{id:"\u65E5\u671F\u9009\u62E9\u5668",tabindex:"-1"},[a("\u65E5\u671F\u9009\u62E9\u5668 "),u("a",{class:"header-anchor",href:"#\u65E5\u671F\u9009\u62E9\u5668","aria-hidden":"true"},"#")]),u("p",null,"\u65E5\u671F\u9009\u62E9\u5668\u9ED8\u8BA4\u663E\u793A\u5F53\u524D\u65E5\u671F\u3002\u9009\u62E9\u5B8C\u65E5\u671F\u540E\uFF0Cinput \u5185\u6570\u503C\u56DE\u53D8\u5316\uFF0C\u5982\u679C\u70B9\u51FB\u786E\u5B9A\u5373\u53EF\u6210\u529F\u9009\u62E9\uFF0C\u70B9\u51FB\u53D6\u6D88\u5219\u8FD4\u56DE\u9009\u62E9\u524D\u7684\u65E5\u671F\u3002"),u("h5",{id:"\u65F6\u95F4\u9009\u62E9\u5668",tabindex:"-1"},[a("\u65F6\u95F4\u9009\u62E9\u5668 "),u("a",{class:"header-anchor",href:"#\u65F6\u95F4\u9009\u62E9\u5668","aria-hidden":"true"},"#")]),u("p",null,"\u53F3\u4E0A\u89D2\u6846\u4E3A\u65F6\u95F4\u9009\u62E9\u5668\u3002\u65F6\u95F4\u9009\u62E9\u5668\u9ED8\u8BA4\u663E\u793A\u5F53\u524D\u65F6\u95F4\u3002\u9009\u62E9\u5B8C\u65F6\u95F4\u540E\u70B9\u51FB\u786E\u5B9A\u5373\u53EF\u6210\u529F\u9009\u62E9\uFF1B\u82E5\u70B9\u51FB\u53D6\u6D88\uFF0C\u5219\u65F6\u95F4\u53D8\u56DE\u9009\u62E9\u524D\u7684\u65F6\u95F4\u3002")],-1);function T(o,c,p,l,i,r){const d=E("render-demo-0"),n=E("demo");return C(),h("div",null,[v,k(n,{sourceCode:`<template>
  <DateTimePicker v-model="DateTimeValue" @update:model-value="updateDate" />
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let DateTimeValue = ref('')
    const updateDate = (val) => {
      DateTimeValue.value = val
    }
    return {
      DateTimeValue,
      updateDate,
    }
  },
}
<\/script>
<style lang="scss" scoped></style>
`},{description:s(()=>[_]),highlight:s(()=>[f]),default:s(()=>[k(d),g,V]),_:1})])}var b=D(B,[["render",T]]);export{y as __pageData,b as default};
