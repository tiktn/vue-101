/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';

import { k as createThemedClasses } from './chunk-b9ec67ac.js';

class InfiniteScroll {
    constructor() {
        this.thrPx = 0;
        this.thrPc = 0;
        this.didFire = false;
        this.isBusy = false;
        this.isLoading = false;
        this.threshold = '15%';
        this.disabled = false;
        this.position = 'bottom';
    }
    thresholdChanged(val) {
        if (val.lastIndexOf('%') > -1) {
            this.thrPx = 0;
            this.thrPc = (parseFloat(val) / 100);
        }
        else {
            this.thrPx = parseFloat(val);
            this.thrPc = 0;
        }
    }
    disabledChanged(val) {
        this.enableScrollEvents(!val);
    }
    async componentDidLoad() {
        const contentEl = this.el.closest('ion-content');
        if (contentEl) {
            await contentEl.componentOnReady();
            this.scrollEl = await contentEl.getScrollElement();
        }
        this.thresholdChanged(this.threshold);
        this.enableScrollEvents(!this.disabled);
    }
    componentDidUnload() {
        this.scrollEl = undefined;
    }
    onScroll() {
        const scrollEl = this.scrollEl;
        if (!scrollEl || !this.canStart()) {
            return 1;
        }
        const infiniteHeight = this.el.offsetHeight;
        if (infiniteHeight === 0) {
            return 2;
        }
        const scrollTop = scrollEl.scrollTop;
        const scrollHeight = scrollEl.scrollHeight;
        const height = scrollEl.offsetHeight;
        const threshold = this.thrPc !== 0 ? (height * this.thrPc) : this.thrPx;
        const distanceFromInfinite = (this.position === 'bottom')
            ? scrollHeight - infiniteHeight - scrollTop - threshold - height
            : scrollTop - infiniteHeight - threshold;
        if (distanceFromInfinite < 0) {
            if (!this.didFire) {
                this.isLoading = true;
                this.didFire = true;
                this.ionInfinite.emit();
                return 3;
            }
        }
        else {
            this.didFire = false;
        }
        return 4;
    }
    complete() {
        const scrollEl = this.scrollEl;
        if (!this.isLoading || !scrollEl) {
            return;
        }
        this.isLoading = false;
    }
    canStart() {
        return (!this.disabled &&
            !this.isBusy &&
            !!this.scrollEl &&
            !this.isLoading);
    }
    enableScrollEvents(shouldListen) {
        if (this.scrollEl) {
            this.enableListener(this, 'scroll', shouldListen, this.scrollEl);
        }
    }
    hostData() {
        return {
            class: {
                'infinite-scroll-loading': this.isLoading,
                'infinite-scroll-enabled': !this.disabled
            }
        };
    }
    static get is() { return "ion-infinite-scroll"; }
    static get properties() { return {
        "complete": {
            "method": true
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "el": {
            "elementRef": true
        },
        "enableListener": {
            "context": "enableListener"
        },
        "isLoading": {
            "state": true
        },
        "position": {
            "type": String,
            "attr": "position"
        },
        "queue": {
            "context": "queue"
        },
        "threshold": {
            "type": String,
            "attr": "threshold",
            "watchCallbacks": ["thresholdChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionInfinite",
            "method": "ionInfinite",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "scroll",
            "method": "onScroll",
            "disabled": true,
            "passive": true
        }]; }
    static get style() { return "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"; }
}

class InfiniteScrollContent {
    componentDidLoad() {
        if (this.loadingSpinner === undefined) {
            this.loadingSpinner = this.config.get('infiniteLoadingSpinner', this.config.get('spinner', 'lines'));
        }
    }
    hostData() {
        return {
            class: createThemedClasses(this.mode, 'infinite-scroll-content')
        };
    }
    render() {
        return (h("div", { class: "infinite-loading" },
            this.loadingSpinner && (h("div", { class: "infinite-loading-spinner" },
                h("ion-spinner", { name: this.loadingSpinner }))),
            this.loadingText && (h("div", { class: "infinite-loading-text", innerHTML: this.loadingText }))));
    }
    static get is() { return "ion-infinite-scroll-content"; }
    static get properties() { return {
        "config": {
            "context": "config"
        },
        "loadingSpinner": {
            "type": String,
            "attr": "loading-spinner",
            "mutable": true
        },
        "loadingText": {
            "type": String,
            "attr": "loading-text"
        }
    }; }
    static get style() { return "ion-infinite-scroll-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin:0 0 32px;display:none;width:100%}.infinite-loading-text{margin:4px 32px 0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-text-color-step-400,#666)}"; }
    static get styleMode() { return "ios"; }
}

export { InfiniteScroll as IonInfiniteScroll, InfiniteScrollContent as IonInfiniteScrollContent };
