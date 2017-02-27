!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var r={exports:{}};t(r.exports),e.observer=r.exports}}(this,function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=["push","pop","shift","unshift","splice","sort","reverse"],c=function(e,t,r){e.hasOwnProperty(t)||Object.defineProperty(e,t,{value:r,enumerable:!1,configurable:!1})},a=function(e){function t(){for(var e,o=arguments.length,i=Array(o),f=0;f<o;f++)i[f]=arguments[f];r(this,t);var a=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return u.forEach(function(e){c(a,e,function(){var t=Array.prototype[e].apply(this,arguments);return t})}),a}return o(t,e),t}(Array),s=function(){function e(t,n,o){r(this,e),this.__watcher__=n,this.__root__=o,this.walk(t)}return f(e,[{key:"walk",value:function(r){var n=void 0;for(var o in r)r.hasOwnProperty(o)&&(n=r[o],Array.isArray(n)?n=new(Function.prototype.bind.apply(a,[null].concat(t(n)))):"object"===("undefined"==typeof n?"undefined":i(n))&&(n=new e(n,this.__watcher__,o)),this.convert(o,n))}},{key:"convert",value:function(e,t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:function(){return t},set:function(r){if(r!==t&&(r===r||t===t)){var n=this.__root__||e;this.__watcher__&&this.__watcher__[n]&&this.__watcher__[n].forEach(function(e){return e(r)}),t=r,this.__watcher__.__render__()}}})}}]),e}();e["default"]=s});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZ1ZS9vYnNlcnZlci5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZGVmaW5lIiwiYW1kIiwiZXhwb3J0cyIsIm1vZCIsIm9ic2VydmVyIiwidGhpcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJhcnIyIiwibGVuZ3RoIiwiZnJvbSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJjYWxsIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkZWZpbmVQcm9wZXJ0eSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJtZXRob2RzIiwiZGVmUHJvdG90eXBlIiwibWV0aG9kIiwidiIsImhhc093blByb3BlcnR5IiwiQXJyYXlQcm94eSIsIl9BcnJheSIsIl9yZWYiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIl9rZXkiLCJfdGhpcyIsImdldFByb3RvdHlwZU9mIiwiYXBwbHkiLCJjb25jYXQiLCJmb3JFYWNoIiwicmVzdWx0IiwiT2JzZXJ2ZXIiLCJkYXRhIiwid2F0Y2hlciIsInJvb3QiLCJfX3dhdGNoZXJfXyIsIl9fcm9vdF9fIiwid2FsayIsInZhbCIsImNvbnZlcnQiLCJnZXQiLCJzZXQiLCJuZXdWYWwiLCJrIiwiZm4iLCJfX3JlbmRlcl9fIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFXQSxFQUFRQyxHQUNsQixHQUFzQixrQkFBWEMsU0FBeUJBLE9BQU9DLElBQzFDRCxRQUFRLFdBQVlELE9BQ2QsSUFBdUIsbUJBQVpHLFNBQ2pCSCxFQUFRRyxhQUNGLENBQ04sR0FBSUMsSUFDSEQsV0FFREgsR0FBUUksRUFBSUQsU0FDWkosRUFBT00sU0FBV0QsRUFBSUQsVUFFckJHLEtBQU0sU0FBVUgsR0FDbEIsWUFZQSxTQUFTSSxHQUFtQkMsR0FDM0IsR0FBSUMsTUFBTUMsUUFBUUYsR0FBTSxDQUN2QixJQUFLLEdBQUlHLEdBQUksRUFBR0MsRUFBT0gsTUFBTUQsRUFBSUssUUFBU0YsRUFBSUgsRUFBSUssT0FBUUYsSUFDekRDLEVBQUtELEdBQUtILEVBQUlHLEVBR2YsT0FBT0MsR0FFUCxNQUFPSCxPQUFNSyxLQUFLTixHQXNCcEIsUUFBU08sR0FBZ0JDLEVBQVVDLEdBQ2xDLEtBQU1ELFlBQW9CQyxJQUN6QixLQUFNLElBQUlDLFdBQVUscUNBSXRCLFFBQVNDLEdBQTJCQyxFQUFNQyxHQUN6QyxJQUFLRCxFQUNKLEtBQU0sSUFBSUUsZ0JBQWUsNERBRzFCLFFBQU9ELEdBQXlCLGdCQUFUQSxJQUFxQyxrQkFBVEEsR0FBOEJELEVBQVBDLEVBRzNFLFFBQVNFLEdBQVVDLEVBQVVDLEdBQzVCLEdBQTBCLGtCQUFmQSxJQUE0QyxPQUFmQSxFQUN2QyxLQUFNLElBQUlQLFdBQVUsaUVBQW9FTyxHQUd6RkQsR0FBU0UsVUFBWUMsT0FBT0MsT0FBT0gsR0FBY0EsRUFBV0MsV0FDM0RHLGFBQ0NDLE1BQU9OLEVBQ1BPLFlBQVksRUFDWkMsVUFBVSxFQUNWQyxjQUFjLEtBR1pSLElBQVlFLE9BQU9PLGVBQWlCUCxPQUFPTyxlQUFlVixFQUFVQyxHQUFjRCxFQUFTVyxVQUFZVixHQW5FNUdFLE9BQU9TLGVBQWVqQyxFQUFTLGNBQzlCMkIsT0FBTyxHQUdSLElBQUlPLEdBQTRCLGtCQUFYQyxTQUFvRCxnQkFBcEJBLFFBQU9DLFNBQXdCLFNBQVVDLEdBQzdGLGFBQWNBLElBQ1gsU0FBVUEsR0FDYixNQUFPQSxJQUF5QixrQkFBWEYsU0FBeUJFLEVBQUlYLGNBQWdCUyxRQUFVRSxJQUFRRixPQUFPWixVQUFZLGVBQWtCYyxJQWV0SEMsRUFBZSxXQUNsQixRQUFTQyxHQUFpQkMsRUFBUUMsR0FDakMsSUFBSyxHQUFJakMsR0FBSSxFQUFHQSxFQUFJaUMsRUFBTS9CLE9BQVFGLElBQUssQ0FDdEMsR0FBSWtDLEdBQWFELEVBQU1qQyxFQUN2QmtDLEdBQVdkLFdBQWFjLEVBQVdkLGFBQWMsRUFDakRjLEVBQVdaLGNBQWUsRUFDdEIsU0FBV1ksS0FBWUEsRUFBV2IsVUFBVyxHQUNqREwsT0FBT1MsZUFBZU8sRUFBUUUsRUFBV0MsSUFBS0QsSUFJaEQsTUFBTyxVQUFVNUIsRUFBYThCLEVBQVlDLEdBR3pDLE1BRklELElBQVlMLEVBQWlCekIsRUFBWVMsVUFBV3FCLEdBQ3BEQyxHQUFhTixFQUFpQnpCLEVBQWErQixHQUN4Qy9CLE1BbERKZ0MsR0FBVyxPQUFRLE1BQU8sUUFBUyxVQUFXLFNBQVUsT0FBUSxXQUdoRUMsRUFBZSxTQUFDVixFQUFLVyxFQUFRQyxHQUM5QlosRUFBSWEsZUFBZUYsSUFFdkJ4QixPQUFPUyxlQUFlSSxFQUFLVyxHQUMxQnJCLE1BQU9zQixFQUNQckIsWUFBWSxFQUNaRSxjQUFjLEtBS1ZxQixFQXNGWSxTQUFVQyxHQXJGM0IsUUFBQUQsS0FBcUIsSUFBQSxHQUFBRSxHQUFBQyxFQUFBQyxVQUFBN0MsT0FBTjhDLEVBQU1sRCxNQUFBZ0QsR0FBQUcsRUFBQSxFQUFBQSxFQUFBSCxFQUFBRyxJQUFORCxFQUFNQyxHQUFBRixVQUFBRSxFQUFBN0MsR0FBQVQsS0FBQWdELEVBQUEsSUFBQU8sR0FBQTFDLEVBQUFiLE1BQUFrRCxFQUFBRixFQUFBbkIsV0FBQVIsT0FBQW1DLGVBQUFSLElBQUFqQyxLQUFBMEMsTUFBQVAsR0FBQWxELE1BQUEwRCxPQUNYTCxJQURXLE9BRXBCVixHQUFRZ0IsUUFBUSxTQUFDZCxHQUNoQkQsRUFBQUEsRUFBbUJDLEVBQVEsV0FDMUIsR0FBSWUsR0FBU3pELE1BQU1pQixVQUFVeUIsR0FBUVksTUFBTXpELEtBQU1vRCxVQUNqRCxPQUFPUSxPQUxXTCxFQTRHcEIsTUF0QkF0QyxHQUFVK0IsRUFBWUMsR0FzQmZELEdBN0dnQjdDLE9BZUowRCxFQWlHTCxXQWhHZixRQUFBQSxHQUFhQyxFQUFNQyxFQUFTQyxHQUFNdkQsRUFBQVQsS0FBQTZELEdBQ2pDN0QsS0FBS2lFLFlBQWNGLEVBQ25CL0QsS0FBS2tFLFNBQVdGLEVBQ2hCaEUsS0FBS21FLEtBQUtMLEdBb0pWLE1BOUNBM0IsR0FBYTBCLElBQ1pyQixJQUFLLE9BQ0xoQixNQUFPLFNBdEdIVSxHQUNMLEdBQUlrQyxHQUFBQSxNQUNKLEtBQUssR0FBSTVCLEtBQU9OLEdBQ1hBLEVBQUlhLGVBQWVQLEtBQ3RCNEIsRUFBTWxDLEVBQUlNLEdBRU5yQyxNQUFNQyxRQUFRZ0UsR0FDakJBLEVBQUFBLElBQUFBLFNBQUFBLFVBQUFBLEtBQUFBLE1BQVVwQixHQUFWLE1BQUFVLE9BQUF6RCxFQUF3Qm1FLE1BRUQsWUFBZixtQkFBT0EsR0FBUCxZQUFBckMsRUFBT3FDLE1BQ2ZBLEVBQU0sR0FBSVAsR0FBU08sRUFBS3BFLEtBQUtpRSxZQUFhekIsSUFHM0N4QyxLQUFLcUUsUUFBUTdCLEVBQUs0QixPQTBHbkI1QixJQUFLLFVBQ0xoQixNQUFPLFNBdkdBZ0IsRUFBS2hCLEdBQ2JILE9BQU9TLGVBQWU5QixLQUFNd0MsR0FDM0JmLFlBQVksRUFDWkUsY0FBYyxFQUNkMkMsSUFBSyxXQUVKLE1BQU85QyxJQUVSK0MsSUFBSyxTQUF3QkMsR0FDNUIsR0FBSUEsSUFBV2hELElBQVVnRCxJQUFXQSxHQUFVaEQsSUFBVUEsR0FBeEQsQ0FHQSxHQUFJaUQsR0FBSXpFLEtBQUtrRSxVQUFZMUIsQ0FDckJ4QyxNQUFLaUUsYUFBZWpFLEtBQUtpRSxZQUFZUSxJQUN4Q3pFLEtBQUtpRSxZQUFZUSxHQUFHZCxRQUFRLFNBQUNlLEdBQUQsTUFBUUEsR0FBR0YsS0FHeENoRCxFQUFRZ0QsRUFDUnhFLEtBQUtpRSxZQUFZVSxxQkErR1pkLElBR1JoRSxHQUFBQSxXQTNKb0JnRSIsImZpbGUiOiJ2dWUvb2JzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAg5pWw57uE55uR5ZCs55qE5pa55rOVICAqL1xyXG5jb25zdCBtZXRob2RzID0gWydwdXNoJywgJ3BvcCcsICdzaGlmdCcsICd1bnNoaWZ0JywgJ3NwbGljZScsICdzb3J0JywgJ3JldmVyc2UnXVxyXG5cclxuLyogIOS4uuWvueixoea3u+WKoOWxnuaApyAgKi9cclxuY29uc3QgZGVmUHJvdG90eXBlID0gKG9iaiwgbWV0aG9kLCB2KSA9PiB7XHJcblx0aWYgKG9iai5oYXNPd25Qcm9wZXJ0eShtZXRob2QpKSByZXR1cm5cclxuXHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbWV0aG9kLCB7XHJcblx0XHR2YWx1ZTogdixcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxyXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZVxyXG5cdH0pXHJcbn1cclxuXHJcbi8qICDmlbDnu4Tku6PnkIblr7nosaEgICovXHJcbmNsYXNzIEFycmF5UHJveHkgZXh0ZW5kcyBBcnJheSB7XHJcblx0Y29uc3RydWN0b3IoLi4uYXJncykge1xyXG5cdFx0c3VwZXIoLi4uYXJncylcclxuXHRcdG1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XHJcblx0XHRcdGRlZlByb3RvdHlwZSh0aGlzLCBtZXRob2QsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBBcnJheS5wcm90b3R5cGVbbWV0aG9kXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdFxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPYnNlcnZlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzZXJ2ZXIge1xyXG5cdGNvbnN0cnVjdG9yIChkYXRhLCB3YXRjaGVyLCByb290KSB7XHJcblx0XHR0aGlzLl9fd2F0Y2hlcl9fID0gd2F0Y2hlclxyXG5cdFx0dGhpcy5fX3Jvb3RfXyA9IHJvb3RcclxuXHRcdHRoaXMud2FsayhkYXRhKVxyXG5cdH1cclxuXHR3YWxrIChvYmopIHtcclxuXHRcdGxldCB2YWxcclxuXHRcdGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuXHRcdFx0aWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0dmFsID0gb2JqW2tleV1cclxuXHJcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG5cdFx0XHRcdFx0dmFsID0gbmV3IEFycmF5UHJveHkoLi4udmFsKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdFx0dmFsID0gbmV3IE9ic2VydmVyKHZhbCwgdGhpcy5fX3dhdGNoZXJfXywga2V5KVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5jb252ZXJ0KGtleSwgdmFsKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnZlcnQgKGtleSwgdmFsdWUpIHtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlR2V0dGVyKCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfkvaDorr/pl67kuoYnLCBrZXkpXHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIobmV3VmFsKSB7XHJcblx0XHRcdFx0aWYgKG5ld1ZhbCA9PT0gdmFsdWUgfHwgKG5ld1ZhbCAhPT0gbmV3VmFsICYmIHZhbHVlICE9PSB2YWx1ZSkpIHtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgayA9IHRoaXMuX19yb290X18gfHwga2V5XHJcblx0XHRcdFx0aWYgKHRoaXMuX193YXRjaGVyX18gJiYgdGhpcy5fX3dhdGNoZXJfX1trXSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fX3dhdGNoZXJfX1trXS5mb3JFYWNoKChmbikgPT4gZm4obmV3VmFsKSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ+S9oOiuvue9ruS6hicsIGtleSwgJz0+JywgbmV3VmFsKVxyXG5cdFx0XHRcdHZhbHVlID0gbmV3VmFsXHJcblx0XHRcdFx0dGhpcy5fX3dhdGNoZXJfXy5fX3JlbmRlcl9fKClcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuIl19
