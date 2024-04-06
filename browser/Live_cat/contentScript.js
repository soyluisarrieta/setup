!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=89)}({11:function(e,t,n){"use strict";t.a=e=>new Promise(t=>t(e()))},21:function(e,t,n){"use strict";t.a=e=>new Promise((t,n)=>{chrome.runtime.sendMessage(e,e=>{const r=chrome.runtime.lastError;r?n(r):t(e)})}).then(e=>{if(!e)throw new Error("Response is empty");if(e.error)throw Object.assign(new Error,e.error);return e.result})},39:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw s}}return n}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}class i extends Error{constructor(e){super(i._prepareSuperMessage(e)),this.name="NonError",Error.captureStackTrace&&Error.captureStackTrace(this,i)}static _prepareSuperMessage(e){try{return JSON.stringify(e)}catch(t){return String(e)}}}const a=["name","message","stack","code"],c=(e,t,n)=>{const s=n||(Array.isArray(e)?[]:{});t.push(e);for(var i=0,l=Object.entries(e);i<l.length;i++){const n=r(l[i],2),o=n[0],a=n[1];"function"!=typeof a&&(a&&"object"==typeof a?t.includes(e[o])?s[o]="[Circular]":s[o]=c(e[o],t.slice()):s[o]=a)}var u,f=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=o(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,i=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,s=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw s}}}}(a);try{for(f.s();!(u=f.n()).done;){const t=u.value;"string"==typeof e[t]&&(s[t]=e[t])}}catch(e){f.e(e)}finally{f.f()}return s};e.exports={serializeError:e=>"object"==typeof e&&null!==e?c(e,[]):"function"==typeof e?`[Function: ${e.name||"anonymous"}]`:e,deserializeError:e=>{if(e instanceof Error)return e;if("object"==typeof e&&null!==e&&!Array.isArray(e)){const t=new Error;return c(e,[],t),t}return new i(e)}}},89:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){}));var r=n(11),o=n(39);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=()=>{},a=new WeakMap;var c=class{constructor(e,t){s(this,"listener",(e,t,n)=>{switch(e.action){case"callFn":return this.responseFn(e,n),!0}}),s(this,"callFn",(e,t=[])=>this.waitPromise({action:"callFn",fn:e,args:t})),this.scope=t,this.pageId=parseInt(1e3*Math.random(),10),this.callbackId=0,this.callbackIdCallback={},this.listeners=[],this.transport=e,this.onMessage(this.listener)}onMessage(e){const t=this.listeners,n=this.callbackIdCallback;!t.length&&this.transport.onMessage((e,r)=>{if(r.responseId){const e=n[r.responseId];return void(e?e(r.message):console.error("Callback is not found",r))}let o;o=r.callbackId?function(e){let t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}(e=>{this.transport.sendMessage({responseId:r.callbackId,message:e})}):i;let s=null;t.forEach(t=>{try{const n=t(r.message,{event:e},o);!0===n&&(s=n)}catch(e){console.error("Call listener error",e)}}),!0!==s&&o()}),t.push(e)}sendMessage(e,t){const n=this.callbackIdCallback,r={message:e};if(t){r.callbackId=this.pageId+ ++this.callbackId;const e=e=>{delete n[r.callbackId],t(e)};a.has(t)&&(a.delete(t),a.set(e,!0)),n[r.callbackId]=e}try{this.transport.sendMessage(r)}catch(e){throw delete n[r.callbackId],e}}waitPromise(e){return new Promise((t,n)=>{const r=e=>e.err?n(Object(o.deserializeError)(e.err)):t(e.result);a.set(r,!0),this.sendMessage(e,r)})}responsePromise(e,t){return e.then(e=>{t({result:e})},e=>{t({err:Object(o.serializeError)(e)})}).catch((function(e){console.error("responsePromise error",e)})),!0}resolvePath(e){const t=e.split("."),n=t.pop();let r=this.scope;for(;t.length;)r=r[t.shift()];return{scope:r,endPoint:n}}responseFn(e,t){const n=Object(r.a)(()=>{const t=this.resolvePath(e.fn),n=t.scope;return n[t.endPoint].apply(n,e.args)});return this.responsePromise(n,t)}},l=n(9);Error;var u=n(21);function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={createFetchInstance:({url:e,options:t})=>Object(l.c)(()=>{const n=t||{};n.responseStatus,n.responseOk,n.responseType,f(n,["responseStatus","responseOk","responseType"]);{const n=Object(l.a)({apiCall:(e,t)=>Object(u.a)({action:e,options:t})},()=>Object(u.a)({action:"createFetchInstance",url:e,options:t}),["abort"]),r=n.then(({response:e,body:n})=>("arrayBuffer"===t.responseType&&(n=function(e){const t=e.length,n=new Uint8Array(t);for(let r=0;r<t;r++)n[r]=e.charCodeAt(r);return n.buffer}(n)),{response:e,body:n}));return r.abort=()=>n.abort(),r}},["abort"]),instanceInit:({id:e})=>Object(l.d)(e),instanceCallFn:({id:e,path:t,args:n})=>Object(l.b)(e,t,n),ping:()=>!0};function d(){return chrome.runtime.getManifest().version}window.addEventListener("message",({data:e,ports:[t]})=>{"EXTENSION_INIT"===e&&function(e){new c({onMessage:t=>{e.onmessage=e=>t(e,e.data)},sendMessage:t=>e.postMessage(t)},p).callFn("ready",[{version:d()}])}(t)})},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return f}));var r=n(11);class o extends Error{constructor(e,t){super(e),this.code=t}}var s=o;const i=new Map;let a=0;const c=(e,t=[])=>{a>1e5&&(a=0);let n,r=0;for(;0===r||i.has(r);)r=++a;const o=new Promise(e=>{n=e});return i.set(r,{initFn:e,onInit:n,whenInit:o}),{id:r,methods:t}},l=e=>{const t=d(e);let n=null;try{t.init=t.initFn(),t.onInit()}catch(e){n=e,t.onInit(Promise.reject(new s("call initFn error","CALL_INIT_FN_ERROR")))}if(t.initFn=t.onInit=void 0,Object(r.a)(()=>t.init).then(()=>{i.delete(e)},t=>{i.delete(e)}),n)throw n;return t.init},u=(e,t,n=[])=>{const r=d(e);return r.whenInit.then(()=>{const e=function(e,t){const n=t.split("."),r=n.pop();let o=e;for(;n.length;)o=o[n.shift()];return{scope:o,endPoint:r}}(r.init,t),o=e.scope;return o[e.endPoint].apply(o,n)})},f=(e,t,n=[])=>{e.instanceInit=e.instanceInit||"instanceInit",e.instanceCallFn=e.instanceCallFn||"instanceCallFn";let o=null;const i={id:null,whenInit:new Promise(e=>{o=e})};return i.resultPromise=Object(r.a)(t).then(({id:t,methods:n})=>{i.id=t;const r=e.apiCall(e.instanceInit,{id:t});return r.then(()=>{i.id=null},e=>{i.id=null}),p(i,n,e),o(),r},e=>{throw o(Promise.reject(new s("Init remote instance error","INIT_REMOTE_INSTANCE_ERROR"))),e}),p(i,n,e),i.resultPromise};function p(e,t,n){for(let r,o=0;r=t[o];o++)e.resultPromise[r]=(...t)=>e.whenInit.then(()=>{if(!e.id)throw new s("Instance is done","INSTANCE_DONE");return n.apiCall(n.instanceCallFn,{id:e.id,path:r,args:t})})}function d(e){const t=i.get(e);if(!t)throw new s("Instance is not found","INSTANCE_IS_NOT_FOUND");return t}}});