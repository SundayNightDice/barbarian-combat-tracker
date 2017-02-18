!function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=10)}([function(e,n){e.exports=React},function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(6),l=t(7),i=function(e){return e>=17?6:e>=13?5:e>=9?4:e>=5?3:2},c=function(e){return 20===e?"Unlimited":e>=17?6:e>=12?5:e>=6?4:e>=3?3:2},u=function(e){return e>=16?4:e>=9?3:2},s=function(e){return e>=17?3:e>=13?2:e>=9?1:0},f=function(e){var n=e.model,t=n.level,r=n.raging,f=n.reckless,p=n.gwm,d=e.onRageChange,m=e.onRecklessChange,h=e.onLevelChange,g=e.onGWMChange,v=e.version;return a.a.createElement("div",null,a.a.createElement("section",null,a.a.createElement("div",null,a.a.createElement("label",null,"Level: ",a.a.createElement("input",{type:"number",min:"1",max:"20",value:t,onChange:function(e){h(Number(e.target.value))}})),a.a.createElement("ul",null,a.a.createElement("li",null,"Proficiency Bonus: ",a.a.createElement("strong",null,"+"+i(t))),a.a.createElement("li",null,"Rages: ",a.a.createElement("strong",null,c(t))),a.a.createElement(l.a,{condition:function(){return t>=5}},a.a.createElement("li",null,a.a.createElement("strong",null,"2")," attacks")),a.a.createElement(l.a,{condition:function(){return t>=9}},a.a.createElement("li",null,"Brutal Critical: "+s(t)+" extra weapon damage dice")))),a.a.createElement("div",null,a.a.createElement(o.a,{label:"Raging",disabled:!1,value:r,onChange:d}),a.a.createElement(l.a,{condition:function(){return r}},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,"+"+u(t))," damage"),a.a.createElement("li",null,"Resistance to ",a.a.createElement("strong",null,"bludgeoning, piercing & slashing")," damage")))),a.a.createElement("div",null,a.a.createElement(o.a,{label:"Reckless",disabled:t<2,value:f&&t>=2,onChange:m}),a.a.createElement(l.a,{condition:function(){return f&&t>=2}},a.a.createElement("ul",null,a.a.createElement("li",null,"First Attack has ",a.a.createElement("strong",null,"advantage")),a.a.createElement("li",null,"Enemy has ",a.a.createElement("strong",null,"advantage"))))),a.a.createElement("div",null,a.a.createElement(o.a,{label:"Great Weapon Master",disabled:!1,value:p,onChange:g}),a.a.createElement(l.a,{condition:function(){return p}},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,"-5")," to hit"),a.a.createElement("li",null,a.a.createElement("strong",null,"+10")," damage"),a.a.createElement("li",null,"On Critical, 1 melee weapon attack as a Bonus Action"))))),a.a.createElement("footer",null,a.a.createElement("span",{className:"version"},"v"+v),a.a.createElement("span",{className:"source"},a.a.createElement("a",{href:"https://github.com/sh1989/barbarian-combat-tracker"},"Source"))))};n.a=f},function(e,n,t){var r=t(8);"string"==typeof r&&(r=[[e.i,r,""]]);t(9)(r,{});r.locals&&(e.exports=r.locals)},function(e,n){e.exports={name:"barbarian-combat-tracker",version:"1.0.2",description:"",main:"index.js",scripts:{build:"webpack -p",debug:"webpack"},author:"",license:"ISC",devDependencies:{"babel-cli":"^6.23.0","babel-core":"^6.23.1","babel-loader":"^6.3.2","babel-preset-es2015":"^6.22.0","babel-preset-react":"^6.23.0","css-loader":"^0.26.1","node-sass":"^4.5.0","sass-loader":"^6.0.1","style-loader":"^0.13.1",webpack:"^2.2.1"}}},function(e,n){e.exports=ReactDOM},function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<n.length;a++){var l=n[a];"number"==typeof l[0]&&r[l[0]]||(t&&!l[2]?l[2]=t:t&&(l[2]="("+l[2]+") and ("+t+")"),e.push(l))}},e}},function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=function(e){var n=e.value,t=e.onChange,r=e.disabled,o=e.label;return a.a.createElement("label",{className:r?"disabled":""},a.a.createElement("input",{type:"checkbox",value:n,disabled:r,onChange:function(e){t(e.target.checked)}}),o)};n.a=o},function(e,n,t){"use strict";var r=t(0),a=(t.n(r),function(e){var n=e.condition,t=e.children;return n()?t:null});n.a=a},function(e,n,t){n=e.exports=t(5)(),n.push([e.i,"#root section{border-left:4px solid #9013fe;padding:8px}#root section>div{margin-bottom:12px}#root footer .version{margin-right:8px}#root footer .source,#root footer .version{font-size:12px}#root input{margin:3px 3px 3px 0}#root input[type=number]{width:36px}#root ul{margin:0;padding-left:16px;padding-top:4px}#root ul>li{font-family:Helvetica,sans-serif;font-size:14px}#root strong{color:#9013fe}#root .disabled{color:#ccc}",""])},function(e,n){function t(e,n){for(var t=0;t<e.length;t++){var r=e[t],a=p[r.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(c(r.parts[o],n))}else{for(var l=[],o=0;o<r.parts.length;o++)l.push(c(r.parts[o],n));p[r.id]={id:r.id,refs:1,parts:l}}}}function r(e){for(var n=[],t={},r=0;r<e.length;r++){var a=e[r],o=a[0],l=a[1],i=a[2],c=a[3],u={css:l,media:i,sourceMap:c};t[o]?t[o].parts.push(u):n.push(t[o]={id:o,parts:[u]})}return n}function a(e,n){var t=h(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),b.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function o(e){e.parentNode.removeChild(e);var n=b.indexOf(e);n>=0&&b.splice(n,1)}function l(e){var n=document.createElement("style");return n.type="text/css",a(e,n),n}function i(e){var n=document.createElement("link");return n.rel="stylesheet",a(e,n),n}function c(e,n){var t,r,a;if(n.singleton){var c=v++;t=g||(g=l(n)),r=u.bind(null,t,c,!1),a=u.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=i(n),r=f.bind(null,t),a=function(){o(t),t.href&&URL.revokeObjectURL(t.href)}):(t=l(n),r=s.bind(null,t),a=function(){o(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}function u(e,n,t,r){var a=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(n,a);else{var o=document.createTextNode(a),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(o,l[n]):e.appendChild(o)}}function s(e,n){var t=n.css,r=n.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function f(e,n){var t=n.css,r=n.sourceMap;r&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([t],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(a),o&&URL.revokeObjectURL(o)}var p={},d=function(e){var n;return function(){return"undefined"==typeof n&&(n=e.apply(this,arguments)),n}},m=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,b=[];e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},"undefined"==typeof n.singleton&&(n.singleton=m()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var a=r(e);return t(a,n),function(e){for(var o=[],l=0;l<a.length;l++){var i=a[l],c=p[i.id];c.refs--,o.push(c)}if(e){var u=r(e);t(u,n)}for(var l=0;l<o.length;l++){var c=o[l];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete p[c.id]}}}};var E=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=t(0),i=t.n(l),c=t(4),u=(t.n(c),t(1)),s=t(2),f=(t.n(s),t(3)),p=(t.n(f),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),d=function(e){function n(e){r(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={level:1,raging:!1,reckless:!1,gwm:!1},t.onChange=t.onChange.bind(t),t}return o(n,e),p(n,[{key:"render",value:function(){var e=this;return i.a.createElement(u.a,{model:this.state,onRageChange:function(n){return e.onChange(n,"raging")},onRecklessChange:function(n){return e.onChange(n,"reckless")},onLevelChange:function(n){return e.onChange(n,"level")},onGWMChange:function(n){return e.onChange(n,"gwm")},version:f.version})}},{key:"onChange",value:function(e,n){var t=this.state;t[n]=e,this.setState(t)}}]),n}(i.a.Component),m=document.getElementById("loader");m.parentNode.removeChild(m),t.i(c.render)(i.a.createElement(d,null),document.getElementById("root"))}]);