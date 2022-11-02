/*!
 * @njt-tools-open/icon-loading - v0.0.0
 * @njt-tools-open/icon-loading is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var IconLoading=function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(){r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var i=e&&e.prototype instanceof f?e:f,o=Object.create(i.prototype),l=new k(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return E()}for(n.method=i,n.arg=o;;){var l=n.delegate;if(l){var s=w(l,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var a=u(t,e,n);if("normal"===a.type){if(r=n.done?"completed":"suspendedYield",a.arg===h)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r="completed",n.method="throw",n.arg=a.arg)}}}(t,n,l),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var h={};function f(){}function d(){}function p(){}var y={};a(y,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==e&&n.call(g,o)&&(y=g);var m=p.prototype=f.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function $(t,e){function r(i,o,l,s){var a=u(t[i],t,o);if("throw"!==a.type){var c=a.arg,h=c.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,l,s)}),(function(t){r("throw",t,l,s)})):e.resolve(h).then((function(t){c.value=t,l(c)}),(function(t){return r("throw",t,l,s)}))}s(a.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=p,a(m,"constructor",p),a(p,"constructor",d),d.displayName=a(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a(t,s,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b($.prototype),a($.prototype,l,(function(){return this})),t.AsyncIterator=$,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var l=new $(c(e,n,r,i),o);return t.isGeneratorFunction(n)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},b(m),a(m,s,"Generator"),a(m,o,(function(){return this})),a(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return l.type="throw",l.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),a=n.call(o,"finallyLoc");if(s&&a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=t,l.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e,n,r,i,o,l){try{var s=t[o](l),a=s.value}catch(t){return void n(t)}s.done?e(a):Promise.resolve(a).then(r,i)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function p(t,e,n){return p=d()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&f(i,n.prototype),i},p.apply(null,arguments)}function y(t){var e="function"==typeof Map?new Map:void 0;return y=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return p(t,arguments,h(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)},y(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}function m(t){var e=d();return function(){var n,r=h(t);if(e){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return g(this,n)}}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=b(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},$.apply(this,arguments)}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],l=!0,s=!1;try{for(n=n.call(t);!(l=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);l=!0);}catch(t){s=!0,i=t}finally{try{l||null==n.return||n.return()}finally{if(s)throw i}}return o}(t,e)||A(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||A(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function S(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=A(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){s=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw o}}}}
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var E,O,x=window,C=x.ShadowRoot&&(void 0===x.ShadyCSS||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol(),j=new WeakMap,R=function(){function t(e,n,r){if(l(this,t),this._$cssResult$=!0,r!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}return a(t,[{key:"styleSheet",get:function(){var t=this.o,e=this.t;if(C&&void 0===t){var n=void 0!==e&&1===e.length;n&&(t=j.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&j.set(e,t))}return t}},{key:"toString",value:function(){return this.cssText}}]),t}(),L=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=1===t.length?t[0]:n.reduce((function(e,n,r){return e+function(t){if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(n)+t[r+1]}),t[0]);return new R(i,t,P)},M=C?function(t){return t}:function(t){return t instanceof CSSStyleSheet?function(t){var e,n="",r=S(t.cssRules);try{for(r.s();!(e=r.n()).done;){n+=e.value.cssText}}catch(t){r.e(t)}finally{r.f()}return function(t){return new R("string"==typeof t?t:t+"",void 0,P)}(n)}(t):t},T=window,U=T.trustedTypes,N=U?U.emptyScript:"",H=T.reactiveElementPolyfillSupport,z={toAttribute:function(t,e){switch(e){case Boolean:t=t?N:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){var n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},D=function(t,e){return e!==t&&(e==e||t==t)},I={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:D},B=function(t){u(c,t);var e,n,s=m(c);function c(){var t;return l(this,c),(t=s.call(this))._$Ei=new Map,t.isUpdatePending=!1,t.hasUpdated=!1,t._$El=null,t.u(),t}return a(c,[{key:"u",value:function(){var t,e=this;this._$E_=new Promise((function(t){return e.enableUpdating=t})),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((function(t){return t(e)}))}},{key:"addController",value:function(t){var e,n;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}},{key:"removeController",value:function(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}},{key:"_$Eg",value:function(){var t=this;this.constructor.elementProperties.forEach((function(e,n){t.hasOwnProperty(n)&&(t._$Ei.set(n,t[n]),delete t[n])}))}},{key:"createRenderRoot",value:function(){var t,e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return function(t,e){C?t.adoptedStyleSheets=e.map((function(t){return t instanceof CSSStyleSheet?t:t.styleSheet})):e.forEach((function(e){var n=document.createElement("style"),r=x.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,t.appendChild(n)}))}(e,this.constructor.elementStyles),e}},{key:"connectedCallback",value:function(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}},{key:"enableUpdating",value:function(t){}},{key:"disconnectedCallback",value:function(){var t;null===(t=this._$ES)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}},{key:"attributeChangedCallback",value:function(t,e,n){this._$AK(t,n)}},{key:"_$EO",value:function(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:I,i=this.constructor._$Ep(t,r);if(void 0!==i&&!0===r.reflect){var o=(void 0!==(null===(n=r.converter)||void 0===n?void 0:n.toAttribute)?r.converter:z).toAttribute(e,r.type);this._$El=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}},{key:"_$AK",value:function(t,e){var n,r=this.constructor,i=r._$Ev.get(t);if(void 0!==i&&this._$El!==i){var o=r.getPropertyOptions(i),l="function"==typeof o.converter?{fromAttribute:o.converter}:void 0!==(null===(n=o.converter)||void 0===n?void 0:n.fromAttribute)?o.converter:z;this._$El=i,this[i]=l.fromAttribute(e,o.type),this._$El=null}}},{key:"requestUpdate",value:function(t,e,n){var r=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||D)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}},{key:"_$Ej",value:(e=r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isUpdatePending=!0,t.prev=1,t.next=4,this._$E_;case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),Promise.reject(t.t0);case 9:if(e=this.scheduleUpdate(),t.t1=null!=e,!t.t1){t.next=14;break}return t.next=14,e;case 14:return t.abrupt("return",!this.isUpdatePending);case 15:case"end":return t.stop()}}),t,this,[[1,6]])})),n=function(){var t=this,n=arguments;return new Promise((function(r,i){var l=e.apply(t,n);function s(t){o(l,r,i,s,a,"next",t)}function a(t){o(l,r,i,s,a,"throw",t)}s(void 0)}))},function(){return n.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){var t,e=this;if(this.isUpdatePending){this.hasUpdated,this._$Ei&&(this._$Ei.forEach((function(t,n){return e[n]=t})),this._$Ei=void 0);var n=!1,r=this._$AL;try{(n=this.shouldUpdate(r))?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw n=!1,this._$Ek(),t}n&&this._$AE(r)}}},{key:"willUpdate",value:function(t){}},{key:"_$AE",value:function(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((function(t){var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}},{key:"_$Ek",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$E_}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;void 0!==this._$EC&&(this._$EC.forEach((function(t,n){return e._$EO(n,e[n],t)})),this._$EC=void 0),this._$Ek()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}}],[{key:"addInitializer",value:function(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}},{key:"observedAttributes",get:function(){var t=this;this.finalize();var e=[];return this.elementProperties.forEach((function(n,r){var i=t._$Ep(r,n);void 0!==i&&(t._$Ev.set(i,r),e.push(i))})),e}},{key:"createProperty",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I;if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){var n="symbol"==i(t)?Symbol():"__"+t,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}},{key:"getPropertyDescriptor",value:function(t,e,n){return{get:function(){return this[e]},set:function(r){var i=this[t];this[e]=r,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){return this.elementProperties.get(t)||I}},{key:"finalize",value:function(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;var t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){var e,n=this.properties,r=S([].concat(_(Object.getOwnPropertyNames(n)),_(Object.getOwnPropertySymbols(n))));try{for(r.s();!(e=r.n()).done;){var i=e.value;this.createProperty(i,n[i])}}catch(t){r.e(t)}finally{r.f()}}return this.elementStyles=this.finalizeStyles(this.styles),!0}},{key:"finalizeStyles",value:function(t){var e=[];if(Array.isArray(t)){var n,r=S(new Set(t.flat(1/0).reverse()));try{for(r.s();!(n=r.n()).done;){var i=n.value;e.unshift(M(i))}}catch(t){r.e(t)}finally{r.f()}}else void 0!==t&&e.push(M(t));return e}},{key:"_$Ep",value:function(t,e){var n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}}]),c}(y(HTMLElement));B.finalized=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},null==H||H({ReactiveElement:B}),(null!==(E=T.reactiveElementVersions)&&void 0!==E?E:T.reactiveElementVersions=[]).push("1.4.1");var G=window,V=G.trustedTypes,F=V?V.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,W="lit$".concat((Math.random()+"").slice(9),"$"),q="?"+W,K="<".concat(q,">"),J=document,Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return J.createComment(t)},Z=function(t){return null===t||"object"!=i(t)&&"function"!=typeof t},Q=Array.isArray,X=function(t){return Q(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])},tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,nt=/>/g,rt=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),it=/'/g,ot=/"/g,lt=/^(?:script|style|textarea|title)$/i,st=function(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return{_$litType$:t,strings:e,values:r}}}(1),at=Symbol.for("lit-noChange"),ct=Symbol.for("lit-nothing"),ut=new WeakMap,ht=J.createTreeWalker(J,129,null,!1),ft=function(t,e){for(var n,r=t.length-1,i=[],o=2===e?"<svg>":"",l=tt,s=0;s<r;s++){for(var a=t[s],c=void 0,u=void 0,h=-1,f=0;f<a.length&&(l.lastIndex=f,null!==(u=l.exec(a)));)f=l.lastIndex,l===tt?"!--"===u[1]?l=et:void 0!==u[1]?l=nt:void 0!==u[2]?(lt.test(u[2])&&(n=RegExp("</"+u[2],"g")),l=rt):void 0!==u[3]&&(l=rt):l===rt?">"===u[0]?(l=null!=n?n:tt,h=-1):void 0===u[1]?h=-2:(h=l.lastIndex-u[2].length,c=u[1],l=void 0===u[3]?rt:'"'===u[3]?ot:it):l===ot||l===it?l=rt:l===et||l===nt?l=tt:(l=rt,n=void 0);var d=l===rt&&t[s+1].startsWith("/>")?" ":"";o+=l===tt?a+K:h>=0?(i.push(c),a.slice(0,h)+"$lit$"+a.slice(h)+W+d):a+W+(-2===h?(i.push(void 0),s):d)}var p=o+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==F?F.createHTML(p):p,i]},dt=function(){function t(e,n){var r,i=e.strings,o=e._$litType$;l(this,t),this.parts=[];var s=0,a=0,c=i.length-1,u=this.parts,h=w(ft(i,o),2),f=h[0],d=h[1];if(this.el=t.createElement(f,n),ht.currentNode=this.el.content,2===o){var p=this.el.content,y=p.firstChild;y.remove(),p.append.apply(p,_(y.childNodes))}for(;null!==(r=ht.nextNode())&&u.length<c;){if(1===r.nodeType){if(r.hasAttributes()){var v,g=[],m=S(r.getAttributeNames());try{for(m.s();!(v=m.n()).done;){var b=v.value;if(b.endsWith("$lit$")||b.startsWith(W)){var $=d[a++];if(g.push(b),void 0!==$){var A=r.getAttribute($.toLowerCase()+"$lit$").split(W),k=/([.?@])?(.*)/.exec($);u.push({type:1,index:s,name:k[2],strings:A,ctor:"."===k[1]?mt:"?"===k[1]?$t:"@"===k[1]?wt:gt})}else u.push({type:6,index:s})}}}catch(t){m.e(t)}finally{m.f()}for(var E=0,O=g;E<O.length;E++){var x=O[E];r.removeAttribute(x)}}if(lt.test(r.tagName)){var C=r.textContent.split(W),P=C.length-1;if(P>0){r.textContent=V?V.emptyScript:"";for(var j=0;j<P;j++)r.append(C[j],Y()),ht.nextNode(),u.push({type:2,index:++s});r.append(C[P],Y())}}}else if(8===r.nodeType)if(r.data===q)u.push({type:2,index:s});else for(var R=-1;-1!==(R=r.data.indexOf(W,R+1));)u.push({type:7,index:s}),R+=W.length-1;s++}}return a(t,null,[{key:"createElement",value:function(t,e){var n=J.createElement("template");return n.innerHTML=t,n}}]),t}();function pt(t,e){var n,r,i,o,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,s=arguments.length>3?arguments[3]:void 0;if(e===at)return e;var a=void 0!==s?null===(n=l._$Co)||void 0===n?void 0:n[s]:l._$Cl,c=Z(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===c?a=void 0:(a=new c(t))._$AT(t,l,s),void 0!==s?(null!==(i=(o=l)._$Co)&&void 0!==i?i:o._$Co=[])[s]=a:l._$Cl=a),void 0!==a&&(e=pt(t,a._$AS(t,e.values),a,s)),e}var yt=function(){function t(e,n){l(this,t),this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}return a(t,[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"v",value:function(t){var e,n=this._$AD,r=n.el.content,i=n.parts,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:J).importNode(r,!0);ht.currentNode=o;for(var l=ht.nextNode(),s=0,a=0,c=i[0];void 0!==c;){if(s===c.index){var u=void 0;2===c.type?u=new vt(l,l.nextSibling,this,t):1===c.type?u=new c.ctor(l,c.name,c.strings,this,t):6===c.type&&(u=new _t(l,this,t)),this.u.push(u),c=i[++a]}s!==(null==c?void 0:c.index)&&(l=ht.nextNode(),s++)}return o}},{key:"p",value:function(t){var e,n=0,r=S(this.u);try{for(r.s();!(e=r.n()).done;){var i=e.value;void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}}catch(t){r.e(t)}finally{r.f()}}}]),t}(),vt=function(){function t(e,n,r,i){var o;l(this,t),this.type=2,this._$AH=ct,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cm=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}return a(t,[{key:"_$AU",get:function(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}},{key:"parentNode",get:function(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;t=pt(this,t,e),Z(t)?t===ct||null==t||""===t?(this._$AH!==ct&&this._$AR(),this._$AH=ct):t!==this._$AH&&t!==at&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):X(t)?this.k(t):this.g(t)}},{key:"O",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._$AB;return this._$AA.parentNode.insertBefore(t,e)}},{key:"T",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}},{key:"g",value:function(t){this._$AH!==ct&&Z(this._$AH)?this._$AA.nextSibling.data=t:this.T(J.createTextNode(t)),this._$AH=t}},{key:"$",value:function(t){var e,n=t.values,r=t._$litType$,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=dt.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.p(n);else{var o=new yt(i,this),l=o.v(this.options);o.p(n),this.T(l),this._$AH=o}}},{key:"_$AC",value:function(t){var e=ut.get(t.strings);return void 0===e&&ut.set(t.strings,e=new dt(t)),e}},{key:"k",value:function(e){Q(this._$AH)||(this._$AH=[],this._$AR());var n,r,i=this._$AH,o=0,l=S(e);try{for(l.s();!(r=l.n()).done;){var s=r.value;o===i.length?i.push(n=new t(this.O(Y()),this.O(Y()),this,this.options)):n=i[o],n._$AI(s),o++}}catch(t){l.e(t)}finally{l.f()}o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}},{key:"_$AR",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,n=arguments.length>1?arguments[1]:void 0;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,n);e&&e!==this._$AB;){var r=e.nextSibling;e.remove(),e=r}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}]),t}(),gt=function(){function t(e,n,r,i,o){l(this,t),this.type=1,this._$AH=ct,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ct}return a(t,[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=this.strings,o=!1;if(void 0===i)t=pt(this,t,e,0),(o=!Z(t)||t!==this._$AH&&t!==at)&&(this._$AH=t);else{var l,s,a=t;for(t=i[0],l=0;l<i.length-1;l++)(s=pt(this,a[n+l],e,l))===at&&(s=this._$AH[l]),o||(o=!Z(s)||s!==this._$AH[l]),s===ct?t=ct:t!==ct&&(t+=(null!=s?s:"")+i[l+1]),this._$AH[l]=s}o&&!r&&this.j(t)}},{key:"j",value:function(t){t===ct?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}]),t}(),mt=function(t){u(n,t);var e=m(n);function n(){var t;return l(this,n),(t=e.apply(this,arguments)).type=3,t}return a(n,[{key:"j",value:function(t){this.element[this.name]=t===ct?void 0:t}}]),n}(gt),bt=V?V.emptyScript:"",$t=function(t){u(n,t);var e=m(n);function n(){var t;return l(this,n),(t=e.apply(this,arguments)).type=4,t}return a(n,[{key:"j",value:function(t){t&&t!==ct?this.element.setAttribute(this.name,bt):this.element.removeAttribute(this.name)}}]),n}(gt),wt=function(t){u(n,t);var e=m(n);function n(t,r,i,o,s){var a;return l(this,n),(a=e.call(this,t,r,i,o,s)).type=5,a}return a(n,[{key:"_$AI",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;if((t=null!==(e=pt(this,t,n,0))&&void 0!==e?e:ct)!==at){var r=this._$AH,i=t===ct&&r!==ct||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==ct&&(r===ct||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}]),n}(gt),_t=function(){function t(e,n,r){l(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}return a(t,[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){pt(this,t)}}]),t}(),At=G.litHtmlPolyfillSupport;null==At||At(dt,vt),(null!==(O=G.litHtmlVersions)&&void 0!==O?O:G.litHtmlVersions=[]).push("2.4.0");var kt,St,Et=function(t){u(n,t);var e=m(n);function n(){var t;return l(this,n),(t=e.apply(this,arguments)).renderOptions={host:v(t)},t._$Do=void 0,t}return a(n,[{key:"createRenderRoot",value:function(){var t,e,r=$(h(n.prototype),"createRenderRoot",this).call(this);return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}},{key:"update",value:function(t){var e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),$(h(n.prototype),"update",this).call(this,t),this._$Do=function(t,e,n){var r,i,o=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:e,l=o._$litPart$;if(void 0===l){var s=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;o._$litPart$=l=new vt(e.insertBefore(Y(),s),s,void 0,null!=n?n:{})}return l._$AI(t),l}(e,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;$(h(n.prototype),"connectedCallback",this).call(this),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;$(h(n.prototype),"disconnectedCallback",this).call(this),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}},{key:"render",value:function(){return at}}]),n}(B);
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Et.finalized=!0,Et._$litElement$=!0,null===(kt=globalThis.litElementHydrateSupport)||void 0===kt||kt.call(globalThis,{LitElement:Et});var Ot=globalThis.litElementPolyfillSupport;null==Ot||Ot({LitElement:Et}),(null!==(St=globalThis.litElementVersions)&&void 0!==St?St:globalThis.litElementVersions=[]).push("3.2.2");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var xt;function Ct(t){return function(e,r){return void 0!==r?function(t,e,n){e.constructor.createProperty(n,t)}(t,e,r):function(t,e){return"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?n(n({},e),{},{finisher:function(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer:function(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher:function(n){n.createProperty(e.key,t)}}}(t,e)}}
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
/*!
   * @njt-tools-open/icon-loading-circle-1 - v0.0.0
   * @njt-tools-open/icon-loading-circle-1 is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   */
