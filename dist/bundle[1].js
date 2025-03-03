(()=>{"use strict";function e(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var t=()=>Math.random().toString(36).substring(7).split("").join(".");t(),t(),()=>`@@redux/PROBE_UNKNOWN_ACTION${t()}`;function r(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function n(e,t){return function(...r){return t(e.apply(this,r))}}function i(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...r)=>e(t(...r)))}var o="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?i:i.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var a=e=>e&&"function"==typeof e.match;function u(e,t){function n(...r){if(t){let n=t(...r);if(!n)throw Error(ev(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>{var n;return r(n=t)&&"type"in n&&"string"==typeof n.type&&t.type===e},n}function s(e){return["type","payload","error","meta"].indexOf(e)>-1}var l=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function c(e){return isDraftable(e)?createNextState(e,()=>{}):e}function f(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function d(e){let t=typeof e;return null==e||"string"===t||"boolean"===t||"number"===t||Array.isArray(e)||isPlainObject(e)}var p=()=>function(e){let{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:i=!0}=e??{},o=new l;if(t){if("boolean"==typeof t)o.push(thunkMiddleware);else o.push(withExtraArgument(t.extraArgument))}return o},y="RTK_autoBatch",h=e=>t=>{setTimeout(t,e)},m=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),i=!0,o=!1,a=!1,u=new Set,s="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:h(10):"callback"===e.type?e.queueNotification:h(e.timeout),l=()=>{a=!1,o&&(o=!1,u.forEach(e=>e()))};return Object.assign({},n,{subscribe(e){let t=n.subscribe(()=>i&&e());return u.add(e),()=>{t(),u.delete(e)}},dispatch(e){try{return(o=!(i=!e?.meta?.[y]))&&!a&&(a=!0,s(l)),n.dispatch(e)}finally{i=!0}}})},g=e=>function(t){let{autoBatch:r=!0}=t??{},n=new l(e);return r&&n.push(m("object"==typeof r?r:void 0)),n};function w(e){let t;let r={},n=[],i={addCase(e,t){let n="string"==typeof e?e:e.type;if(!n)throw Error(ev(28));if(n in r)throw Error(ev(29));return r[n]=t,i},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),i),addDefaultCase:e=>(t=e,i)};return e(i),[r,n,t]}var b=(e,t)=>a(e)?e.match(t):e(t);function O(...e){return t=>e.some(e=>b(e,t))}function E(...e){return t=>e.every(e=>b(e,t))}function v(e,t){if(!e||!e.meta)return!1;let r="string"==typeof e.meta.requestId,n=t.indexOf(e.meta.requestStatus)>-1;return r&&n}function j(e){return"function"==typeof e[0]&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function _(...e){return 0===e.length?e=>v(e,["rejected"]):j(e)?O(...e.map(e=>e.rejected)):_()(e[0])}var S=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},P=["name","message","stack","code"],A=class{constructor(e,t){this.payload=e,this.meta=t}_type},T=class{constructor(e,t){this.payload=e,this.meta=t}_type},k=e=>{if("object"==typeof e&&null!==e){let t={};for(let r of P)"string"==typeof e[r]&&(t[r]=e[r]);return t}return{message:String(e)}},M=(()=>{function e(e,t,r){let n=u(e+"/fulfilled",(e,t,r,n)=>({payload:e,meta:{...n||{},arg:r,requestId:t,requestStatus:"fulfilled"}})),i=u(e+"/pending",(e,t,r)=>({payload:void 0,meta:{...r||{},arg:t,requestId:e,requestStatus:"pending"}})),o=u(e+"/rejected",(e,t,n,i,o)=>({payload:i,error:(r&&r.serializeError||k)(e||"Rejected"),meta:{...o||{},arg:n,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:e?.name==="AbortError",condition:e?.name==="ConditionError"}}));return Object.assign(function(e){return(a,u,s)=>{let l,c;let f=r?.idGenerator?r.idGenerator(e):S(),d=new AbortController;function p(e){c=e,d.abort()}let y=async function(){let y;try{let o=r?.condition?.(e,{getState:u,extra:s});if(function(e){return null!==e&&"object"==typeof e&&"function"==typeof e.then}(o)&&(o=await o),!1===o||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};let h=new Promise((e,t)=>{l=()=>{t({name:"AbortError",message:c||"Aborted"})},d.signal.addEventListener("abort",l)});a(i(f,e,r?.getPendingMeta?.({requestId:f,arg:e},{getState:u,extra:s}))),y=await Promise.race([h,Promise.resolve(t(e,{dispatch:a,getState:u,extra:s,requestId:f,signal:d.signal,abort:p,rejectWithValue:(e,t)=>new A(e,t),fulfillWithValue:(e,t)=>new T(e,t)})).then(t=>{if(t instanceof A)throw t;return t instanceof T?n(t.payload,f,e,t.meta):n(t,f,e)})])}catch(t){y=t instanceof A?o(null,f,e,t.payload,t.meta):o(t,f,e)}finally{l&&d.signal.removeEventListener("abort",l)}return!(r&&!r.dispatchConditionRejection&&o.match(y)&&y.meta.condition)&&a(y),y}();return Object.assign(y,{abort:p,requestId:f,arg:e,unwrap:()=>y.then(x)})}},{pending:i,rejected:o,fulfilled:n,settled:O(o,n),typePrefix:e})}return e.withTypes=()=>e,e})();function x(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var N=Symbol.for("rtk-slice-createasyncthunk"),D=(e=>(e.reducer="reducer",e.reducerWithPrepare="reducerWithPrepare",e.asyncThunk="asyncThunk",e))(D||{});function R(){}function C(e){return function(t,r){let n=t=>{var n;if(isAction(n=r)&&Object.keys(n).every(s))e(r.payload,t);else e(r,t)};return(null)(t)?(n(t),t):createNextState3(t,n)}}function q(e,t){let r=t(e);return r}function $(e){return!Array.isArray(e)&&(e=Object.values(e)),e}function L(e){return isDraft4(e)?current2(e):e}function V(e,t,r){e=$(e);let n=L(r.ids),i=new Set(n),o=[],a=[];for(let r of e){let e=q(r,t);i.has(e)?a.push({id:e,changes:r}):o.push(r)}return[o,a,n]}function W(e){function t(t,r){let n=q(t,e);if(!(n in r.entities))r.ids.push(n),r.entities[n]=t}function r(e,r){for(let n of e=$(e))t(n,r)}function n(t,r){let n=q(t,e);!(n in r.entities)&&r.ids.push(n),r.entities[n]=t}function i(e,t){let r=!1;e.forEach(e=>{e in t.entities&&(delete t.entities[e],r=!0)}),r&&(t.ids=t.ids.filter(e=>e in t.entities))}function o(t,r){let n={},i={};t.forEach(e=>{e.id in r.entities&&(i[e.id]={id:e.id,changes:{...i[e.id]?.changes,...e.changes}})}),(t=Object.values(i)).length>0&&t.filter(t=>(function(t,r,n){let i=n.entities[r.id];if(void 0===i)return!1;let o=Object.assign({},i,r.changes),a=q(o,e),u=a!==r.id;return u&&(t[r.id]=a,delete n.entities[r.id]),n.entities[a]=o,u})(n,t,r)).length>0&&(r.ids=Object.values(r.entities).map(t=>q(t,e)))}function a(t,n){let[i,a]=V(t,e,n);o(a,n),r(i,n)}return{removeAll:function(e){let t=C((t,r)=>e(r));return function(e){return t(e,void 0)}}(function(e){Object.assign(e,{ids:[],entities:{}})}),addOne:C(t),addMany:C(r),setOne:C(n),setMany:C(function(e,t){for(let r of e=$(e))n(r,t)}),setAll:C(function(e,t){e=$(e),t.ids=[],t.entities={},r(e,t)}),updateOne:C(function(e,t){return o([e],t)}),updateMany:C(o),upsertOne:C(function(e,t){return a([e],t)}),upsertMany:C(a),removeOne:C(function(e,t){return i([e],t)}),removeMany:C(i)}}var X=class{constructor(e){this.code=e,this.message=`task cancelled (reason: ${e})`}name="TaskAbortError";message},I=(e,t)=>{if("function"!=typeof e)throw TypeError(ev(32))},U=()=>{},B=(e,t=U)=>(e.catch(t),e),F=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),G=(e,t)=>{let r=e.signal;if(!r.aborted)!("reason"in r)&&Object.defineProperty(r,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t)},K=e=>{if(e.aborted){let{reason:t}=e;throw new X(t)}};function z(e,t){let r=U;return new Promise((n,i)=>{let o=()=>i(new X(e.reason));if(e.aborted){o();return}r=F(e,o),t.finally(()=>r()).then(n,i)}).finally(()=>{r=U})}var J=async(e,t)=>{try{await Promise.resolve();let t=await e();return{status:"ok",value:t}}catch(e){return{status:e instanceof X?"cancelled":"rejected",error:e}}finally{t?.()}},H=e=>t=>B(z(e,t).then(t=>(K(e),t))),Q=e=>{let t=H(e);return e=>t(new Promise(t=>setTimeout(t,e)))},{assign:Y}=Object,Z={},ee="listenerMiddleware",et=(e,t)=>{let r=t=>F(e,()=>G(t,e.reason));return(n,i)=>{I(n,"taskExecutor");let o=new AbortController;r(o);let a=J(async()=>{K(e),K(o.signal);let t=await n({pause:H(o.signal),delay:Q(o.signal),signal:o.signal});return K(o.signal),t},()=>G(o,null));return i?.autoJoin&&t.push(a.catch(U)),{result:H(e)(a),cancel(){G(o,null)}}}},er=(e,t)=>{let r=async(r,n)=>{K(t);let i=()=>{},o=[new Promise((t,n)=>{let o=e({predicate:r,effect:(e,r)=>{r.unsubscribe(),t([e,r.getState(),r.getOriginalState()])}});i=()=>{o(),n()}})];null!=n&&o.push(new Promise(e=>setTimeout(e,n,null)));try{let e=await z(t,Promise.race(o));return K(t),e}finally{i()}};return(e,t)=>B(r(e,t))},en=e=>{let{type:t,actionCreator:r,matcher:n,predicate:i,effect:o}=e;if(t)i=u(t).match;else if(r)t=r.type,i=r.match;else if(n)i=n;else if(i);else throw Error(ev(21));return I(o,"options.listener"),{predicate:i,type:t,effect:o}},ei=Y(e=>{let{type:t,predicate:r,effect:n}=en(e);return{id:S(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw Error(ev(22))}}},{withTypes:()=>ei}),eo=(e,t)=>{let{type:r,effect:n,predicate:i}=en(t);return Array.from(e.values()).find(e=>("string"==typeof r?e.type===r:e.predicate===i)&&e.effect===n)},ea=e=>{e.pending.forEach(e=>{G(e,null)})},eu=e=>()=>{e.forEach(ea),e.clear()},es=(e,t,r)=>{try{e(t,r)}catch(e){setTimeout(()=>{throw e},0)}},el=Y(u(`${ee}/add`),{withTypes:()=>el}),ec=Y(u(`${ee}/remove`),{withTypes:()=>ec}),ef=(...e)=>{console.error(`${ee}/error`,...e)},ed=e=>({middleware:e,applied:new Map}),ep=e=>t=>t?.meta?.instanceId===e,ey=e=>"reducerPath"in e&&"string"==typeof e.reducerPath,eh=e=>e.flatMap(e=>ey(e)?[[e.reducerPath,e.reducer]]:Object.entries(e)),em=Symbol.for("rtk-state-proxy-original"),eg=e=>!!e&&!!e[em],ew=new WeakMap,eb=(e,t)=>f(ew,e,()=>new Proxy(e,{get:(e,r,n)=>{if(r===em)return e;let i=Reflect.get(e,r,n);if(void 0===i){let e=t[r.toString()];if(e){let t=e(void 0,{type:S()});if(void 0===t)throw Error(ev(24));return t}}return i}})),eO=e=>{if(!eg(e))throw Error(ev(25));return e[em]},eE=(e={})=>e;function ev(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}console.log(u("action/test")())})();