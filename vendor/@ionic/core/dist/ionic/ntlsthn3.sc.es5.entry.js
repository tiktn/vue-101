/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("ntlsthn3",["exports","./chunk-7e46fca4.js"],function(e,t){function n(e){return e.replace(/\s/g,"").split(",")}function o(e){var o,s,a,u,c=[];return void 0!==e.mediaQuery&&c.push(r(e.win,e.mediaQuery)),void 0!==e.size&&c.push((o=e.win,n(e.size).some(function(e){return t.matchBreakpoint(o,e)}))),void 0!==e.modes&&c.push((s=e.config,a=n(e.modes),u=s.get("mode"),a.includes(u))),void 0!==e.platform&&c.push(function(o,i){return n(e.platform).some(function(e){return t.isPlatform(o,e)})}(e.win)),void 0!==e.orientation&&c.push(function(e,t){return"portrait"===t?i(e):"landscape"===t&&!i(e)}(e.win,e.orientation)),e.or?c.some(function(e){return e}):c.every(function(e){return e})}function i(e){return r(e,"(orientation: portrait)")}function r(e,t){return e.matchMedia(t).matches}window;var s=function(){function e(){this.or=!1,this.passesTest=!1}return e.prototype.componentWillLoad=function(){this.onResize()},e.prototype.onResize=function(){this.passesTest=o(this)},e.prototype.hostData=function(){return{class:{"show-content":!this.passesTest,"hide-content":this.passesTest}}},Object.defineProperty(e,"is",{get:function(){return"ion-hide-when"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},element:{elementRef:!0},mediaQuery:{type:String,attr:"media-query"},modes:{type:String,attr:"modes"},or:{type:Boolean,attr:"or"},orientation:{type:String,attr:"orientation"},passesTest:{state:!0},platform:{type:String,attr:"platform"},size:{type:String,attr:"size"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-hide-when.show-content{display:block}ion-hide-when.hide-content{display:none!important}"},enumerable:!0,configurable:!0}),e}(),a=function(){function e(){this.or=!1,this.passesTest=!1}return e.prototype.componentWillLoad=function(){this.onResize()},e.prototype.onResize=function(){this.passesTest=o(this)},e.prototype.hostData=function(){return{class:{"show-content":this.passesTest,"hide-content":!this.passesTest}}},Object.defineProperty(e,"is",{get:function(){return"ion-show-when"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},element:{elementRef:!0},mediaQuery:{type:String,attr:"media-query"},modes:{type:String,attr:"modes"},or:{type:Boolean,attr:"or"},orientation:{type:String,attr:"orientation"},passesTest:{state:!0},platform:{type:String,attr:"platform"},size:{type:String,attr:"size"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-show-when.show-content{display:block}ion-show-when.hide-content{display:none!important}"},enumerable:!0,configurable:!0}),e}();e.IonHideWhen=s,e.IonShowWhen=a,Object.defineProperty(e,"__esModule",{value:!0})});