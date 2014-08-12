declare module Card {
    var READY: string;
    var ENTER: string;
    var EXIT: string;
}
declare module JXON {
    function parse(parent: any): any;
}
declare module Application {
    var LOAD: string;
}
declare module application {
    var id: string;
    var isCordova: boolean;
    var version: string;
    var cards: HTMLElement[];
    var header: HTMLElement;
    var footer: HTMLElement;
    var main: HTMLElement;
    var defaultCard: HTMLElement;
    var currentCard: HTMLElement;
    function goto(path: string, transition?: Transition, preventHistory?: boolean): void;
    function getRoute(): string;
    function offCanvas(left?: string): void;
    function getElementById(id: any): Element;
    function querySelector(selector: any): Element;
    function querySelectorAll(selector: any): NodeList;
    function getElementsByName(name: any): NodeList;
}
declare module Savvy {
}
declare module Savvy {
}
interface Transition {
    from: string;
    to: string;
    duration: number;
    inverse: Transition;
}
declare module Transition {
    var CUT: Transition;
    var SLIDE_LEFT: Transition;
    var SLIDE_RIGHT: Transition;
    var COVER_LEFT: Transition;
    var COVER_RIGHT: Transition;
    var UNCOVER_LEFT: Transition;
    var UNCOVER_RIGHT: Transition;
    var COVER_LEFT_FADE: Transition;
    var COVER_RIGHT_FADE: Transition;
    var UNCOVER_LEFT_FADE: Transition;
    var UNCOVER_RIGHT_FADE: Transition;
    var OFF_CANVASS_NONE: string;
    var OFF_CANVASS_LEFT: string;
    var OFF_CANVASS_RIGHT: string;
}
declare module Savvy {
    function _eval(code: string, context?: any): void;
}
