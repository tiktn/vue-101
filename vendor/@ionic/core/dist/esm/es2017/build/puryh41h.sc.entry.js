/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { d as hasShadowDom } from './chunk-e7816c0b.js';
import { h as createColorClasses, i as openURL } from './chunk-b9ec67ac.js';

class Button {
    constructor() {
        this.keyFocus = false;
        this.buttonType = 'button';
        this.disabled = false;
        this.strong = false;
        this.type = 'button';
    }
    componentWillLoad() {
        if (this.fill === undefined) {
            this.fill = this.el.closest('ion-buttons') ? 'clear' : 'solid';
        }
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    onClick(ev) {
        if (this.type === 'button') {
            return openURL(this.win, this.href, ev, this.routerDirection);
        }
        else if (hasShadowDom(this.el)) {
            const form = this.el.closest('form');
            if (form) {
                ev.preventDefault();
                ev.stopPropagation();
                const fakeButton = document.createElement('button');
                fakeButton.type = this.type;
                fakeButton.style.display = 'none';
                form.appendChild(fakeButton);
                fakeButton.click();
                fakeButton.remove();
            }
        }
        return Promise.resolve(false);
    }
    hostData() {
        const { buttonType, color, expand, fill, mode, shape, size, strong } = this;
        return {
            'ion-activatable': true,
            class: Object.assign({}, createColorClasses(color), getButtonClassMap(buttonType, mode), getButtonTypeClassMap(buttonType, expand, mode), getButtonTypeClassMap(buttonType, size, mode), getButtonTypeClassMap(buttonType, shape, mode), getButtonTypeClassMap(buttonType, strong ? 'strong' : undefined, mode), getButtonTypeClassMap(buttonType, fill, mode), { 'focused': this.keyFocus })
        };
    }
    render() {
        const TagType = this.href === undefined ? 'button' : 'a';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : { href: this.href };
        return (h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: this.disabled, onFocus: this.onFocus.bind(this), onKeyUp: this.onKeyUp.bind(this), onBlur: this.onBlur.bind(this), onClick: this.onClick.bind(this) }),
            h("span", { class: "button-inner" },
                h("slot", { name: "icon-only" }),
                h("slot", { name: "start" }),
                h("slot", null),
                h("slot", { name: "end" })),
            this.mode === 'md' && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "buttonType": {
            "type": String,
            "attr": "button-type",
            "mutable": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "reflectToAttr": true
        },
        "el": {
            "elementRef": true
        },
        "expand": {
            "type": String,
            "attr": "expand",
            "reflectToAttr": true
        },
        "fill": {
            "type": String,
            "attr": "fill",
            "reflectToAttr": true,
            "mutable": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "keyFocus": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "routerDirection": {
            "type": String,
            "attr": "router-direction"
        },
        "shape": {
            "type": String,
            "attr": "shape",
            "reflectToAttr": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "strong": {
            "type": Boolean,
            "attr": "strong"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "ionFocus",
            "method": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionBlur",
            "method": "ionBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ion-button-ios-h{--width:auto;--overflow:hidden;--ripple-color:currentColor;display:inline-block;color:var(--color);font-family:var(--ion-font-family,inherit);pointer-events:auto;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}[disabled].sc-ion-button-ios-h{pointer-events:none}.button-solid.sc-ion-button-ios-h{--background:var(--ion-color-primary, #3880ff);--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--color:var(--ion-color-primary-contrast, #fff);--color-activated:var(--ion-color-primary-contrast, #fff);--color-focused:var(--ion-color-primary-contrast, #fff)}.button-solid.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-solid.ion-color.activated.sc-ion-button-ios-h   .button-native.sc-ion-button-ios, .button-solid.ion-color.focused.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--ion-color-shade)}.button-outline.sc-ion-button-ios-h{--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff);--color-focused:var(--ion-color-primary, #3880ff);--border-radius:12px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);--color-activated:var(--ion-color-primary-contrast, #fff)}.button-outline.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{border-color:var(--ion-color-base);background:0 0;color:var(--ion-color-base)}.button-outline.focused.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.sc-ion-button-ios-h{--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff);--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);--color-activated:var(--ion-color-primary, #3880ff);--color-focused:var(--ion-color-primary, #3880ff)}.button-clear.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:0 0;color:var(--ion-color-base)}.button-clear.focused.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.activated.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:0 0}.button-block.sc-ion-button-ios-h{display:block}.button-block.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:strict}.button-block.sc-ion-button-ios-h   .button-native.sc-ion-button-ios::after{clear:both}.button-full.sc-ion-button-ios-h{display:block}.button-full.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{margin-left:0;margin-right:0;display:block;width:100%;contain:strict}.button-full.sc-ion-button-ios-h:not(.button-round)   .button-native.sc-ion-button-ios{border-radius:0;border-right-width:0;border-left-width:0}.button-native.sc-ion-button-ios{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:var(--width);height:var(--height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:content;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native[disabled].sc-ion-button-ios{cursor:default;opacity:.5;pointer-events:none}.focused.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--background-focused);color:var(--color-focused)}.activated.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--background-activated);color:var(--color-activated)}.button-inner.sc-ion-button-ios{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.sc-ion-button-ios-s > ion-icon{font-size:1.4em;pointer-events:none}.sc-ion-button-ios-s > ion-icon[slot=start]{margin:0 .3em 0 -.3em}.sc-ion-button-ios-s > ion-icon[slot=end]{margin:0 -.2em 0 .3em}.sc-ion-button-ios-s > ion-icon[slot=icon-only]{font-size:1.8em}ion-ripple-effect.sc-ion-button-ios{color:var(--ripple-color)}.sc-ion-button-ios-h{--border-radius:12px;--margin-top:4px;--margin-bottom:4px;--margin-start:2px;--margin-end:2px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--height:2.8em;--transition:background-color,opacity 100ms linear;font-size:16px;font-weight:500;letter-spacing:-.03em}.button-solid.activated.sc-ion-button-ios-h{--opacity:1}.button-outline.activated.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--ion-color-base);color:var(--ion-color-contrast)}\@media (any-hover:hover){.button-solid.sc-ion-button-ios-h:hover{--opacity:0.8}.button-clear.sc-ion-button-ios-h:hover{--opacity:0.6}}.button-clear.activated.sc-ion-button-ios-h{--opacity:0.4}.button-round.sc-ion-button-ios-h{--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}.button-large.sc-ion-button-ios-h{--border-radius:14px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;--height:2.8em;font-size:20px}.button-small.sc-ion-button-ios-h{--border-radius:8px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.1em;font-size:13px}.button-strong.sc-ion-button-ios-h{font-weight:600}"; }
    static get styleMode() { return "ios"; }
}
function getButtonClassMap(buttonType, mode) {
    if (buttonType === undefined) {
        return {};
    }
    return {
        [buttonType]: true,
        [`${buttonType}-${mode}`]: true
    };
}
function getButtonTypeClassMap(buttonType, type, mode) {
    if (type === undefined) {
        return {};
    }
    return {
        [`${buttonType}-${type}`]: true,
        [`${buttonType}-${type}-${mode}`]: true
    };
}

function getName(name, mode, ios, md) {
    mode = (mode || 'md').toLowerCase();
    if (ios && mode === 'ios') {
        name = ios.toLowerCase();
    }
    else if (md && mode === 'md') {
        name = md.toLowerCase();
    }
    else if (name) {
        name = name.toLowerCase();
        if (!/^md-|^ios-|^logo-/.test(name)) {
            name = `${mode}-${name}`;
        }
    }
    if (typeof name !== 'string' || name.trim() === '') {
        return null;
    }
    const invalidChars = name.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return name;
}
function getSrc(src) {
    if (typeof src === 'string') {
        src = src.trim();
        if (src.length > 0 && /(\/|\.)/.test(src)) {
            return src;
        }
    }
    return null;
}
function isValid(elm) {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (let i = 0; i < elm.attributes.length; i++) {
            const val = elm.attributes[i].value;
            if (typeof val === 'string' && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
}

class Icon {
    constructor() {
        this.isVisible = false;
        this.lazy = false;
    }
    componentWillLoad() {
        this.waitUntilVisible(this.el, "50px", () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    componentDidUnload() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, rootMargin, cb) {
        if (this.lazy && this.win && this.win.IntersectionObserver) {
            const io = this.io = new this.win.IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    this.io = undefined;
                    cb();
                }
            }, { rootMargin });
            io.observe(el);
        }
        else {
            cb();
        }
    }
    loadIcon() {
        if (!this.isServer && this.isVisible) {
            const url = this.getUrl();
            if (url) {
                getSvgContent(url).then(svgContent => {
                    this.svgContent = validateContent(this.doc, svgContent, this.el["s-sc"]);
                });
            }
        }
        if (!this.ariaLabel) {
            const name = getName(this.name, this.mode, this.ios, this.md);
            if (name) {
                this.ariaLabel = name
                    .replace("ios-", "")
                    .replace("md-", "")
                    .replace(/\-/g, " ");
            }
        }
    }
    getUrl() {
        let url = getSrc(this.src);
        if (url) {
            return url;
        }
        url = getName(this.name, this.mode, this.ios, this.md);
        if (url) {
            return this.getNamedUrl(url);
        }
        url = getSrc(this.icon);
        if (url) {
            return url;
        }
        url = getName(this.icon, this.mode, this.ios, this.md);
        if (url) {
            return this.getNamedUrl(url);
        }
        return null;
    }
    getNamedUrl(name) {
        return `${this.resourcesUrl}svg/${name}.svg`;
    }
    hostData() {
        return {
            "role": "img",
            class: Object.assign({}, createColorClasses$1(this.color), { [`icon-${this.size}`]: !!this.size })
        };
    }
    render() {
        if (!this.isServer && this.svgContent) {
            return h("div", { class: "icon-inner", innerHTML: this.svgContent });
        }
        return h("div", { class: "icon-inner" });
    }
    static get is() { return "ion-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "ariaLabel": {
                "type": String,
                "attr": "aria-label",
                "reflectToAttr": true,
                "mutable": true
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "doc": {
                "context": "document"
            },
            "el": {
                "elementRef": true
            },
            "icon": {
                "type": String,
                "attr": "icon",
                "watchCallbacks": ["loadIcon"]
            },
            "ios": {
                "type": String,
                "attr": "ios"
            },
            "isServer": {
                "context": "isServer"
            },
            "isVisible": {
                "state": true
            },
            "lazy": {
                "type": Boolean,
                "attr": "lazy"
            },
            "md": {
                "type": String,
                "attr": "md"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "name": {
                "type": String,
                "attr": "name",
                "watchCallbacks": ["loadIcon"]
            },
            "resourcesUrl": {
                "context": "resourcesUrl"
            },
            "size": {
                "type": String,
                "attr": "size"
            },
            "src": {
                "type": String,
                "attr": "src",
                "watchCallbacks": ["loadIcon"]
            },
            "svgContent": {
                "state": true
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get style() { return ".sc-ion-icon-h{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.ion-color.sc-ion-icon-h{color:var(--ion-color-base)!important}.icon-small.sc-ion-icon-h{font-size:var(--ion-icon-size-small,18px)!important}.icon-large.sc-ion-icon-h{font-size:var(--ion-icon-size-large,32px)!important}.icon-inner.sc-ion-icon, svg.sc-ion-icon{display:block;height:100%;width:100%}svg.sc-ion-icon{fill:currentColor;stroke:currentColor}.ion-color-primary.sc-ion-icon-h{--ion-color-base:var(--ion-color-primary, #3880ff)}.ion-color-secondary.sc-ion-icon-h{--ion-color-base:var(--ion-color-secondary, #0cd1e8)}.ion-color-tertiary.sc-ion-icon-h{--ion-color-base:var(--ion-color-tertiary, #f4a942)}.ion-color-success.sc-ion-icon-h{--ion-color-base:var(--ion-color-success, #10dc60)}.ion-color-warning.sc-ion-icon-h{--ion-color-base:var(--ion-color-warning, #ffce00)}.ion-color-danger.sc-ion-icon-h{--ion-color-base:var(--ion-color-danger, #f14141)}.ion-color-light.sc-ion-icon-h{--ion-color-base:var(--ion-color-light, #f4f5f8)}.ion-color-medium.sc-ion-icon-h{--ion-color-base:var(--ion-color-medium, #989aa2)}.ion-color-dark.sc-ion-icon-h{--ion-color-base:var(--ion-color-dark, #222428)}"; }
}
const requests = new Map();
function getSvgContent(url) {
    let req = requests.get(url);
    if (!req) {
        req = fetch(url, { cache: "force-cache" }).then(rsp => {
            if (rsp.ok) {
                return rsp.text();
            }
            return Promise.resolve(null);
        });
        requests.set(url, req);
    }
    return req;
}
function validateContent(document, svgContent, scopeId) {
    if (svgContent) {
        const frag = document.createDocumentFragment();
        const div = document.createElement("div");
        div.innerHTML = svgContent;
        frag.appendChild(div);
        for (let i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
                div.removeChild(div.childNodes[i]);
            }
        }
        const svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
            if (scopeId) {
                svgElm.setAttribute("class", scopeId);
            }
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return "";
}
function createColorClasses$1(color) {
    return (color) ? {
        "ion-color": true,
        [`ion-color-${color}`]: true
    } : null;
}

export { Button as IonButton, Icon as IonIcon };
