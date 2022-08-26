/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IProp } from "./components/demo-playground/prop.type";
import { ISlot } from "./components/demo-playground/slot.type";
export namespace Components {
    interface AppFooter {
    }
    interface AppHeader {
        "activePath": string;
        "inline": boolean;
    }
    interface AppRoot {
    }
    interface CopyCodeBtn {
        "code": string;
    }
    interface DemoFrame {
        "component": string;
        "demo": string;
        "hideSource": boolean;
    }
    interface PageDocs {
        "params": {
    [param: string]: string;
  };
    }
    interface PageHome {
    }
    interface PageNotfound {
    }
    interface PropsPanel {
        "debug": boolean;
        "values": IProp[];
    }
    interface SeoTags {
        "description": string;
        "image": string;
        "pageTitle": string;
    }
    interface SlotsPanel {
        "debug": boolean;
        "values": ISlot[];
    }
    interface WcOutput {
        "usage": string;
    }
    interface WcPlayground {
        "block": boolean;
        "code": string;
        "props": IProp[] | string;
        "slots": ISlot[] | string;
        /**
          * query selector for the component to apply props to
         */
        "tag": string;
    }
}
export interface CopyCodeBtnCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCopyCodeBtnElement;
}
export interface PropsPanelCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPropsPanelElement;
}
export interface SlotsPanelCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSlotsPanelElement;
}
export interface WcOutputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcOutputElement;
}
export interface WcPlaygroundCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcPlaygroundElement;
}
declare global {
    interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {
    }
    var HTMLAppFooterElement: {
        prototype: HTMLAppFooterElement;
        new (): HTMLAppFooterElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCopyCodeBtnElement extends Components.CopyCodeBtn, HTMLStencilElement {
    }
    var HTMLCopyCodeBtnElement: {
        prototype: HTMLCopyCodeBtnElement;
        new (): HTMLCopyCodeBtnElement;
    };
    interface HTMLDemoFrameElement extends Components.DemoFrame, HTMLStencilElement {
    }
    var HTMLDemoFrameElement: {
        prototype: HTMLDemoFrameElement;
        new (): HTMLDemoFrameElement;
    };
    interface HTMLPageDocsElement extends Components.PageDocs, HTMLStencilElement {
    }
    var HTMLPageDocsElement: {
        prototype: HTMLPageDocsElement;
        new (): HTMLPageDocsElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLPageNotfoundElement extends Components.PageNotfound, HTMLStencilElement {
    }
    var HTMLPageNotfoundElement: {
        prototype: HTMLPageNotfoundElement;
        new (): HTMLPageNotfoundElement;
    };
    interface HTMLPropsPanelElement extends Components.PropsPanel, HTMLStencilElement {
    }
    var HTMLPropsPanelElement: {
        prototype: HTMLPropsPanelElement;
        new (): HTMLPropsPanelElement;
    };
    interface HTMLSeoTagsElement extends Components.SeoTags, HTMLStencilElement {
    }
    var HTMLSeoTagsElement: {
        prototype: HTMLSeoTagsElement;
        new (): HTMLSeoTagsElement;
    };
    interface HTMLSlotsPanelElement extends Components.SlotsPanel, HTMLStencilElement {
    }
    var HTMLSlotsPanelElement: {
        prototype: HTMLSlotsPanelElement;
        new (): HTMLSlotsPanelElement;
    };
    interface HTMLWcOutputElement extends Components.WcOutput, HTMLStencilElement {
    }
    var HTMLWcOutputElement: {
        prototype: HTMLWcOutputElement;
        new (): HTMLWcOutputElement;
    };
    interface HTMLWcPlaygroundElement extends Components.WcPlayground, HTMLStencilElement {
    }
    var HTMLWcPlaygroundElement: {
        prototype: HTMLWcPlaygroundElement;
        new (): HTMLWcPlaygroundElement;
    };
    interface HTMLElementTagNameMap {
        "app-footer": HTMLAppFooterElement;
        "app-header": HTMLAppHeaderElement;
        "app-root": HTMLAppRootElement;
        "copy-code-btn": HTMLCopyCodeBtnElement;
        "demo-frame": HTMLDemoFrameElement;
        "page-docs": HTMLPageDocsElement;
        "page-home": HTMLPageHomeElement;
        "page-notfound": HTMLPageNotfoundElement;
        "props-panel": HTMLPropsPanelElement;
        "seo-tags": HTMLSeoTagsElement;
        "slots-panel": HTMLSlotsPanelElement;
        "wc-output": HTMLWcOutputElement;
        "wc-playground": HTMLWcPlaygroundElement;
    }
}
declare namespace LocalJSX {
    interface AppFooter {
    }
    interface AppHeader {
        "activePath"?: string;
        "inline"?: boolean;
    }
    interface AppRoot {
    }
    interface CopyCodeBtn {
        "code"?: string;
        "onCopyCode"?: (event: CopyCodeBtnCustomEvent<any>) => void;
    }
    interface DemoFrame {
        "component"?: string;
        "demo"?: string;
        "hideSource"?: boolean;
    }
    interface PageDocs {
        "params"?: {
    [param: string]: string;
  };
    }
    interface PageHome {
    }
    interface PageNotfound {
    }
    interface PropsPanel {
        "debug"?: boolean;
        "onPropChange"?: (event: PropsPanelCustomEvent<IProp[]>) => void;
        "values"?: IProp[];
    }
    interface SeoTags {
        "description"?: string;
        "image"?: string;
        "pageTitle"?: string;
    }
    interface SlotsPanel {
        "debug"?: boolean;
        "onSlotDisplayChange"?: (event: SlotsPanelCustomEvent<ISlot[]>) => void;
        "values"?: ISlot[];
    }
    interface WcOutput {
        "onCopyCode"?: (event: WcOutputCustomEvent<any>) => void;
        "usage"?: string;
    }
    interface WcPlayground {
        "block"?: boolean;
        "code"?: string;
        "onLoaded"?: (event: WcPlaygroundCustomEvent<HTMLElement>) => void;
        "props"?: IProp[] | string;
        "slots"?: ISlot[] | string;
        /**
          * query selector for the component to apply props to
         */
        "tag"?: string;
    }
    interface IntrinsicElements {
        "app-footer": AppFooter;
        "app-header": AppHeader;
        "app-root": AppRoot;
        "copy-code-btn": CopyCodeBtn;
        "demo-frame": DemoFrame;
        "page-docs": PageDocs;
        "page-home": PageHome;
        "page-notfound": PageNotfound;
        "props-panel": PropsPanel;
        "seo-tags": SeoTags;
        "slots-panel": SlotsPanel;
        "wc-output": WcOutput;
        "wc-playground": WcPlayground;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-footer": LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "copy-code-btn": LocalJSX.CopyCodeBtn & JSXBase.HTMLAttributes<HTMLCopyCodeBtnElement>;
            "demo-frame": LocalJSX.DemoFrame & JSXBase.HTMLAttributes<HTMLDemoFrameElement>;
            "page-docs": LocalJSX.PageDocs & JSXBase.HTMLAttributes<HTMLPageDocsElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-notfound": LocalJSX.PageNotfound & JSXBase.HTMLAttributes<HTMLPageNotfoundElement>;
            "props-panel": LocalJSX.PropsPanel & JSXBase.HTMLAttributes<HTMLPropsPanelElement>;
            "seo-tags": LocalJSX.SeoTags & JSXBase.HTMLAttributes<HTMLSeoTagsElement>;
            "slots-panel": LocalJSX.SlotsPanel & JSXBase.HTMLAttributes<HTMLSlotsPanelElement>;
            "wc-output": LocalJSX.WcOutput & JSXBase.HTMLAttributes<HTMLWcOutputElement>;
            "wc-playground": LocalJSX.WcPlayground & JSXBase.HTMLAttributes<HTMLWcPlaygroundElement>;
        }
    }
}
