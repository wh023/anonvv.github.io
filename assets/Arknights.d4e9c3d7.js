import{_ as _e}from"./plugin-vue_export-helper.21dcd24c.js";import{p as de,F as Ae,q as A,r as N,z as D,H as Z,I as M,J as Ne,T as $e,W as Pe,K as ee,a1 as Te}from"./framework.73e5ff7f.js";import{P as Ue}from"./Pagination.ff319eb5.js";var V={exports:{}},he=function(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}},Le=he,w=Object.prototype.toString;function W(r){return Array.isArray(r)}function J(r){return typeof r=="undefined"}function Be(r){return r!==null&&!J(r)&&r.constructor!==null&&!J(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function pe(r){return w.call(r)==="[object ArrayBuffer]"}function je(r){return w.call(r)==="[object FormData]"}function qe(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&pe(r.buffer),e}function De(r){return typeof r=="string"}function ke(r){return typeof r=="number"}function me(r){return r!==null&&typeof r=="object"}function $(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Ie(r){return w.call(r)==="[object Date]"}function Fe(r){return w.call(r)==="[object File]"}function He(r){return w.call(r)==="[object Blob]"}function ve(r){return w.call(r)==="[object Function]"}function Me(r){return me(r)&&ve(r.pipe)}function Je(r){return w.call(r)==="[object URLSearchParams]"}function ze(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Ve(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function X(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),W(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function z(){var r={};function e(n,s){$(r[s])&&$(n)?r[s]=z(r[s],n):$(n)?r[s]=z({},n):W(n)?r[s]=n.slice():r[s]=n}for(var t=0,a=arguments.length;t<a;t++)X(arguments[t],e);return r}function We(r,e,t){return X(e,function(n,s){t&&typeof n=="function"?r[s]=Le(n,t):r[s]=n}),r}function Xe(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:W,isArrayBuffer:pe,isBuffer:Be,isFormData:je,isArrayBufferView:qe,isString:De,isNumber:ke,isObject:me,isPlainObject:$,isUndefined:J,isDate:Ie,isFile:Fe,isBlob:He,isFunction:ve,isStream:Me,isURLSearchParams:Je,isStandardBrowserEnv:Ve,forEach:X,merge:z,extend:We,trim:ze,stripBOM:Xe},S=h;function re(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ye=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(S.isURLSearchParams(t))n=t.toString();else{var s=[];S.forEach(t,function(l,m){l===null||typeof l=="undefined"||(S.isArray(l)?m=m+"[]":l=[l],S.forEach(l,function(f){S.isDate(f)?f=f.toISOString():S.isObject(f)&&(f=JSON.stringify(f)),s.push(re(m)+"="+re(f))}))}),n=s.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Ke=h;function T(){this.handlers=[]}T.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};T.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};T.prototype.forEach=function(e){Ke.forEach(this.handlers,function(a){a!==null&&e(a)})};var Ge=T,Ye=h,Qe=function(e,t){Ye.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})},be=function(e,t,a,n,s){return e.config=t,a&&(e.code=a),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Ze=be,we=function(e,t,a,n,s){var o=new Error(e);return Ze(o,t,a,n,s)},er=we,rr=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(er("Request failed with status code "+a.status,a.config,null,a.request,a))},R=h,tr=R.isStandardBrowserEnv()?function(){return{write:function(t,a,n,s,o,u){var l=[];l.push(t+"="+encodeURIComponent(a)),R.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),R.isString(s)&&l.push("path="+s),R.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),nr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},ar=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},sr=nr,ir=ar,or=function(e,t){return e&&!sr(t)?ir(e,t):t},k=h,ur=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],lr=function(e){var t={},a,n,s;return e&&k.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),a=k.trim(u.substr(0,s)).toLowerCase(),n=k.trim(u.substr(s+1)),a){if(t[a]&&ur.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},te=h,fr=te.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(s){var o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(o){var u=te.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function K(r){this.message=r}K.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};K.prototype.__CANCEL__=!0;var U=K,_=h,cr=rr,dr=tr,hr=ye,pr=or,mr=lr,vr=fr,I=we,yr=B,br=U,ne=function(e){return new Promise(function(a,n){var s=e.data,o=e.headers,u=e.responseType,l;function m(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}_.isFormData(s)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+y)}var d=pr(e.baseURL,e.url);i.open(e.method.toUpperCase(),hr(d,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function Y(){if(!!i){var v="getAllResponseHeaders"in i?mr(i.getAllResponseHeaders()):null,g=!u||u==="text"||u==="json"?i.responseText:i.response,E={data:g,status:i.status,statusText:i.statusText,headers:v,config:e,request:i};cr(function(q){a(q),m()},function(q){n(q),m()},E),i=null}}if("onloadend"in i?i.onloadend=Y:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(Y)},i.onabort=function(){!i||(n(I("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(I("Network Error",e,null,i)),i=null},i.ontimeout=function(){var g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",E=e.transitional||yr.transitional;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),n(I(g,e,E.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},_.isStandardBrowserEnv()){var Q=(e.withCredentials||vr(d))&&e.xsrfCookieName?dr.read(e.xsrfCookieName):void 0;Q&&(o[e.xsrfHeaderName]=Q)}"setRequestHeader"in i&&_.forEach(o,function(g,E){typeof s=="undefined"&&E.toLowerCase()==="content-type"?delete o[E]:i.setRequestHeader(E,g)}),_.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(v){!i||(n(!v||v&&v.type?new br("canceled"):v),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null),i.send(s)})},c=h,ae=Qe,wr=be,Er={"Content-Type":"application/x-www-form-urlencoded"};function se(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function gr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ne),r}function Sr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var L={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:gr(),transformRequest:[function(e,t){return ae(t,"Accept"),ae(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(se(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(se(t,"application/json"),Sr(e)):e}],transformResponse:[function(e){var t=this.transitional||L.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!a&&this.responseType==="json";if(s||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?wr(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){L.headers[e]={}});c.forEach(["post","put","patch"],function(e){L.headers[e]=c.merge(Er)});var B=L,Cr=h,xr=B,Or=function(e,t,a){var n=this||xr;return Cr.forEach(a,function(o){e=o.call(n,e,t)}),e},Ee=function(e){return!!(e&&e.__CANCEL__)},ie=h,F=Or,Rr=Ee,_r=B,Ar=U;function H(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Ar("canceled")}var Nr=function(e){H(e),e.headers=e.headers||{},e.data=F.call(e,e.data,e.headers,e.transformRequest),e.headers=ie.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ie.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||_r.adapter;return t(e).then(function(n){return H(e),n.data=F.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Rr(n)||(H(e),n&&n.response&&(n.response.data=F.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,ge=function(e,t){t=t||{};var a={};function n(i,f){return p.isPlainObject(i)&&p.isPlainObject(f)?p.merge(i,f):p.isPlainObject(f)?p.merge({},f):p.isArray(f)?f.slice():f}function s(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],t[i])}function o(i){if(!p.isUndefined(t[i]))return n(void 0,t[i])}function u(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,t[i])}function l(i){if(i in t)return n(e[i],t[i]);if(i in e)return n(void 0,e[i])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return p.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var y=m[f]||s,d=y(f);p.isUndefined(d)&&y!==l||(a[f]=d)}),a},Se={version:"0.25.0"},$r=Se.version,G={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){G[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var oe={};G.transitional=function(e,t,a){function n(s,o){return"[Axios v"+$r+"] Transitional option '"+s+"'"+o+(a?". "+a:"")}return function(s,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!oe[o]&&(oe[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,u):!0}};function Pr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var a=Object.keys(r),n=a.length;n-- >0;){var s=a[n],o=e[s];if(o){var u=r[s],l=u===void 0||o(u,s,r);if(l!==!0)throw new TypeError("option "+s+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+s)}}var Tr={assertOptions:Pr,validators:G},Ce=h,Ur=ye,ue=Ge,le=Nr,j=ge,xe=Tr,C=xe.validators;function O(r){this.defaults=r,this.interceptors={request:new ue,response:new ue}}O.prototype.request=function(e,t){if(typeof e=="string"?(t=t||{},t.url=e):t=e||{},!t.url)throw new Error("Provided config url is not valid");t=j(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&xe.assertOptions(a,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(t)===!1||(s=s&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!s){var l=[le,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var m=t;n.length;){var i=n.shift(),f=n.shift();try{m=i(m)}catch(y){f(y);break}}try{u=le(m)}catch(y){return Promise.reject(y)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};O.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=j(this.defaults,e),Ur(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Ce.forEach(["delete","get","head","options"],function(e){O.prototype[e]=function(t,a){return this.request(j(a||{},{method:e,url:t,data:(a||{}).data}))}});Ce.forEach(["post","put","patch"],function(e){O.prototype[e]=function(t,a,n){return this.request(j(n||{},{method:e,url:t,data:a}))}});var Lr=O,Br=U;function x(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,s=new Promise(function(o){t.subscribe(o),n=o}).then(a);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new Br(n),e(t.reason))})}x.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};x.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};x.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};x.source=function(){var e,t=new x(function(n){e=n});return{token:t,cancel:e}};var jr=x,qr=function(e){return function(a){return e.apply(null,a)}},Dr=h,kr=function(e){return Dr.isObject(e)&&e.isAxiosError===!0},fe=h,Ir=he,P=Lr,Fr=ge,Hr=B;function Oe(r){var e=new P(r),t=Ir(P.prototype.request,e);return fe.extend(t,P.prototype,e),fe.extend(t,e),t.create=function(n){return Oe(Fr(r,n))},t}var b=Oe(Hr);b.Axios=P;b.Cancel=U;b.CancelToken=jr;b.isCancel=Ee;b.VERSION=Se.version;b.all=function(e){return Promise.all(e)};b.spread=qr;b.isAxiosError=kr;V.exports=b;V.exports.default=b;var Mr=V.exports;function ce(r){return new Promise(e=>{Mr({...r}).then(t=>{t.status===200?e(t.data):(console.log("none status"),e(t))})})}const Jr={get(r,e){return ce({method:"GET",url:r,params:e})},post(r,e){return ce({method:"POST",url:r,data:e})}},zr="https://www.hualigs.cn/api/",Vr="06cb7cf8d438e5a599441bd3a0630d76";async function Wr(){const r={token:Vr,folder:2150};return await Jr.get(`${zr}imageList`,r)}const Xr=["title"],Kr=["src","alt"],Gr=de({__name:"ImgList",props:{data:{type:Array,defualt:()=>[]}},setup(r){const e=Ae(!1),t=()=>{e.value=!e.value};return(a,n)=>(A(),N(M,null,[D("i",{class:Z(`fa fa-${e.value?"th":"list"} toggle-btn`),onClick:t},null,2),D("ul",{class:Z(`img-list ${e.value?"":"small"}`)},[(A(!0),N(M,null,Ne(r.data,s=>(A(),N("li",{key:s.url.majorhua,title:s.filename},[D("img",{src:`https://s1.xptou.com/${s.url.majorhua}`,alt:s.filename},null,8,Kr)],8,Xr))),128))],2)],64))}});var Yr=_e(Gr,[["__scopeId","data-v-1fe65986"]]);const rt=de({__name:"Arknights",setup(r){const e=$e({data:[]}),{appContext:t}=Te();return Pe(async()=>{t.config.globalProperties.loading.show();const a=await Wr();a.code===200?(t.config.globalProperties.loading.hide(),e.data=a.data,console.log(e.data)):console.log("img loade error")}),(a,n)=>(A(),N(M,null,[ee(Yr,{data:e.data},null,8,["data"]),ee(Ue,{total:e.data.length,pageSize:10,pageNum:a.pageNum},null,8,["total","pageNum"])],64))}});export{rt as default};
