/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ColorVariants } from "./types";
export namespace Components {
    interface GoButton {
        /**
          * If set, the button will take up the full width of its parent
         */
        "block"?: boolean;
        /**
          * If this button is disabled
         */
        "disabled"?: boolean;
        /**
          * If `outlined` is true, the button will have a border based on selected variant
          * @see  `variant` property
         */
        "outlined"?: boolean;
        /**
          * Html type of the button
         */
        "type": 'submit' | 'reset' | 'button';
        /**
          * Button variant
         */
        "variant"?: ColorVariants;
    }
}
declare global {
    interface HTMLGoButtonElement extends Components.GoButton, HTMLStencilElement {
    }
    var HTMLGoButtonElement: {
        prototype: HTMLGoButtonElement;
        new (): HTMLGoButtonElement;
    };
    interface HTMLElementTagNameMap {
        "go-button": HTMLGoButtonElement;
    }
}
declare namespace LocalJSX {
    interface GoButton {
        /**
          * If set, the button will take up the full width of its parent
         */
        "block"?: boolean;
        /**
          * If this button is disabled
         */
        "disabled"?: boolean;
        /**
          * If `outlined` is true, the button will have a border based on selected variant
          * @see  `variant` property
         */
        "outlined"?: boolean;
        /**
          * Html type of the button
         */
        "type"?: 'submit' | 'reset' | 'button';
        /**
          * Button variant
         */
        "variant"?: ColorVariants;
    }
    interface IntrinsicElements {
        "go-button": GoButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "go-button": LocalJSX.GoButton & JSXBase.HTMLAttributes<HTMLGoButtonElement>;
        }
    }
}
