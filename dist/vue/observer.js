!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var r={exports:{}};t(r.exports),e.observer=r.exports}}(this,function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=["push","pop","shift","unshift","splice","sort","reverse"],c=function(e,t,r){e.hasOwnProperty(t)||Object.defineProperty(e,t,{value:r,enumerable:!1,configurable:!1})},a=function(e){function t(){for(var e,o=arguments.length,i=Array(o),f=0;f<o;f++)i[f]=arguments[f];r(this,t);var a=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return u.forEach(function(e){c(a,e,function(){var t=Array.prototype[e].apply(this,arguments);return t})}),a}return o(t,e),t}(Array),s=function(){function e(t,n,o){r(this,e),this.__watcher__=n,this.__root__=o,this.walk(t)}return f(e,[{key:"walk",value:function(r){var n=void 0;for(var o in r)r.hasOwnProperty(o)&&(n=r[o],Array.isArray(n)?n=new(Function.prototype.bind.apply(a,[null].concat(t(n)))):"object"===("undefined"==typeof n?"undefined":i(n))&&(n=new e(n,this.__watcher__,o)),this.convert(o,n))}},{key:"convert",value:function(e,t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:function(){return t},set:function(r){if(r!==t&&(r===r||t===t)){var n=this.__root__||e;this.__watcher__&&this.__watcher__[n]&&this.__watcher__[n].forEach(function(e){return e(r)}),t=r,this.__watcher__.__render__()}}})}}]),e}();e["default"]=s});