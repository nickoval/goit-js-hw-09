!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var o={};function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t,e,o){e&&n(t.prototype,e);o&&n(t,o);return t};var r={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body")},i=new(function(){"use strict";function n(o){var r=o.onTick;t(e)(this,n),this.timerID=null,this.isWorking=!1,this.onTick=r}return t(o)(n,[{key:"onStart",value:function(){var t=this;this.isWorking||(console.log("Start!!!"),this.isWorking=!0,this.timerID=setInterval((function(){var e=t.getRandomHexColor();console.log("bodyColor: ",e),t.onTick(e)}),1e3),console.log("this.timerID: ",this.timerID))}},{key:"onStop",value:function(){console.log("Stop!!!"),console.log("this.timerID: ",this.timerID),clearInterval(this.timerID),this.isWorking=!1}},{key:"getRandomHexColor",value:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}]),n}())({onTick:function(t){r.body.style.backgroundColor=t}});r.btnStart.addEventListener("click",i.onStart.bind(i)),r.btnStop.addEventListener("click",i.onStop.bind(i))}();
//# sourceMappingURL=01-color-switcher.a1e570a6.js.map