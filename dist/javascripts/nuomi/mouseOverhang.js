!function(t,e){if("function"==typeof define&&define.amd)define([],e);else if("undefined"!=typeof exports)e();else{var n={exports:{}};e(),t.mouseOverhang=n.exports}}(this,function(){"use strict";function t(t){return{px:t.clientX-i.left,py:t.clientY-i.top}}function e(t,e){if(!t)return o.style.cssText="",!1;var a=~~((t.px-e.cx)/(c/2)*8),i=~~((t.py-e.cy)/(s/2)*8),p=-r(t,e),u=n(t,e)/f;o.style.cssText="\n\t\tbackground-image: linear-gradient("+p+"deg, rgba(255, 255, 255, "+u+") 0%, rgba(255, 255, 255, 0) 80%);\n\t\tbackground-image: -webkit-linear-gradient("+p+"deg, rgba(255, 255, 255, "+u/2+") 0%, rgba(255, 255, 255, 0) 80%);\n\t\ttransform: translateY("+t.py/s*-.5+"px) rotateX("+(t.py<e.cy?-a:a)+"deg) rotateY("+i+"deg) rotateZ(0);\n\t\t-webkit-transform: translateY("+t.py/s*-.5+"px) rotateX("+(t.py<e.cy?-a:a)+"deg) rotateY("+i+"deg) rotateZ(0);\n\t"}function n(t,e){var n=t.px,r=t.py,a=e.cx,o=e.cy;return~~Math.sqrt(Math.pow(n-a,2)+Math.pow(r-o,2))}function r(t,e){var n=t.px,r=t.py,a=e.cx,o=e.cy,i=n-a,c=r-o,s=Math.sqrt(Math.pow(i,2)+Math.pow(c,2)),p=i/s,f=Math.acos(p),u=180/(Math.PI/f);return c<0?u=-u:0==c&&i<0&&(u=180),u}var a=document.querySelector(".container"),o=document.querySelector(".title"),i=a.getBoundingClientRect(),c=a.offsetWidth,s=a.offsetHeight,p={cx:c/2,cy:s/2},f=Math.sqrt(Math.pow(c,2)+Math.pow(s,2))/2;a.addEventListener("mousemove",function(n){var a=t(n);r(a,p);e(a,p)}),a.addEventListener("mouseleave",function(n){var a=t(n);r(a,p);e()})});