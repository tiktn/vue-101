export declare class GestureController {
    private doc;
    private gestureId;
    private requestedStart;
    private disabledGestures;
    private disabledScroll;
    private capturedId?;
    constructor(doc: Document);
    /**
     * Creates a gesture delegate based on the GestureConfig passed
     */
    createGesture(config: GestureConfig): GestureDelegate;
    /**
     * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
     */
    createBlocker(opts?: BlockerConfig): BlockerDelegate;
    start(gestureName: string, id: number, priority: number): boolean;
    capture(gestureName: string, id: number, priority: number): boolean;
    release(id: number): void;
    disableGesture(gestureName: string, id: number): void;
    enableGesture(gestureName: string, id: number): void;
    disableScroll(id: number): void;
    enableScroll(id: number): void;
    canStart(gestureName: string): boolean;
    isCaptured(): boolean;
    isScrollDisabled(): boolean;
    isDisabled(gestureName: string): boolean;
    private newID;
}
export declare class GestureDelegate {
    private id;
    private name;
    private priority;
    private disableScroll;
    private ctrl?;
    constructor(ctrl: GestureController, id: number, name: string, priority: number, disableScroll: boolean);
    canStart(): boolean;
    start(): boolean;
    capture(): boolean;
    release(): void;
    destroy(): void;
}
export declare class BlockerDelegate {
    private id;
    private disable;
    private disableScroll;
    private ctrl?;
    constructor(ctrl: GestureController, id: number, disable: string[] | undefined, disableScroll: boolean);
    block(): void;
    unblock(): void;
    destroy(): void;
}
export interface GestureConfig {
    name: string;
    priority?: number;
    disableScroll?: boolean;
}
export interface BlockerConfig {
    disable?: string[];
    disableScroll?: boolean;
}
export declare const GESTURE_CONTROLLER: GestureController;
