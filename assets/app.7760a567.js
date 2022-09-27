import{u as b,w as M,a as O,E as qe,v as ue,g as Ve,_ as We,i as j,p as ke,c as Ye,b as Xe,R as Ge,d as Qe,e as Je,C as Ze,s as Ke}from"./Page.95c35691.js";import{w as ye,_ as $,d as m,o as l,c as d,u as r,a as g,b as S,t as p,e as v,f as i,g as xe,h as C,m as we,p as F,i as B,r as I,j as X,n as P,F as E,k as N,l as f,q as w,s as T,v as te,x as G,y as U,z as q,A as et,B as R,C as V,D as _e,E as tt}from"./plugin-vue_export-helper.18425321.js";const nt="modulepreload",de={},st="/",Q=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${st}${s}`,s in de)return;de[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":nt,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((h,_)=>{c.addEventListener("load",h),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};function ot(e,t){let n=[],s=!0;const o=a=>{if(s){s=!1;return}const c=[],h=Math.min(n.length,a.length);for(let _=0;_<h;_++){let u=n[_];const[k,y,A=""]=a[_];if(u.tagName.toLocaleLowerCase()===k){for(const L in y)u.getAttribute(L)!==y[L]&&u.setAttribute(L,y[L]);for(let L=0;L<u.attributes.length;L++){const D=u.attributes[L].name;D in y||u.removeAttribute(D)}u.innerHTML!==A&&(u.innerHTML=A)}else document.head.removeChild(u),u=he(a[_]),document.head.append(u);c.push(u)}n.slice(h).forEach(_=>document.head.removeChild(_)),a.slice(h).forEach(_=>{const u=he(_);document.head.appendChild(u),c.push(u)}),n=c};ye(()=>{const a=e.data,c=t.value,h=a&&a.title,_=a&&a.description,u=a&&a.frontmatter.head;document.title=(h?h+" | ":"")+c.title,document.querySelector("meta[name=description]").setAttribute("content",_||c.description),o([...u?rt(u):[]])})}function he([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function at(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function rt(e){return e.filter(t=>!at(t))}const it=/#.*$/,ct=/(index)?\.(md|html)$/,W=/\/$/,lt=/^[a-z]+:/i;function ne(e){return Array.isArray(e)}function se(e){return lt.test(e)}function ut(e,t){if(t===void 0)return!1;const n=ve(`/${e.data.relativePath}`),s=ve(t);return n===s}function ve(e){return decodeURI(e).replace(it,"").replace(ct,"")}function _t(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function ee(e){return/^\//.test(e)?e:`/${e}`}function Le(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function dt(e){return e===!1||e==="auto"||ne(e)}function ht(e){return e.children!==void 0}function vt(e){return ne(e)?e.length===0:!e}function oe(e,t){if(dt(e))return e;t=ee(t);for(const n in e)if(t.startsWith(ee(n)))return e[n];return"auto"}function Ce(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:Le(n.link)}),ht(n)&&(t=[...t,...Ce(n.children)]),t),[])}const pt=["href","aria-label"],ft=["src"],mt=m({__name:"NavBarTitle",setup(e){const{site:t,theme:n,localePath:s}=b();return(o,a)=>(l(),d("a",{class:"nav-bar-title",href:r(s),"aria-label":`${r(t).title}, back to home`},[r(n).logo?(l(),d("img",{key:0,class:"logo",src:r(M)(r(n).logo),alt:"Logo"},null,8,ft)):g("",!0),S(" "+p(r(t).title),1)],8,pt))}});var gt=$(mt,[["__scopeId","data-v-7ac13a1e"]]);function $t(){const{site:e,localePath:t,theme:n}=b();return v(()=>{const s=e.value.langs,o=Object.keys(s);if(o.length<2)return null;const c=O().path.replace(t.value,""),h=o.map(u=>({text:s[u].label,link:`${u}${c}`}));return{text:n.value.selectText||"Languages",items:h}})}const bt=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function kt(){const{site:e}=b();return v(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=yt(n);return{text:xt(s,t.repoLabel),link:s}})}function yt(e){return qe.test(e)?e:`https://github.com/${e}`}function xt(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=bt.find(([o,a])=>a.test(n[0]));return s&&s[0]?s[0]:"Source"}function Ee(e){const t=O(),n=se(e.value.link);return{props:v(()=>{const o=pe(`/${t.data.relativePath}`);let a=!1;if(e.value.activeMatch)a=new RegExp(e.value.activeMatch).test(o);else{const c=pe(e.value.link);a=c==="/"?c===o:o.startsWith(c)}return{class:{active:a,isExternal:n},href:n?e.value.link:M(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function pe(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const wt={},Lt={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Ct=i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Et=i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Pt=[Ct,Et];function At(e,t){return l(),d("svg",Lt,Pt)}var ae=$(wt,[["render",At]]);const St={class:"nav-link"},It=m({__name:"NavLink",props:{item:null},setup(e){const n=xe(e),{props:s,isExternal:o}=Ee(n.item);return(a,c)=>(l(),d("div",St,[i("a",we({class:"item"},r(s)),[S(p(e.item.text)+" ",1),r(o)?(l(),C(ae,{key:0})):g("",!0)],16)]))}});var fe=$(It,[["__scopeId","data-v-49fe041d"]]);const Tt=e=>(F("data-v-07381bdb"),e=e(),B(),e),Ft={class:"nav-dropdown-link-item"},Bt=Tt(()=>i("span",{class:"arrow"},null,-1)),Mt={class:"text"},Nt={class:"icon"},Dt=m({__name:"NavDropdownLinkItem",props:{item:null},setup(e){const n=xe(e),{props:s,isExternal:o}=Ee(n.item);return(a,c)=>(l(),d("div",Ft,[i("a",we({class:"item"},r(s)),[Bt,i("span",Mt,p(e.item.text),1),i("span",Nt,[r(o)?(l(),C(ae,{key:0})):g("",!0)])],16)]))}});var Rt=$(Dt,[["__scopeId","data-v-07381bdb"]]);const Ht=["aria-label"],Ot={class:"button-text"},jt={class:"dialog"},Ut=m({__name:"NavDropdownLink",props:{item:null},setup(e){const t=O(),n=I(!1);X(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,a)=>(l(),d("div",{class:P(["nav-dropdown-link",{open:n.value}])},[i("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[i("span",Ot,p(e.item.text),1),i("span",{class:P(["button-arrow",n.value?"down":"right"])},null,2)],8,Ht),i("ul",jt,[(l(!0),d(E,null,N(e.item.items,c=>(l(),d("li",{key:c.text,class:"dialog-item"},[f(Rt,{item:c},null,8,["item"])]))),128))])],2))}});var me=$(Ut,[["__scopeId","data-v-18d75f62"]]);const zt={key:0,class:"nav-links"},qt={key:1,class:"item"},Vt={key:2,class:"item"},Wt=m({__name:"NavLinks",setup(e){const{theme:t}=b(),n=$t(),s=kt(),o=v(()=>t.value.nav||s.value||n.value);return(a,c)=>r(o)?(l(),d("nav",zt,[r(t).nav?(l(!0),d(E,{key:0},N(r(t).nav,h=>(l(),d("div",{key:h.text,class:"item"},[h.items?(l(),C(me,{key:0,item:h},null,8,["item"])):(l(),C(fe,{key:1,item:h},null,8,["item"]))]))),128)):g("",!0),r(n)?(l(),d("div",qt,[f(me,{item:r(n)},null,8,["item"])])):g("",!0),r(s)?(l(),d("div",Vt,[f(fe,{item:r(s)},null,8,["item"])])):g("",!0)])):g("",!0)}});var Pe=$(Wt,[["__scopeId","data-v-35b91e7e"]]);const Yt={emits:["toggle"]},Xt=i("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[i("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Gt=[Xt];function Qt(e,t,n,s,o,a){return l(),d("div",{class:"sidebar-button",onClick:t[0]||(t[0]=c=>e.$emit("toggle"))},Gt)}var Jt=$(Yt,[["render",Qt]]);const Zt=e=>(F("data-v-40587210"),e=e(),B(),e),Kt={class:"nav-bar"},en=Zt(()=>i("div",{class:"flex-grow"},null,-1)),tn={class:"nav"},nn=m({__name:"NavBar",emits:["toggle"],setup(e){return(t,n)=>(l(),d("header",Kt,[f(Jt,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),f(gt),en,i("div",tn,[f(Pe)]),w(t.$slots,"search",{},void 0,!0)]))}});var sn=$(nn,[["__scopeId","data-v-40587210"]]);function on(){let e=null,t=null;const n=un(s,300);function s(){const c=an(),h=rn(c);for(let _=0;_<h.length;_++){const u=h[_],k=h[_+1],[y,A]=ln(_,u,k);if(y){history.replaceState(null,document.title,A||" "),o(A);return}}}function o(c){if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${c}"]`),!t)return;t.classList.add("active");const h=t.closest(".sidebar-links > ul > li");h&&h!==t.parentElement?(e=h.querySelector("a"),e&&e.classList.add("active")):e=null}function a(c){c&&c.classList.remove("active")}T(()=>{s(),window.addEventListener("scroll",n)}),te(()=>{o(decodeURIComponent(location.hash))}),G(()=>{window.removeEventListener("scroll",n)})}function an(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function rn(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function cn(){return document.querySelector(".nav-bar").offsetHeight}function ge(e){const t=cn();return e.parentElement.offsetTop-t-15}function ln(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<ge(t)?[!1,null]:!n||s<ge(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function un(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function _n(){const e=O(),{site:t}=b();return on(),v(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return $e(n,o);const a=oe(t.value.themeConfig.sidebar,e.data.relativePath);return a===!1?[]:a==="auto"?$e(n,o):a})}function $e(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:a,slug:c})=>{if(o-1>t)return;const h={text:a,link:`#${c}`};o===2?(s=h,n.push(h)):s&&(s.children||(s.children=[])).push(h)}),n}const Ae=e=>{const t=O(),{site:n,frontmatter:s}=b(),o=e.depth||1,a=s.value.sidebarDepth||1/0,c=t.data.headers,h=e.item.text,_=dn(n.value.base,e.item.link),u=e.item.children,k=ut(t,e.item.link),y=o<a?Se(k,u,c,o+1):null;return U("li",{class:"sidebar-link"},[U(_?"a":"p",{class:{"sidebar-link-item":!0,active:k},href:_},h),y])};function dn(e,t){return t===void 0||t.startsWith("#")?t:_t(e,t)}function Se(e,t,n,s=1){return t&&t.length>0?U("ul",{class:"sidebar-links"},t.map(o=>U(Ae,{item:o,depth:s}))):e&&n?Se(!1,hn(n),void 0,s):null}function hn(e){return Ie(vn(e))}function vn(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Ie(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Ie(t.children):void 0}))}const pn={key:0,class:"sidebar-links"},fn=m({__name:"SideBarLinks",setup(e){const t=_n();return(n,s)=>r(t).length>0?(l(),d("ul",pn,[(l(!0),d(E,null,N(r(t),o=>(l(),C(r(Ae),{item:o},null,8,["item"]))),256))])):g("",!0)}});const mn=m({__name:"SideBar",props:{open:{type:Boolean}},setup(e){return(t,n)=>(l(),d("aside",{class:P(["sidebar",{open:e.open}])},[f(Pe,{class:"nav"}),w(t.$slots,"sidebar-top",{},void 0,!0),f(fn),w(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var gn=$(mn,[["__scopeId","data-v-17c48e2f"]]);const $n=/bitbucket.org/;function bn(){const{page:e,theme:t,frontmatter:n}=b(),s=v(()=>{const{repo:a,docsDir:c="",docsBranch:h="master",docsRepo:_=a,editLinks:u}=t.value,k=n.value.editLink!=null?n.value.editLink:u,{relativePath:y}=e.value;return!k||!y||!a?null:kn(a,_,c,h,y)}),o=v(()=>t.value.editLinkText||"Edit this page");return{url:s,text:o}}function kn(e,t,n,s,o){return $n.test(e)?xn(e,t,n,s,o):yn(e,t,n,s,o)}function yn(e,t,n,s,o){return(se(t)?t:`https://github.com/${t}`).replace(W,"")+`/edit/${s}/`+(n?n.replace(W,"")+"/":"")+o}function xn(e,t,n,s,o){return(se(t)?t:e).replace(W,"")+`/src/${s}/`+(n?n.replace(W,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const wn={class:"edit-link"},Ln=["href"],Cn=m({__name:"EditLink",setup(e){const{url:t,text:n}=bn();return(s,o)=>(l(),d("div",wn,[r(t)?(l(),d("a",{key:0,class:"link",href:r(t),target:"_blank",rel:"noopener noreferrer"},[S(p(r(n))+" ",1),f(ae,{class:"icon"})],8,Ln)):g("",!0)]))}});var En=$(Cn,[["__scopeId","data-v-55695e90"]]);const Pn={key:0,class:"last-updated"},An={class:"prefix"},Sn={class:"datetime"},In=m({__name:"LastUpdated",setup(e){const{theme:t,page:n}=b(),s=v(()=>{const c=t.value.lastUpdated;return c!==void 0&&c!==!1}),o=v(()=>{const c=t.value.lastUpdated;return c===!0?"Last Updated":c}),a=I("");return T(()=>{a.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(c,h)=>r(s)?(l(),d("p",Pn,[i("span",An,p(r(o))+":",1),i("span",Sn,p(a.value),1)])):g("",!0)}});var Tn=$(In,[["__scopeId","data-v-30c3cbb4"]]);const Fn={class:"page-footer"},Bn={class:"edit"},Mn={class:"updated"},Nn=m({__name:"PageFooter",setup(e){return(t,n)=>(l(),d("footer",Fn,[i("div",Bn,[f(En)]),i("div",Mn,[f(Tn)])]))}});var Dn=$(Nn,[["__scopeId","data-v-5c96fb00"]]);function Rn(){const{page:e,theme:t}=b(),n=v(()=>Le(ee(e.value.relativePath))),s=v(()=>{const _=oe(t.value.sidebar,n.value);return ne(_)?Ce(_):[]}),o=v(()=>s.value.findIndex(_=>_.link===n.value)),a=v(()=>{if(t.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),c=v(()=>{if(t.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),h=v(()=>!!a.value||!!c.value);return{next:a,prev:c,hasLinks:h}}const Hn={},On={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},jn=i("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Un=[jn];function zn(e,t){return l(),d("svg",On,Un)}var qn=$(Hn,[["render",zn]]);const Vn={},Wn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Yn=i("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Xn=[Yn];function Gn(e,t){return l(),d("svg",Wn,Xn)}var Qn=$(Vn,[["render",Gn]]);const Jn={key:0,class:"next-and-prev-link"},Zn={class:"container"},Kn={class:"prev"},es=["href"],ts={class:"text"},ns={class:"next"},ss=["href"],os={class:"text"},as=m({__name:"NextAndPrevLinks",setup(e){const{hasLinks:t,prev:n,next:s}=Rn();return(o,a)=>r(t)?(l(),d("div",Jn,[i("div",Zn,[i("div",Kn,[r(n)?(l(),d("a",{key:0,class:"link",href:r(M)(r(n).link)},[f(qn,{class:"icon icon-prev"}),i("span",ts,p(r(n).text),1)],8,es)):g("",!0)]),i("div",ns,[r(s)?(l(),d("a",{key:0,class:"link",href:r(M)(r(s).link)},[i("span",os,p(r(s).text),1),f(Qn,{class:"icon icon-next"})],8,ss)):g("",!0)])])])):g("",!0)}});var rs=$(as,[["__scopeId","data-v-e65a9748"]]);const is={class:"page"},cs={class:"container"},ls=m({__name:"Page",setup(e){return(t,n)=>{const s=q("Content");return l(),d("main",is,[i("div",cs,[w(t.$slots,"top",{},void 0,!0),f(s,{class:"content"}),f(Dn),f(rs),w(t.$slots,"bottom",{},void 0,!0)])])}}});var us=$(ls,[["__scopeId","data-v-8fcebc32"]]);const _s={key:0,id:"ads-container"},ds=m({__name:"Layout",setup(e){const t=et(()=>Q(()=>import("./Home.b79d4045.js"),["assets/Home.b79d4045.js","assets/Page.95c35691.js","assets/plugin-vue_export-helper.18425321.js"])),n=()=>null,s=n,o=n,a=n,c=O(),{site:h,page:_,theme:u,frontmatter:k}=b(),y=v(()=>!!k.value.customLayout),A=v(()=>!!k.value.home),L=v(()=>Object.keys(h.value.langs).length>1),D=v(()=>{const x=u.value;return k.value.navbar===!1||x.navbar===!1?!1:h.value.title||x.logo||x.repo||x.nav}),H=I(!1),He=v(()=>k.value.home||k.value.sidebar===!1?!1:!vt(oe(u.value.sidebar,c.data.relativePath))),Z=x=>{H.value=typeof x=="boolean"?x:!H.value},Oe=Z.bind(null,!1);X(c,Oe);const je=v(()=>[{"no-navbar":!D.value,"sidebar-open":H.value,"no-sidebar":!He.value}]);return(x,le)=>{const Ue=q("Content"),ze=q("Debug");return l(),d(E,null,[i("div",{class:P(["theme",r(je)])},[r(D)?(l(),C(sn,{key:0,onToggle:Z},{search:R(()=>[w(x.$slots,"navbar-search",{},()=>[r(u).algolia?(l(),C(r(a),{key:0,options:r(u).algolia,multilang:r(L)},null,8,["options","multilang"])):g("",!0)])]),_:3})):g("",!0),f(gn,{open:H.value},{"sidebar-top":R(()=>[w(x.$slots,"sidebar-top")]),"sidebar-bottom":R(()=>[w(x.$slots,"sidebar-bottom")]),_:3},8,["open"]),i("div",{class:"sidebar-mask",onClick:le[0]||(le[0]=Ma=>Z(!1))}),r(y)?(l(),C(Ue,{key:1})):r(A)?w(x.$slots,"home",{key:2},()=>[f(r(t),null,{hero:R(()=>[w(x.$slots,"home-hero")]),features:R(()=>[w(x.$slots,"home-features")]),footer:R(()=>[w(x.$slots,"home-footer")]),_:3})]):(l(),C(us,{key:3},{top:R(()=>[w(x.$slots,"page-top-ads",{},()=>[r(u).carbonAds&&r(u).carbonAds.carbon?(l(),d("div",_s,[(l(),C(r(s),{key:"carbon"+r(_).relativePath,code:r(u).carbonAds.carbon,placement:r(u).carbonAds.placement},null,8,["code","placement"]))])):g("",!0)]),w(x.$slots,"page-top")]),bottom:R(()=>[w(x.$slots,"page-bottom"),w(x.$slots,"page-bottom-ads",{},()=>[r(u).carbonAds&&r(u).carbonAds.custom?(l(),C(r(o),{key:"custom"+r(_).relativePath,code:r(u).carbonAds.custom,placement:r(u).carbonAds.placement},null,8,["code","placement"])):g("",!0)])]),_:3}))],2),f(ze)],64)}}}),hs={class:"theme"},vs=i("h1",null,"404",-1),ps=["href"],fs=m({__name:"NotFound",setup(e){const{site:t}=b(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,a)=>(l(),d("div",hs,[vs,i("blockquote",null,p(s()),1),i("a",{href:r(t).base,"aria-label":"go to home"},"Take me home.",8,ps)]))}}),ms={Layout:ds,NotFound:fs};class gs{constructor(){this.x=50,this.y=50,this.vx=Math.random()*2+2,this.vy=Math.random()*2,this.color="#fff",this.shadowBlur=Math.random()*3,this.shadowX=Math.random()*2-1,this.shadowY=Math.random()*2-1,this.radiusX=Math.random()*3,this.radiusY=Math.random()*3,this.rotation=Math.PI*Math.floor(Math.random()*2)}}class re{constructor(t){this.width=300,this.height=300,this.dustQuantity=50,this.dustArr=[];const n=document.getElementById(t);if(n)this.canvas=n,this.ctx=n.getContext("2d"),this.build(),window.addEventListener("resize",()=>this.resize());else throw new Error("canvasID \u65E0\u6548")}build(){if(this.resize(),this.ctx){const t=re.getPoint(this.dustQuantity);for(let n of t){const s=new gs;this.buildDust(n[0],n[1],s),this.dustArr.push(s)}setInterval(()=>{this.play()},40)}}play(){var n;const t=this.dustArr;(n=this.ctx)==null||n.clearRect(0,0,this.width,this.height);for(let s of t)if(s.x<0||s.y<0){const o=this.width,a=Math.floor(Math.random()*window.innerHeight);s.x=o,s.y=a,this.buildDust(o,a,s)}else{const o=s.x-s.vx,a=s.y-s.vy;this.buildDust(o,a,s)}}buildDust(t,n,s){const o=this.ctx;t&&(s.x=t),n&&(s.y=n),o&&(o.beginPath(),o.shadowBlur=s.shadowBlur,o.shadowColor=s.color,o.shadowOffsetX=s.shadowX,o.shadowOffsetY=s.shadowY,o.ellipse(s.x,s.y,s.radiusX,s.radiusY,s.rotation,0,Math.PI*2),o.closePath(),o.fillStyle=s.color,o.fill())}resize(){const t=this.canvas,n=window.innerWidth,s=window.innerHeight;this.width=n,this.height=s,this.dustQuantity=Math.floor((n+s)/38),t!==void 0&&(t.width=n,t.height=s)}static getPoint(t=1){let n=[];for(let s=0;s<t;s++){const o=Math.floor(Math.random()*window.innerWidth),a=Math.floor(Math.random()*window.innerHeight);n.push([o,a])}return n}}const $s={class:"menu-list"},bs=["href"],ks=["title"],ys=m({__name:"index",setup(e){const{theme:t,page:n}=b(),s=t.value.nav,o=v(()=>`/${n.value.relativePath.split(".")[0]}`);return(a,c)=>(l(),d("header",null,[i("nav",null,[i("div",$s,[(l(!0),d(E,null,N(r(s),h=>(l(),d("a",{href:h.link,key:h.link,class:P(h.link===r(o)?"active":"")},[i("i",{class:P(`fa fa-${h.icon}`),title:h.text},null,10,ks)],10,bs))),128))])])]))}});var xs=$(ys,[["__scopeId","data-v-4729bdee"]]);function Te(e){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=s.frontMatter.tags;console.log("tt"),o&&o.forEach(a=>{a&&(t[a]||(t[a]=[]),t[a].push(s))})}return t}function Fe(e){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=s.frontMatter.category;o&&o.forEach(a=>{t[a]||(t[a]=[]),t[a].push(s)})}return t}function Be(e){const t=[];let n="0",s=-1;for(let o=0;o<e.length;o++){const a=e[o];if(a.frontMatter.date){const c=a.frontMatter.date.split("-")[0];c===n?t[s].push(a):(s++,t[s]=[],t[s].push(a),n=c)}}return t}function be(e,t,n){const s=[];for(let o=0;o<e.length;o++){const a=e[o],c=a.frontMatter[n];c&&c.includes(t)&&s.push(a)}return Be(s)}const ws={key:0,class:"social-links"},Ls=["href"],Cs=["title"],Es=m({__name:"SocialLinks",setup(e){const{theme:t}=b();return(n,s)=>r(t).socialLinks.length?(l(),d("div",ws,[(l(!0),d(E,null,N(r(t).socialLinks,o=>(l(),d("a",{key:o.link,href:o.link,target:"_blank"},[i("i",{class:P(`fa fa-${o.icon}`),title:o.icon},null,10,Cs)],8,Ls))),128))])):g("",!0)}});var Ps=$(Es,[["__scopeId","data-v-78d89ee0"]]);const ie=e=>(F("data-v-77475d0e"),e=e(),B(),e),As={key:0,class:"aside-wrapper"},Ss={href:"/",class:"logo"},Is=["src"],Ts={class:"center dr"},Fs={href:"/"},Bs={class:"total"},Ms=["href"],Ns=ie(()=>i("span",{class:"total-title"},"Archives Total",-1)),Ds={class:"total-number"},Rs={class:"total-tags"},Hs=ie(()=>i("span",{class:"total-title"},"Tags:",-1)),Os={class:"total-number"},js={class:"total-categories"},Us=ie(()=>i("span",{class:"total-title"},"Categories:",-1)),zs={class:"total-number"},qs=m({__name:"index",setup(e){const{site:t,theme:n,frontmatter:s}=b(),o=t.value.title,a=n.value.logo,c=n.value.posts.length,h=v(()=>s.value.sidebar),_=v(()=>Object.keys(Te(n.value.posts)).length),u=v(()=>Object.keys(Fe(n.value.posts)).length);return(k,y)=>r(h)?(l(),d("div",As,[i("aside",null,[i("div",null,[i("a",Ss,[i("img",{src:r(M)(r(a)),alt:"Logo"},null,8,Is)]),i("h1",Ts,[i("a",Fs,"Dr."+p(r(o)),1)]),i("section",Bs,[i("a",{class:"total-archives",href:r(M)("/pages/archives")},[Ns,i("span",Ds,p(r(c)),1)],8,Ms),i("div",Rs,[Hs,i("span",Os,p(r(_)),1)]),i("div",js,[Us,i("span",zs,p(r(u)),1)])]),f(Ps)])])])):g("",!0)}});var Vs=$(qs,[["__scopeId","data-v-77475d0e"]]);class Ws{constructor(){this.codeEles=document.getElementsByTagName("pre"),Array.from(this.codeEles).forEach(async n=>{const o=(await Q(()=>import("./message.1b579c21.js"),["assets/message.1b579c21.js","assets/plugin-vue_export-helper.18425321.js","assets/Page.95c35691.js"])).default,a=document.createElement("i");a.setAttribute("class","btn-copy fa fa-clipboard"),n.appendChild(a),a.addEventListener("click",function(){const c=document.createElement("textarea"),h=a.previousElementSibling;c.value=h.innerText,document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),o.success("Copied")})})}}const Ys=e=>(F("data-v-059f3759"),e=e(),B(),e),Xs={class:"post-header"},Gs={class:"title"},Qs={class:"info"},Js={class:"item date",datetime:"2022-01-25T19:21:35.000Z"},Zs=Ys(()=>i("div",{class:"divider"},null,-1)),Ks=m({__name:"PostHeader",setup(e){const{frontmatter:t}=b();let n=v(()=>t.value.title),s=v(()=>{const o=t.value.date;return(o?new Date(o).toJSON().split("T")[0]:"").split("-")});return(o,a)=>(l(),d("div",Xs,[i("h1",Gs,p(r(n)),1),i("div",Qs,[i("span",Js,p(r(s)[2])+" / "+p(r(s)[1])+" / "+p(r(s)[0]),1)]),Zs]))}});var eo=$(Ks,[["__scopeId","data-v-059f3759"]]);const ce=e=>(F("data-v-6a48459c"),e=e(),B(),e),to={class:"post-footer"},no=ce(()=>i("span",null,"\u672C\u6587\u4F5C\u8005\uFF1A",-1)),so=["href"],oo=ce(()=>i("span",null,"\u672C\u6587\u94FE\u63A5\uFF1A",-1)),ao=["href"],ro=ce(()=>i("li",null,[i("span",null,"\u7248\u6743\u58F0\u660E\uFF1A"),S(" \u672C\u535A\u5BA2\u6240\u6709\u6587\u7AE0\u9664\u7279\u522B\u58F0\u660E\u5916\uFF0C\u5747\u91C7\u7528 "),i("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"},"CC BY-NC-SA 4.0"),S(" \u8BB8\u53EF\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002 ")],-1)),io=m({__name:"PostFooter",setup(e){const{page:t,site:n,frontmatter:s}=b();let o=v(()=>{const a=`${t.value.relativePath.split(".")[0]}.html`;return`${n.value.themeConfig.website}/${a}`});return v(()=>s.value.postFooter),(a,c)=>(l(),d("div",to,[i("ul",null,[i("li",null,[no,i("a",{href:r(n).themeConfig.website,target:"_blank"},p(r(n).title),9,so)]),i("li",null,[oo,i("a",{href:r(o),target:"_blank"},p(r(o)),9,ao)]),ro])]))}});var co=$(io,[["__scopeId","data-v-6a48459c"]]);const Me=e=>(F("data-v-2ea4cd0e"),e=e(),B(),e),lo={class:"prev-next"},uo=Me(()=>i("hr",null,null,-1)),_o=["href"],ho={key:1},vo=["href"],po={key:1},fo=Me(()=>i("hr",null,null,-1)),mo=m({__name:"PrevNext",setup(e){const{theme:t,page:n}=b(),s=v(()=>t.value.posts),o=v(()=>n.value.frontmatter.title);let a=V({regularPath:"",frontMatter:{title:""}}),c=V({regularPath:"",frontMatter:{title:""}});const h=(_,u)=>{u?(_.regularPath=u.regularPath,_.frontMatter.title=u.frontMatter.title):(_.regularPath="",_.frontMatter.title="")};return ye(()=>{const _=s.value.findIndex(u=>u.frontMatter.title===o.value);if(_>-1){const u=s.value[_-1],k=s.value[_+1];h(a,u),h(c,k)}}),(_,u)=>{var k,y,A,L,D,H;return l(),d("div",lo,[uo,i("div",null,[_e(i("a",{class:"prev",href:r(M)((k=r(a))==null?void 0:k.regularPath)},[r(t).docFooter.prev.icon?(l(),d("i",{key:0,class:P(`fa fa-${r(t).docFooter.prev.icon}`)},null,2)):g("",!0),r(t).docFooter.prev.text?(l(),d("span",ho,p(r(t).docFooter.prev.text),1)):g("",!0),S(" "+p((A=(y=r(a))==null?void 0:y.frontMatter)==null?void 0:A.title),1)],8,_o),[[ue,r(a).regularPath]]),_e(i("a",{class:"next",href:r(M)((L=r(c))==null?void 0:L.regularPath)},[S(p((H=(D=r(c))==null?void 0:D.frontMatter)==null?void 0:H.title)+" ",1),r(t).docFooter.next.icon?(l(),d("i",{key:0,class:P(`fa fa-${r(t).docFooter.next.icon}`)},null,2)):g("",!0),r(t).docFooter.next.text?(l(),d("span",po,p(r(t).docFooter.next.text),1)):g("",!0)],8,vo),[[ue,r(c).regularPath]])]),fo])}}});var go=$(mo,[["__scopeId","data-v-2ea4cd0e"]]);function $o(e,t){let n,s,o=0;return function(){n=this,s=arguments;let a=new Date().valueOf();a-o>t&&(e.apply(n,s),o=a)}}const Ne=e=>(F("data-v-46ebd702"),e=e(),B(),e),bo=Ne(()=>i("i",{class:"fa fa-caret-up"},null,-1)),ko=Ne(()=>i("p",null,"TOP",-1)),yo=[bo,ko],xo=m({__name:"BackTop",setup(e){const t=I(0),n=v(()=>t.value>300?"block":"none");T(()=>{window.addEventListener("scroll",o)}),G(()=>{window.removeEventListener("scroll",o)});const s=()=>{t.value=document.documentElement.scrollTop},o=$o.bind(this,s,1e3)(),a=()=>{const c=document.documentElement.scrollTop/6,h=setInterval(()=>{document.documentElement.scrollTop=document.documentElement.scrollTop-c,t.value=document.documentElement.scrollTop,t.value<=0&&clearInterval(h)},50)};return(c,h)=>(l(),d("div",{class:"back-top",style:tt({display:r(n)}),onClick:a},yo,4))}});var wo=$(xo,[["__scopeId","data-v-46ebd702"]]);const J=e=>(F("data-v-6f889226"),e=e(),B(),e),Lo=J(()=>i("i",{class:"fa fa-heartbeat mr4"},null,-1)),Co=J(()=>i("p",null,[S(" Power With "),i("a",{href:"https://vitejs.cn/vitepress/",target:"_blank"},"VitePress"),S(" & "),i("a",{href:"https://github.com/Yue-plus/hexo-theme-arknights",target:"_blank"},"Arknights")],-1)),Eo=J(()=>i("div",null,[i("span",null,"\xA9"),i("span",null,"2021 to 2022")],-1)),Po=J(()=>i("div",null,[i("span",null,"ICP"),i("span",null,"\u2014 RHODEISLAND \u2014")],-1)),Ao=m({__name:"Footer",setup(e){const{theme:t}=b(),n=I();let s=V({day:0,hour:0,minute:0,second:0}),o=null;T(()=>{t.value.footer.runtime.enable&&(o=setInterval(a,1e3))}),G(()=>{o&&clearInterval(o)});const a=()=>{const c=Ve();s.day=c.day,s.hour=c.hour,s.minute=c.minute,s.second=c.second};return(c,h)=>(l(),d("footer",null,[r(t).footer.runtime.enable?(l(),d("p",{key:0,ref_key:"runtimeRef",ref:n},[Lo,S(" "+p(r(s).day)+" days "+p(r(s).hour)+" hours "+p(r(s).minute)+" minutes and "+p(r(s).second)+" seconds ",1)],512)):g("",!0),Co,r(t).footer.copyright?(l(),d(E,{key:1},[Eo,Po],64)):g("",!0)]))}});var So=$(Ao,[["__scopeId","data-v-6f889226"]]);const Io=m({__name:"index",setup(e){const{frontmatter:t}=b(),n=v(()=>t.value.page);T(()=>{s()}),te(()=>{s()});const s=()=>{n.value||new Ws};return(o,a)=>{const c=q("Content");return l(),d("div",{class:P(["content",r(n)?"":"post-content"]),id:"postContent"},[r(n)?g("",!0):(l(),C(eo,{key:0})),f(c,{id:"content"}),r(n)?g("",!0):(l(),d(E,{key:1},[f(co),f(go),f(wo)],64)),f(So)],2)}}}),To=()=>U("script",{src:"https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"});const Fo={class:"layout"},Bo={ref:"canvasRef",id:"canvas-dust",width:"1036",height:"228"},Mo=m({__name:"NewLayout",setup(e){const{theme:t,frontmatter:n}=b();return T(()=>{new re("canvas-dust")}),(s,o)=>(l(),d(E,null,[i("main",Fo,[f(Vs,{class:"aside"}),f(Io,{class:"content"}),f(xs,{class:"navbar"})]),r(t).live2d?(l(),C(r(To),{key:0})):g("",!0),i("canvas",Bo,null,512)],64))}});var No=$(Mo,[["__scopeId","data-v-471c1ff5"]]);const Do={class:"categories"},Ro=i("h1",null,"categories",-1),Ho={class:"list"},Oo=["onClick"],jo={class:"link",href:"#"},Uo={class:"count"},zo=m({__name:"Categories",props:{list:Object,selected:String},emits:["toggle"],setup(e,{emit:t}){const s=I(e.selected),o=a=>{s.value=a,t("toggle",a)};return(a,c)=>(l(),d("div",Do,[Ro,i("ul",Ho,[(l(!0),d(E,null,N(e.list,(h,_)=>(l(),d("li",{onClick:u=>o(_),class:P(["item",s.value==_?"active":""])},[i("a",jo,"# "+p(_)+" #",1),i("span",Uo,p(e.list[_].length),1)],10,Oo))),256))])]))}});const qo=e=>(F("data-v-21fa307c"),e=e(),B(),e),Vo={class:"tags"},Wo=qo(()=>i("h1",null,"tags",-1)),Yo={class:"list",itemprop:"keywords"},Xo=["onClick"],Go={class:"link",href:"#",rel:"tag"},Qo={class:"count"},Jo=m({__name:"Tags",props:{list:Object,selected:String},emits:["toggle"],setup(e,{emit:t}){const s=I(e.selected),o=a=>{s.value=a,t("toggle",a)};return(a,c)=>(l(),d("div",Vo,[Wo,i("ul",Yo,[(l(!0),d(E,null,N(e.list,(h,_)=>(l(),d("li",{onClick:u=>o(_),class:P(["item",s.value==_?"active":""])},[i("a",Go,p(_),1),i("span",Qo,p(e.list[_].length),1)],10,Xo))),256))])]))}});var Zo=$(Jo,[["__scopeId","data-v-21fa307c"]]);const Ko={class:"archive-list"},ea=i("h1",null,"archives",-1),ta={class:"bg"},na=["href"],sa=m({__name:"ArchiveList",props:{list:Object},setup(e){return(t,n)=>(l(),d("div",Ko,[ea,e.list.length?(l(!0),d(E,{key:0},N(e.list,s=>(l(),d("div",ta,[i("h2",null,p(s[0].frontMatter.date.split("-")[0]),1),(l(!0),d(E,null,N(s,(o,a)=>(l(),d("div",{key:a,class:"article-item"},[i("time",null,p(o.frontMatter.date.slice(5)),1),i("a",{href:r(M)(o.regularPath)},p(o.frontMatter.title),9,na)]))),128))]))),256)):g("",!0)]))}});const oa={class:"archive-wrapper"},aa={class:"aside"},ra=m({__name:"index",setup(e){const{theme:t}=b(),n=v(()=>Te(t.value.posts)),s=v(()=>Fe(t.value.posts));let o=V({list:Be(t.value.posts)}),a=I(""),c=I("");const h=u=>{a.value=u,c.value="",o.list=be(t.value.posts,u,"tags")},_=u=>{c.value=u,a.value="",o.list=be(t.value.posts,u,"category")};return T(()=>{const u=document.location.hash;if(u){const k=u.substring(1).split("-")[0],y=u.substring(1).split("-")[1];k==="tag"?a.value=y:c.value=y}}),(u,k)=>(l(),d("div",oa,[f(sa,{list:r(o).list,class:"item"},null,8,["list"]),i("div",aa,[f(zo,{list:r(s),onToggle:_,class:"item"},null,8,["list"]),f(Zo,{list:r(n),onToggle:h,class:"item"},null,8,["list"])])]))}}),ia={key:0,id:"comment"},ca=m({__name:"Comment",setup(e){const{theme:t,frontmatter:n}=b(),s=v(()=>n.value.comment);let o=t.value.valine,a=I();T(async()=>{let h=await Q(()=>import("./Valine.min.ad08ee52.js").then(function(_){return _.V}),[]);a.value=h.default,c()}),te(()=>{c()});const c=()=>{s&&new a.value({el:"#comment",...o})};return(h,_)=>r(s)?(l(),d("div",ia)):g("",!0)}});const De=e=>(F("data-v-090025bd"),e=e(),B(),e),la={class:"feedback"},ua={class:"tc"},_a=S("Feedback "),da=["id"],ha=De(()=>i("i",{class:"fa fa-eye mr4"},null,-1)),va=De(()=>i("i",{class:"leancloud-visitors-count"},"0",-1)),pa=[ha,va],fa=m({__name:"Feedback",setup(e){const{page:t}=b();return(n,s)=>(l(),d("div",la,[i("h1",ua,[_a,i("div",{id:`/${r(t).relativePath.replace(".md",".html")}`,class:"leancloud_visitors","data-flag-title":"Your Article Title"},pa,8,da)]),f(ca)]))}});var ma=$(fa,[["__scopeId","data-v-090025bd"]]);const ga={},$a={class:"loading-wrap hover",width:"100",height:"100",viewBox:"0 0 40 60"},ba=i("polygon",{class:"triangulo",fill:"none",stroke:"#fff","stroke-width":"1",points:"16,1 32,32 1,32"},null,-1),ka=i("text",{class:"loading-text",x:"0",y:"45",fill:"#fff"},"Loading...",-1),ya=[ba,ka];function xa(e,t){return l(),d("svg",$a,ya)}var wa=$(ga,[["render",xa]]);var Y={...ms,Layout:No,enhanceApp({app:e}){e.component("Archives",ra),e.component("Page",We),e.component("Feedback",ma),e.component("Loading",wa)}};const K=new Set,Re=()=>document.createElement("link"),La=e=>{const t=Re();t.rel="prefetch",t.href=e,document.head.appendChild(t)},Ca=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let z;const Ea=j&&(z=Re())&&z.relList&&z.relList.supports&&z.relList.supports("prefetch")?La:Ca;function Pa(){if(!j||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(a=>{a.forEach(c=>{if(c.isIntersecting){const h=c.target;n.unobserve(h);const{pathname:_}=h;if(!K.has(_)){K.add(_);const u=ke(_);Ea(u)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:c,hostname:h,pathname:_}=a,u=_.match(/\.\w+$/);u&&u[0]!==".html"||c!=="_blank"&&h===location.hostname&&(_!==location.pathname?n.observe(a):K.add(_))})})};T(s);const o=O();X(()=>o.path,s),G(()=>{n&&n.disconnect()})}const Aa=m({setup(e,{slots:t}){const n=I(!1);return T(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),Sa=Y.NotFound||(()=>"404 Not Found"),Ia={name:"VitePressApp",setup(){const{site:e}=b();return T(()=>{X(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),Pa(),()=>U(Y.Layout)}};function Ta(){const e=Ba(),t=Fa();t.provide(Ge,e);const n=Qe(e.route);return t.provide(Je,n),j&&ot(e.route,n.site),t.component("Content",Ze),t.component("ClientOnly",Aa),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),Y.enhanceApp&&Y.enhanceApp({app:t,router:e,siteData:Ke}),{app:t,router:e}}function Fa(){return Xe(Ia)}function Ba(){let e=j,t;return Ye(n=>{let s=ke(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),j?(e=!1,Q(()=>import(s),[])):require(s)},Sa)}if(j){const{app:e,router:t}=Ta();t.go().then(()=>{e.mount("#app")})}export{fe as N,Ta as createApp};
