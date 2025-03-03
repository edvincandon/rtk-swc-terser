(()=>{"use strict";var e=()=>Math.random().toString(36).substring(7).split("").join(".");e(),e(),()=>`@@redux/PROBE_UNKNOWN_ACTION${e()}`;function t(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...r)=>e(t(...r)))}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var r=e=>e&&"function"==typeof e.match;function n(e,t){function r(...n){if(t){let r=t(...n);if(!r)throw Error(q(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>(function(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)})(t)&&"type"in t&&"string"==typeof t.type&&t.type===e,r}function o(e){return["type","payload","error","meta"].indexOf(e)>-1}var a=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}},i=e=>t=>{setTimeout(t,e)},s=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,a=!1,s=!1,c=new Set,u="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:i(10):"callback"===e.type?e.queueNotification:i(e.timeout),l=()=>{s=!1,a&&(a=!1,c.forEach(e=>e()))};return Object.assign({},n,{subscribe(e){let t=n.subscribe(()=>o&&e());return c.add(e),()=>{t(),c.delete(e)}},dispatch(e){try{return(a=!(o=!e?.meta?.RTK_autoBatch))&&!s&&(s=!0,u(l)),n.dispatch(e)}finally{o=!0}}})},c=(e,t)=>r(e)?e.match(t):e(t);function u(...e){return t=>e.some(e=>c(e,t))}var l=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},f=["name","message","stack","code"],d=class{constructor(e,t){this.payload=e,this.meta=t}_type},y=class{constructor(e,t){this.payload=e,this.meta=t}_type},p=e=>{if("object"==typeof e&&null!==e){let t={};for(let r of f)"string"==typeof e[r]&&(t[r]=e[r]);return t}return{message:String(e)}};function h(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var m=(e=>(e.reducer="reducer",e.reducerWithPrepare="reducerWithPrepare",e.asyncThunk="asyncThunk",e))(m||{});function w(e){return function(t,r){let n=t=>{isAction(r)&&Object.keys(r).every(o)?e(r.payload,t):e(r,t)};return(null)(t)?(n(t),t):createNextState3(t,n)}}function O(e,t){return t(e)}function b(e){return Array.isArray(e)||(e=Object.values(e)),e}var _=class{constructor(e){this.code=e,this.message=`task cancelled (reason: ${e})`}name="TaskAbortError";message},g=(e,t)=>{if("function"!=typeof e)throw TypeError(q(32))},E=()=>{},T=(e,t=E)=>(e.catch(t),e),v=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),S=(e,t)=>{let r=e.signal;!r.aborted&&("reason"in r||Object.defineProperty(r,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},j=e=>{if(e.aborted){let{reason:t}=e;throw new _(t)}};function P(e,t){let r=E;return new Promise((n,o)=>{let a=()=>o(new _(e.reason));if(e.aborted){a();return}r=v(e,a),t.finally(()=>r()).then(n,o)}).finally(()=>{r=E})}var k=async(e,t)=>{try{await Promise.resolve();let t=await e();return{status:"ok",value:t}}catch(e){return{status:e instanceof _?"cancelled":"rejected",error:e}}finally{t?.()}},N=e=>t=>T(P(e,t).then(t=>(j(e),t))),A=e=>{let t=N(e);return e=>t(new Promise(t=>setTimeout(t,e)))},{assign:D}=Object,M="listenerMiddleware",X=e=>{let{type:t,actionCreator:r,matcher:o,predicate:a,effect:i}=e;if(t)a=n(t).match;else if(r)t=r.type,a=r.match;else if(o)a=o;else if(a);else throw Error(q(21));return g(i,"options.listener"),{predicate:a,type:t,effect:i}},x=D(e=>{let{type:t,predicate:r,effect:n}=X(e);return{id:l(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw Error(q(22))}}},{withTypes:()=>x}),R=e=>{e.pending.forEach(e=>{S(e,null)})},L=D(n(`${M}/add`),{withTypes:()=>L}),$=D(n(`${M}/remove`),{withTypes:()=>$}),I=e=>"reducerPath"in e&&"string"==typeof e.reducerPath,U=Symbol.for("rtk-state-proxy-original"),V=e=>!!e&&!!e[U],W=new WeakMap;function q(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}console.log(n("action/test")())})();