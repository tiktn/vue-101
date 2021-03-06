/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { h as createColorClasses, j as hostContext, i as openURL } from './chunk-b9ec67ac.js';
var Fab = /** @class */ (function () {
    function Fab() {
        this.edge = false;
        this.activated = false;
    }
    Fab.prototype.activatedChanged = function () {
        var activated = this.activated;
        var fab = this.el.querySelector('ion-fab-button');
        if (fab) {
            fab.activated = activated;
        }
        Array.from(this.el.querySelectorAll('ion-fab-list')).forEach(function (list) {
            list.activated = activated;
        });
    };
    Fab.prototype.componentDidLoad = function () {
        if (this.activated) {
            this.activatedChanged();
        }
    };
    Fab.prototype.onClick = function () {
        var hasList = !!this.el.querySelector('ion-fab-list');
        if (hasList) {
            this.activated = !this.activated;
        }
    };
    Fab.prototype.close = function () {
        this.activated = false;
    };
    Fab.prototype.hostData = function () {
        var _a;
        return {
            class: (_a = {},
                _a["fab-horizontal-" + this.horizontal] = !!this.horizontal,
                _a["fab-vertical-" + this.vertical] = !!this.vertical,
                _a['fab-edge'] = this.edge,
                _a)
        };
    };
    Fab.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Fab, "is", {
        get: function () { return "ion-fab"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fab, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fab, "properties", {
        get: function () {
            return {
                "activated": {
                    "type": Boolean,
                    "attr": "activated",
                    "mutable": true,
                    "watchCallbacks": ["activatedChanged"]
                },
                "close": {
                    "method": true
                },
                "edge": {
                    "type": Boolean,
                    "attr": "edge"
                },
                "el": {
                    "elementRef": true
                },
                "horizontal": {
                    "type": String,
                    "attr": "horizontal"
                },
                "vertical": {
                    "type": String,
                    "attr": "vertical"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fab, "listeners", {
        get: function () {
            return [{
                    "name": "click",
                    "method": "onClick"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fab, "style", {
        get: function () { return ".sc-ion-fab-h{position:absolute;z-index:999}.fab-horizontal-center.sc-ion-fab-h{left:50%;margin-left:-28px}.fab-horizontal-start.sc-ion-fab-h{left:calc(10px + var(--ion-safe-area-left,0px))}.fab-horizontal-end.sc-ion-fab-h{right:calc(10px + var(--ion-safe-area-right,0px))}.fab-vertical-top.sc-ion-fab-h{top:10px}.fab-vertical-top.fab-edge.sc-ion-fab-h{top:-28px}.fab-vertical-bottom.sc-ion-fab-h{bottom:10px}.fab-vertical-bottom.fab-edge.sc-ion-fab-h{bottom:-28px}.fab-vertical-center.sc-ion-fab-h{margin-top:-28px;top:50%}"; },
        enumerable: true,
        configurable: true
    });
    return Fab;
}());
var FabButton = /** @class */ (function () {
    function FabButton() {
        this.activated = false;
        this.disabled = false;
        this.translucent = false;
        this.show = false;
    }
    FabButton.prototype.hostData = function () {
        var inList = hostContext('ion-fab-list', this.el);
        return {
            'ion-activatable': true,
            class: Object.assign({}, createColorClasses(this.color), { 'fab-button-in-list': inList, 'fab-button-translucent-in-list': inList && this.translucent, 'fab-button-close-active': this.activated, 'fab-button-show': this.show, 'fab-button-disabled': this.disabled, 'fab-button-translucent': this.translucent })
        };
    };
    FabButton.prototype.render = function () {
        var _this = this;
        var TagType = this.href === undefined ? 'button' : 'a';
        return (h(TagType, { class: "button-native", disabled: this.disabled, href: this.href, onClick: function (ev) { return openURL(_this.win, _this.href, ev, _this.routerDirection); } }, h("span", { class: "close-icon" }, h("ion-icon", { name: "close", lazy: false })), h("span", { class: "button-inner" }, h("slot", null)), this.mode === 'md' && h("ion-ripple-effect", null)));
    };
    Object.defineProperty(FabButton, "is", {
        get: function () { return "ion-fab-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabButton, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabButton, "properties", {
        get: function () {
            return {
                "activated": {
                    "type": Boolean,
                    "attr": "activated"
                },
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled"
                },
                "el": {
                    "elementRef": true
                },
                "href": {
                    "type": String,
                    "attr": "href"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "routerDirection": {
                    "type": String,
                    "attr": "router-direction"
                },
                "show": {
                    "type": Boolean,
                    "attr": "show"
                },
                "translucent": {
                    "type": Boolean,
                    "attr": "translucent"
                },
                "win": {
                    "context": "window"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabButton, "style", {
        get: function () { return ".sc-ion-fab-button-ios-h{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);--ion-color-tint:var(--ion-color-primary-tint, #4c8dff);--size:56px;--background:var(--ion-color-base);--transition:background-color,opacity 100ms linear;--padding-start:calc((56px - var(--size)) / 2);--padding-end:calc((56px - var(--size)) / 2);--padding-top:calc((56px - var(--size)) / 2);--padding-bottom:calc((56px - var(--size)) / 2);display:block;color:var(--ion-color-contrast);font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59)}.fab-button-disabled.sc-ion-fab-button-ios-h{pointer-events:none}.activated.sc-ion-fab-button-ios-h{--background:var(--ion-color-tint);--background:var(--ion-color-tint);--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transform:scale(1.1);--transition:0.2s transform ease-out}.button-native.sc-ion-fab-button-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:50%;margin:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;position:relative;width:var(--size);height:var(--size);-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:0;background:var(--background);background-clip:padding-box;line-height:var(--size);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native[disabled].sc-ion-fab-button-ios{cursor:default;opacity:.5;pointer-events:none}.sc-ion-fab-button-ios-s > ion-icon{line-height:1}.button-inner.sc-ion-fab-button-ios{left:0;right:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all ease-in-out .3s;transition:all ease-in-out .3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}[mini].sc-ion-fab-button-ios-h{--size:40px}.close-icon.sc-ion-fab-button-ios{left:0;right:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(.4) rotateZ(-45deg);transform:scale(.4) rotateZ(-45deg);-webkit-transition:all ease-in-out .3s;transition:all ease-in-out .3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;opacity:0}.fab-button-close-active.sc-ion-fab-button-ios-h   .close-icon.sc-ion-fab-button-ios{-webkit-transform:scale(1) rotateZ(0);transform:scale(1) rotateZ(0);opacity:1}.fab-button-close-active.sc-ion-fab-button-ios-h   .button-inner.sc-ion-fab-button-ios{-webkit-transform:scale(.4) rotateZ(45deg);transform:scale(.4) rotateZ(45deg);opacity:0}ion-ripple-effect.sc-ion-fab-button-ios{color:var(--ripple-color)}.close-icon.sc-ion-fab-button-ios, .sc-ion-fab-button-ios-s > ion-icon{font-size:28px}.fab-button-in-list.sc-ion-fab-button-ios-h{--ion-color-contrast:var(--ion-color-light-contrast, #000);--ion-color-base:var(--ion-color-light, #f4f5f8);--transition:transform 200ms ease 10ms,opacity 200ms ease 10ms}.fab-button-in-list.activated.sc-ion-fab-button-ios-h{--background:var(--ion-color-primary-tint, #4c8dff)}.fab-translucent.sc-ion-fab-button-ios-h{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.9);--backdrop-filter:saturate(180%) blur(20px)}.fab-translucent-in-list.sc-ion-fab-button-ios-h{--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabButton, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return FabButton;
}());
var FabList = /** @class */ (function () {
    function FabList() {
        this.activated = false;
        this.side = 'bottom';
    }
    FabList.prototype.activatedChanged = function (activated) {
        var fabs = Array.from(this.el.querySelectorAll('ion-fab-button'));
        var timeout = activated ? 30 : 0;
        fabs.forEach(function (fab, i) {
            setTimeout(function () { return fab.show = activated; }, i * timeout);
        });
    };
    FabList.prototype.hostData = function () {
        var _a;
        return {
            class: (_a = {
                    'fab-list-active': this.activated
                },
                _a["fab-list-side-" + this.side] = true,
                _a)
        };
    };
    FabList.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(FabList, "is", {
        get: function () { return "ion-fab-list"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabList, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabList, "properties", {
        get: function () {
            return {
                "activated": {
                    "type": Boolean,
                    "attr": "activated",
                    "watchCallbacks": ["activatedChanged"]
                },
                "el": {
                    "elementRef": true
                },
                "side": {
                    "type": String,
                    "attr": "side"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabList, "style", {
        get: function () { return ".sc-ion-fab-list-h{margin:66px 0;display:none;position:absolute;top:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}.fab-list-active.sc-ion-fab-list-h{display:-webkit-box;display:-ms-flexbox;display:flex}.sc-ion-fab-list-s > .fab-button-in-list{--size:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}.sc-ion-fab-list-h.fab-list-side-bottom .sc-ion-fab-list-s > .fab-button-in-list, .sc-ion-fab-list-h.fab-list-side-top .sc-ion-fab-list-s > .fab-button-in-list{--padding-top:5px;--padding-bottom:5px}.sc-ion-fab-list-h.fab-list-side-end .sc-ion-fab-list-s > .fab-button-in-list, .sc-ion-fab-list-h.fab-list-side-start .sc-ion-fab-list-s > .fab-button-in-list{--padding-start:5px;--padding-end:5px}.sc-ion-fab-list-s > .fab-button-in-list.fab-button-show{-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}.fab-list-side-top.sc-ion-fab-list-h{top:auto;bottom:0;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.fab-list-side-start.sc-ion-fab-list-h{margin:0 66px;right:0;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.fab-list-side-end.sc-ion-fab-list-h{margin:0 66px;left:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}"; },
        enumerable: true,
        configurable: true
    });
    return FabList;
}());
export { Fab as IonFab, FabButton as IonFabButton, FabList as IonFabList };
