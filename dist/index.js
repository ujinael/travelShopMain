(()=>{var e={499:(e,t,r)=>{var n={"./ocean.jpg":388,"./pic1.jpg":596,"./pic2.jpg":209,"./pic3.jpg":599,"./pic4.jpg":18,"./pic5.jpg":776,"./pic6.jpg":995,"./pic7.jpg":543,"./pic8.jpg":650,"./pic9.jpg":402};function i(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=499},41:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(81),i=r.n(n),o=r(645),a=r.n(o)()(i());a.push([e.id,"#accept-order-button{max-width:260px;padding:4px;height:30px;text-align:center;margin:10px;cursor:pointer}body{padding:0;margin:0;height:100vh}.main-app-wrap{display:flex;height:100%;flex-direction:column}.main-app-wrap header{display:flex;align-content:center;justify-content:center;height:60px;background:#faebd7}.main-app-wrap footer{height:70px;background:#000;display:flex;align-content:center;justify-content:center}.main-app-wrap .main-app{overflow:auto;padding:10px;flex:1;height:100%}.main-app-wrap .main-app .tour-wrap{display:flex;flex-wrap:wrap}.main-app-wrap .main-app .tour-wrap .tour-pic{width:100%;height:140px}.main-app-wrap .main-app .tour-wrap>div{flex-direction:column;display:flex;width:260px;height:320px;padding:4px;border:1px solid gray;margin:4px}.main-app-wrap .main-app .tour-wrap>div:hover{cursor:pointer}.main-app-wrap .main-app .tour-wrap>div>div.ticket-description{flex:1;height:155px;text-overflow:ellipsis;overflow:hidden}.modal_element{color:#292d2c;background-color:#e4e9e7;height:360px;width:300px;position:fixed;top:50%;left:50%;padding:6px;transform:translateY(-50%) translateX(-50%);display:flex;justify-content:center;align-items:center}.modal_element .close-modal{position:absolute;top:0;margin:0;cursor:pointer;font-size:1.3rem;font-weight:bold;right:3px}.modal_element .ticket-submit{width:80px;height:45px}",""]);const c=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);n&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),t.push(p))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},388:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n="/img/ocean.jpg"},596:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n="/img/pic1.jpg"},209:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n="/img/pic2.jpg"},599:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n="/img/pic3.jpg"},18:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n="/img/pic4.jpg"},776:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n="/img/pic5.jpg"},995:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n="/img/pic6.jpg"},543:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n="/img/pic7.jpg"},650:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n="/img/pic8.jpg"},402:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n="/img/pic9.jpg"},907:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var n=r(379),i=r.n(n),o=r(795),a=r.n(o),c=r(569),s=r.n(c),d=r(565),p=r.n(d),u=r(216),l=r.n(u),f=r(589),m=r.n(f),v=r(41),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),i()(v.Z,g);const h=v.Z&&v.Z.locals?v.Z.locals:void 0},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},a=[],c=0;c<e.length;c++){var s=e[c],d=n.base?s[0]+n.base:s[0],p=o[d]||0,u="".concat(d," ").concat(p);o[d]=p+1;var l=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var m=i(f,n);n.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,i){var o=n(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=r(o[a]);t[c].references--}for(var s=n(e,i),d=0;d<o.length;d++){var p=r(o[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=s}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},749:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;var r=function(){function e(t){void 0===t&&(t=null);var r=this;this.closeModalFunction=function(e){e.target.classList.contains("close-modal")&&r.remove()},e.modals.find((function(e){return e.id===t}))&&e.removeById(this.id),e.modals.push(this),this.id=t||Math.random()+e.modals.length}return e.prototype.open=function(e){var t=document.createElement("div");t.innerHTML=e,t.id=this.id,t.setAttribute("modal_id",this.id),t.classList.add("modal_element"),t.addEventListener("click",this.closeModalFunction),document.body.appendChild(t)},e.prototype.remove=function(){var e=document.getElementById(this.id);e&&(e.removeEventListener("click",this.closeModalFunction),e.parentNode.removeChild(e))},e.removeById=function(t){void 0===t&&(t=null);var r=t,n=e.modals.find((function(e){return e.id===r}));if(n)n.remove(),e.modals=e.modals.filter((function(e){return e.id!==r}));else if(Array.isArray(e.modals)){var i=e.modals.pop();i&&i.remove()}},e.modals=[],e}();t.Modal=r},844:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toursDataArray=void 0;var n=r(648);r(907);var i=r(331),o=r(731),a=r(180),c=r(671);t.toursDataArray=[],i.images,(0,c.initHeaderTitle)("dddd"),(0,n.getTours)().then((function(e){console.log("call"),t.toursDataArray=e,function(e){if(Array.isArray(e)){var t=document.querySelector(".main-app"),r=document.createElement("div");r.classList.add("tour-wrap"),function(e){e.addEventListener("click",(function(e){var t,r=e.target,n=null==r?void 0:r.parentNode;if(r.hasAttribute("data-tour-item-index")?t=r:n&&n.hasAttribute("data-tour-item-index")&&(t=n),t){var i=t.getAttribute("data-tour-item-index");(0,a.openModal)("order",Number(i))}}))}(r);var n="";e.forEach((function(e,t){n+=(0,o.getTourTemplate)(e,t)})),r.innerHTML=n,t.appendChild(r)}}(e)}))},331:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.images=void 0,t.images=(n=r(499)).keys().map(n)},180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openModal=void 0;var n=r(749),i=r(844);t.openModal=function(e,t){var r,o=i.toursDataArray[t],a=null===(r=o[t])||void 0===r?void 0:r.id;if("order"===e){var c='\n      <div> \n      <p data-moda-id="tour-modal" class="close-modal">x</p>\n      <p>'.concat(o.name,"</p>\n       <p>").concat(o.description,"</p>\n       \n       <div data-tour-id=").concat(a,' class="ticket-submit">\n       <a href="/ticket.html">Купить билет</a>\n</div>\n     </div>\n  ');new n.Modal("tour-modal").open(c)}}},648:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTours=void 0,t.getTours=function(){return fetch("https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/").then((function(e){return e.json()})).then((function(e){return e}))}},671:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initHeaderTitle=void 0,t.initHeaderTitle=function(e){var t=document.querySelector("header");t&&(t.innerText=e)}},731:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTourTemplate=void 0,t.getTourTemplate=function(e,t){return" \n       <div  data-tour-item-index=".concat(t,' class="tour-block">\n           <h2>').concat(e.name,"</h2>\n           <img class='tour-pic' src=\"/dist/").concat(e.img,'"/>\n           <div class="ticket-description">').concat(e.description,"</div>\n           <p>").concat(e.price,"</p>\n       </div>\n    ")}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,r(844)})();