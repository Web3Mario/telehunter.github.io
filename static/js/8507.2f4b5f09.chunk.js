"use strict";(self.webpackChunkHelloPayFrontend=self.webpackChunkHelloPayFrontend||[]).push([[8507],{88507:(e,a,t)=>{t.d(a,{offchainLookup:()=>g,offchainLookupSignature:()=>y});var r=t(9357),s=t(23512),n=t(11370),o=t(14094);class c extends n.C{constructor(e){var a;let{callbackSelector:t,cause:r,data:s,extraData:n,sender:c,urls:l}=e;super(r.shortMessage||"An error occurred while fetching for an offchain result.",{cause:r,metaMessages:[...r.metaMessages||[],null!==(a=r.metaMessages)&&void 0!==a&&a.length?"":[],"Offchain Gateway Call:",l&&["  Gateway URL(s):",...l.map((e=>"    ".concat((0,o.ID)(e))))],"  Sender: ".concat(c),"  Data: ".concat(s),"  Callback selector: ".concat(t),"  Extra data: ".concat(n)].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class l extends n.C{constructor(e){let{result:a,url:t}=e;super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:["Gateway URL: ".concat((0,o.ID)(t)),"Response: ".concat((0,s.A)(a))]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class d extends n.C{constructor(e){let{sender:a,to:t}=e;super("Reverted sender address does not match target contract address (`to`).",{metaMessages:["Contract address: ".concat(t),"OffchainLookup sender address: ".concat(a)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var u=t(72494),i=t(74745),f=t(31376),h=t(3491),p=t(74074);var b=t(52620),w=t(31499);const y="0x556f1830",m={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function g(e,a){let{blockNumber:t,blockTag:n,data:o,to:y}=a;const{args:g}=(0,i.W)({data:o,abi:[m]}),[k,v,C,O,x]=g;try{if(!function(e,a){if(!(0,p.P)(e))throw new h.M({address:e});if(!(0,p.P)(a))throw new h.M({address:a});return e.toLowerCase()===a.toLowerCase()}(y,k))throw new d({sender:k,to:y});const a=await async function(e){let{data:a,sender:t,urls:r}=e,n=new Error("An unknown error occurred.");for(let i=0;i<r.length;i++){const e=r[i],f=e.includes("{data}")?"GET":"POST",h="POST"===f?{data:a,sender:t}:void 0;try{var o;const r=await fetch(e.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(h),method:f});let d;if(d=null!==(o=r.headers.get("Content-Type"))&&void 0!==o&&o.startsWith("application/json")?(await r.json()).data:await r.text(),!r.ok){var c;n=new u.Ci({body:h,details:null!==(c=d)&&void 0!==c&&c.error?(0,s.A)(d.error):r.statusText,headers:r.headers,status:r.status,url:e});continue}if(!(0,w.q)(d)){n=new l({result:d,url:e});continue}return d}catch(d){n=new u.Ci({body:h,details:d.message,url:e})}}throw n}({data:C,sender:k,urls:v}),{data:o}=await(0,r.T)(e,{blockNumber:t,blockTag:n,data:(0,b.xW)([O,(0,f.h)([{type:"bytes"},{type:"bytes"}],[a,x])]),to:y});return o}catch(L){throw new c({callbackSelector:O,cause:L,data:o,extraData:x,sender:k,urls:v})}}}}]);
//# sourceMappingURL=8507.2f4b5f09.chunk.js.map