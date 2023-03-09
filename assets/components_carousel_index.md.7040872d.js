import{_ as n,c as s,o as a,e as t}from"./app.f3c61136.js";const d='{"title":"WVcarousel \u8F6E\u64AD\u56FE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"}],"relativePath":"components/carousel/index.md"}',p={},o=t(`<h1 id="wvcarousel-\u8F6E\u64AD\u56FE" tabindex="-1">WVcarousel \u8F6E\u64AD\u56FE <a class="header-anchor" href="#wvcarousel-\u8F6E\u64AD\u56FE" aria-hidden="true">#</a></h1><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u57FA\u7840\u7684\u51FD\u6570\u7528\u6CD5</p><div class="tip custom-block"><p class="custom-block-title">\u4F7F\u7528\u8F6E\u64AD\u56FE</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WVcarousel</span> <span class="token attr-name">:sliders</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WVcarousel</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;16&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">imgUrl</span><span class="token operator">:</span>
      <span class="token string">&#39;http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hrefUrl</span><span class="token operator">:</span> <span class="token string">&#39;/category/1005000&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;19&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">imgUrl</span><span class="token operator">:</span>
      <span class="token string">&#39;http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hrefUrl</span><span class="token operator">:</span> <span class="token string">&#39;/category/1013001&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;18&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">imgUrl</span><span class="token operator">:</span>
      <span class="token string">&#39;http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hrefUrl</span><span class="token operator">:</span> <span class="token string">&#39;/category/1013001&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">imgUrl</span><span class="token operator">:</span>
      <span class="token string">&#39;http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/e83efb1b-309c-46f7-98a3-f1fefa694338.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hrefUrl</span><span class="token operator">:</span> <span class="token string">&#39;/category/1005000&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">imgUrl</span><span class="token operator">:</span>
      <span class="token string">&#39;http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/4a79180a-1a5a-4042-8a77-4db0b9c800a8.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hrefUrl</span><span class="token operator">:</span> <span class="token string">&#39;/category/1019000&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      result
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></div>`,4),e=[o];function c(l,r,u,i,k,g){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{d as __pageData,f as default};
