function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("eWCmQ");function l(e,n){return new Promise(((o,t)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}function u({position:n,delay:o}){e(i).Notify.success(`✅ Fulfilled promise ${n} in ${o}ms`),console.log(`✅ Fulfilled promise ${n} in ${o}ms`)}function s({position:n,delay:o}){e(i).Notify.failure(`❌ Rejected promise ${n} in ${o}ms`),console.log(`❌ Rejected promise ${n} in ${o}ms`)}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();const n=Number(e.currentTarget.elements.delay.value),o=Number(e.currentTarget.elements.step.value),t=Number(e.currentTarget.elements.amount.value);!function(e,n,o){for(let t=0;t<o;t++){l(t,e+t*n).then(u).catch(s)}}(n,o,t)}));
//# sourceMappingURL=03-promises.2436692a.js.map
