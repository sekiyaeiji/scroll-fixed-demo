!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o){document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".js-fixed-wrapper01")[0];if(e){var o=e.getBoundingClientRect().top+window.pageYOffset;window.addEventListener("scroll",function(){var e,t,n;e=o,t=window.pageYOffset,n=document.querySelectorAll(".js-fixed01")[0],console.log("y ： "+e),console.log("scrollY ： "+t),t>e?n.classList.add("is-fixed01"):n.classList.remove("is-fixed01")})}var t=document.querySelectorAll(".js-fixed-wrapper03")[0];if(t){var n=t.getBoundingClientRect().top+window.pageYOffset;window.addEventListener("scroll",function(){var e,o,t;e=n,o=window.pageYOffset,t=document.querySelectorAll(".js-fixed03")[0],console.log("y ： "+e),console.log("scrollY ： "+o),o>e?t.classList.add("is-fixed03"):t.classList.remove("is-fixed03")})}var r=document.querySelectorAll(".js-fixed-wrapper04")[0];if(r){var i=r.getBoundingClientRect().top+window.pageYOffset;window.addEventListener("scroll",function(){var e,o,t;e=i,o=window.pageYOffset,t=document.querySelectorAll(".js-fixed04")[0],console.log("y ： "+e),console.log("scrollY ： "+o),o>e?t.classList.add("is-fixed04"):t.classList.remove("is-fixed04")})}var l=document.querySelectorAll(".js-fixed-wrapper05")[0];if(l){var s=l.getBoundingClientRect().top+window.pageYOffset;window.addEventListener("scroll",function(){var e,o,t;e=s,o=window.pageYOffset-300,t=document.querySelectorAll(".js-fixed05")[0],console.log("y ： "+e),console.log("scrollY ： "+o),o>e?t.classList.add("is-fixed05"):t.classList.remove("is-fixed05")})}})}]);