function Pt(t){return Pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pt(t)}function jt(t,e,n,r){var i,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":Pt(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(l=(o<3?i(l):o>3?i(e,n,l):i(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l}null===(xt=window.HTMLSlotElement)||void 0===xt||xt.prototype.assignedElements;const Rt=({width:t="100%",fills:e=["#306fbe"]})=>{class n extends Et{constructor(){super(...arguments),this.width=t,this.fills=e,this.svg=()=>{const{fills:t}=this;return st`<svg
        viewBox="0 0 1024 1024"
        version="1.1"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3 0.1 19.9-16 36-35.9 36z"
          fill="${t[0]}"
        ></path>
      </svg>`}}render(){const{width:t}=this;return st` <section style="${`width: ${t}; height: ${t}`}">${this.svg()}</section> `}connectedCallback(){super.connectedCallback()}}return n.styles=L`
      @keyframes loadingCircle {
        to {
          transform: rotate(360deg);
        }
      }
      :host {
        display: inline-block;
        vertial-align: middle;
        width: 100%;
        height: 100%;
      }
      section {
        display: inline-block;
      }
      svg {
        animation: loadingCircle 1s infinite linear;
      }
    `,jt([Ct()],n.prototype,"width",void 0),jt([Ct({type:Array})],n.prototype,"fills",void 0),n};let Lt=!1;
/*!
   * @njt-tools-open/icon-loading-circle-2 - v0.0.0
   * @njt-tools-open/icon-loading-circle-2 is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   */
function Mt(t){return Mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mt(t)}function Tt(t,e,n,r){var i,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":Mt(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(l=(o<3?i(l):o>3?i(e,n,l):i(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l}const Ut=({width:t="100%",fills:e=["#306fbe"]})=>{class n extends Et{constructor(){super(...arguments),this.width=t,this.fills=e,this.svg=()=>{const{fills:t}=this;return st`<svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <path
          fill="${t[0]}"
          d="M381.838313 867.335265c12.074748 12.074748 18.419107 27.526332 18.419107 45.945438s-6.037374 33.973019-18.419107 46.559408c-12.074748 12.58639-27.321675 18.726092-45.433796 18.726092s-33.154392-6.242031-45.433796-18.726092c-12.074748-12.58639-18.419107-27.935645-18.419107-46.559408 0-18.419107 6.037374-33.768362 18.419107-45.945438 12.074748-12.074748 27.321675-18.521435 45.433796-19.340062C354.516638 848.609174 369.45658 854.953533 381.838313 867.335265z"
        ></path>
        <path
          fill="${t[0]}"
          d="M497.981013 890.666134c-16.065554 0-29.470571 5.62806-40.317378 16.679524-10.846807 11.051464-16.270211 24.763466-16.270211 41.340662 0 16.270211 5.423404 29.879884 16.270211 40.726691 10.846807 10.846807 24.354152 16.270211 40.726691 16.270211s29.879884-5.423404 40.726691-16.270211 16.270211-24.354152 16.270211-40.726691-5.423404-29.982212-16.270211-41.340662C528.474868 896.294194 514.660538 890.666134 497.981013 890.666134z"
        ></path>
        <path
          fill="${t[0]}"
          d="M190.279604 733.182772c-20.874988 0.61397-38.168482 7.879285-51.778155 21.386629-13.609673 13.507345-20.465674 30.596183-20.465674 51.061857s6.958329 37.554512 20.465674 51.061857 30.596183 20.465674 51.061857 20.465674 37.554512-6.958329 51.061857-20.465674c13.507345-13.507345 20.465674-30.596183 20.465674-51.061857s-6.958329-37.554512-20.465674-51.061857C227.117818 741.062057 210.540622 733.796742 190.279604 733.182772z"
        ></path>
        <path
          fill="${t[0]}"
          d="M225.787549 273.216748c26.503048-0.61397 48.605976-10.02818 66.308784-27.730988 17.702808-17.702808 26.707705-40.010393 26.707705-66.820426s-9.004897-49.015289-26.707705-66.820426c-17.702808-17.702808-39.805736-26.503048-66.308784-26.503048s-48.605976 9.004897-66.308784 26.707705-26.707705 40.010393-26.707705 66.820426 9.004897 49.015289 26.707705 66.820426C177.181573 263.495553 199.284501 272.50045 225.787549 273.216748z"
        ></path>
        <path
          fill="${t[0]}"
          d="M89.076846 486.059758c24.354152-0.61397 44.615169-9.209553 61.192365-25.684421 16.270211-16.270211 24.558809-36.735885 24.558809-61.192365 0-24.354152-8.083941-44.615169-24.558809-61.192365-16.270211-16.270211-36.940542-24.558809-61.49935-24.558809s-45.22914 8.083941-61.49935 24.558809c-16.474868 16.679524-24.558809 36.940542-24.558809 61.397022 0 24.354152 8.083941 44.615169 24.558809 61.192365C43.438393 476.850205 64.108724 485.34346 89.076846 486.059758z"
        ></path>
        <path
          fill="${t[0]}"
          d="M170.530229 627.886879c-0.61397-22.921555-8.595583-41.852303-23.637854-56.894574s-33.768362-22.512241-56.280604-22.512241-41.340662 7.469971-56.280604 22.512241-22.512241 33.768362-22.512241 56.280604 7.469971 41.340662 22.512241 56.280604 33.768362 22.512241 56.280604 22.512241 41.340662-7.469971 56.280604-22.512241C161.934646 668.715899 169.916259 650.092136 170.530229 627.886879z"
        ></path>
        <path
          fill="${t[0]}"
          d="M964.905366 519.316478c-3.78615-4.195463-9.004897-6.242031-15.246927-6.242031s-11.460777 2.046567-15.656241 6.242031c-4.195463 4.195463-6.242031 9.41421-6.242031 15.656241s2.046567 11.460777 6.242031 15.656241 9.41421 6.242031 15.656241 6.242031c6.242031 0 11.256121-2.046567 15.246927-6.242031 3.78615-4.195463 5.832717-9.41421 5.832717-15.656241S968.589188 523.61427 964.905366 519.316478z"
        ></path>
        <path
          fill="${t[0]}"
          d="M927.760168 619.495953c-8.288598 0-15.246927 2.660538-20.874988 8.288598s-8.288598 12.58639-8.288598 20.874988 2.660538 15.246927 8.288598 20.874988 12.58639 8.288598 20.874988 8.288598 15.246927-2.660538 20.465674-8.288598 7.879285-12.58639 7.879285-20.874988-2.660538-15.246927-7.879285-20.874988C942.904767 622.258819 936.048766 619.495953 927.760168 619.495953z"
        ></path>
        <path
          fill="${t[0]}"
          d="M780.611972 811.463975c-12.58639 0.61397-22.716898 5.01409-30.903168 13.098031-7.879285 7.879285-12.074748 18.419107-12.074748 30.903168 0 12.58639 3.990806 22.921555 12.074748 31.312481 7.879285 8.288598 18.419107 12.58639 30.903168 12.58639s22.921555-4.195463 31.312481-12.58639c8.288598-8.288598 12.58639-18.726092 12.58639-31.312481s-4.195463-22.716898-12.58639-30.903168C803.533527 816.375737 793.198361 812.077945 780.611972 811.463975z"
        ></path>
        <path
          fill="${t[0]}"
          d="M655.464375 872.963326c-13.916658 0-25.684421 4.809433-35.507944 14.632957-9.823524 9.823524-14.632957 21.693614-14.632957 36.019586 0 14.223643 4.809433 26.298391 14.632957 36.019586 9.823524 9.823524 21.693614 14.632957 36.019586 14.632957 14.223643 0 26.093734-4.809433 35.507944-14.632957 9.41421-9.823524 14.223643-21.693614 14.223643-36.019586 0-14.223643-4.809433-26.298391-14.223643-36.019586C682.274408 877.772759 670.097332 872.963326 655.464375 872.963326z"
        ></path>
        <path
          fill="${t[0]}"
          d="M871.377236 722.745278c-9.823524 0.61397-18.21445 4.297792-24.968122 11.051464-6.958329 6.753672-10.437494 15.246927-10.437494 25.684421s3.581493 19.135405 10.437494 26.093734c6.958329 6.958329 15.451584 10.437494 25.684421 10.437494 10.02818 0 18.521435-3.581493 25.684421-10.437494 6.958329-6.958329 10.437494-15.656241 10.437494-26.093734s-3.581493-18.930748-10.437494-25.684421C890.61497 727.145398 881.81473 723.461577 871.377236 722.745278z"
        ></path>
      </svg>`}}render(){const{width:t}=this;return st` <section style="${`width: ${t}; height: ${t}`}">${this.svg()}</section> `}connectedCallback(){super.connectedCallback()}}return n.styles=L`
      @keyframes loadingCircle {
        to {
          transform: rotate(360deg);
        }
      }
      :host {
        display: inline-block;
        vertial-align: middle;
        width: 100%;
        height: 100%;
      }
      section {
        display: inline-block;
      }
      svg {
        animation: loadingCircle 2s infinite linear;
      }
    `,Tt([Ct()],n.prototype,"width",void 0),Tt([Ct({type:Array})],n.prototype,"fills",void 0),n};let Nt=!1;
/*!
   * @njt-tools-open/icon-loading-circle-3 - v0.0.0
   * @njt-tools-open/icon-loading-circle-3 is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   */
function Ht(t){return Ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ht(t)}function zt(t,e,n,r){var i,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":Ht(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(l=(o<3?i(l):o>3?i(e,n,l):i(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l}const Dt=({width:t="100%",fills:e=["#306fbe"]})=>{class n extends Et{constructor(){super(...arguments),this.width=t,this.fills=e,this.svg=()=>{const{fills:t}=this;return st`<svg
        viewBox="0 0 1024 1024"
        width="100%"
        height="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
      >
        <path
          fill="${t[0]}"
          d="M832 512c0-176-144-320-320-320V128c211.2 0 384 172.8 384 384h-64zM192 512c0 176 144 320 320 320v64C300.8 896 128 723.2 128 512h64z"
        ></path>
      </svg>`}}render(){const{width:t}=this;return st` <section style="${`width: ${t}; height: ${t}`}">${this.svg()}</section> `}connectedCallback(){super.connectedCallback()}}return n.styles=L`
      @keyframes loadingCircle {
        to {
          transform: rotate(360deg);
        }
      }
      :host {
        display: inline-block;
        vertial-align: middle;
        width: 100%;
        height: 100%;
      }
      section {
        display: inline-block;
      }
      svg {
        animation: loadingCircle 1s infinite linear;
      }
    `,zt([Ct()],n.prototype,"width",void 0),zt([Ct({type:Array})],n.prototype,"fills",void 0),n};let It=!1;
/*!
   * @njt-tools-open/icon-loading-circle-4 - v0.0.0
   * @njt-tools-open/icon-loading-circle-4 is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   */
function Bt(t){return Bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bt(t)}function Gt(t,e,n,r){var i,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":Bt(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(l=(o<3?i(l):o>3?i(e,n,l):i(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l}const Vt=({width:t="100%",fills:e=["#306fbe"]})=>{class n extends Et{constructor(){super(...arguments),this.width=t,this.fills=e,this.svg=()=>{const{fills:t}=this;return st`
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
          <circle cx="512" cy="60" r="60" fill="${t[0]}" />
        </svg>
      `}}render(){const{width:t}=this;return st` <section style="${`width: ${t}; height: ${t}`}">${this.svg()}</section> `}connectedCallback(){super.connectedCallback()}}return n.styles=L`
      :host {
        display: inline-block;
        vertial-align: middle;
        width: 100%;
        height: 100%;
      }
      @keyframes loadingCircle {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      section {
        display: inline-block;
      }
      circle {
        transform-origin: center;
        animation: loadingCircle 1.2s linear infinite;
      }
      circle:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
      }
      circle:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
      }
      circle:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
      }
      circle:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
      }
      circle:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
      }
      circle:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
      }
      circle:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
      }
      circle:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
      }
      circle:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
      }
      circle:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
      }
      circle:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
      }
      circle:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
      }
    `,Gt([Ct()],n.prototype,"width",void 0),Gt([Ct({type:Array})],n.prototype,"fills",void 0),n};let Ft=!1;
/*!
   * @njt-tools-open/icon-loading-circle-5 - v0.0.0
   * @njt-tools-open/icon-loading-circle-5 is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   */
function Wt(t){return Wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wt(t)}function qt(t,e,n,r){var i,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":Wt(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(l=(o<3?i(l):o>3?i(e,n,l):i(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l}const Kt=({width:t="100%",fills:e=["#306fbe"]})=>{class n extends Et{constructor(){super(...arguments),this.width=t,this.fills=e,this.svg=()=>{const{fills:t}=this;return st`
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <circle
            cx="512"
            cy="512"
            r="476"
            stroke="#efefef"
            stroke-width="70"
            fill="rgba(0, 0, 0, 0)"
          />
          <path
            d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3 0.1 19.9-16 36-35.9 36z"
            fill="${t[0]}"
          ></path>
        </svg>
      `}}render(){const{width:t}=this;return st` <section style="${`width: ${t}; height: ${t}`}">${this.svg()}</section> `}connectedCallback(){super.connectedCallback()}}return n.styles=L`
      :host {
        display: inline-block;
        vertial-align: middle;
        width: 100%;
        height: 100%;
      }
      @keyframes loadingCircle {
        100% {
          transform: rotate(360deg);
        }
      }
      section {
        display: inline-block;
      }
      svg {
        animation: loadingCircle 1s infinite linear;
      }
    `,qt([Ct()],n.prototype,"width",void 0),qt([Ct({type:Array})],n.prototype,"fills",void 0),n};let Jt=!1;return t.registerCircle1=(t="loading-circle-1",e={})=>{if(Lt)return;Lt=!0;const n=Rt(e);window.customElements.define(t,n)},t.registerCircle2=(t="loading-circle-2",e={})=>{if(Nt)return;Nt=!0;const n=Ut(e);window.customElements.define(t,n)},t.registerCircle3=(t="loading-circle-3",e={})=>{if(It)return;It=!0;const n=Dt(e);window.customElements.define(t,n)},t.registerCircle4=(t="loading-circle-4",e={})=>{if(Ft)return;Ft=!0;const n=Vt(e);window.customElements.define(t,n)},t.registerCircle5=(t="loading-circle-5",e={})=>{if(Jt)return;Jt=!0;const n=Kt(e);window.customElements.define(t,n)},Object.defineProperty(t,"__esModule",{value:!0}),t}({});
//# sourceMappingURL=index.js.map
