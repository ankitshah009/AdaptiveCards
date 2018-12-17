import * as Adaptive from "adaptivecards";
import * as Designer from "../adaptivecards-designer";
export declare class CortanaContainer extends Designer.HostContainer {
    renderTo(hostElement: HTMLElement): void;
    getHostConfig(): Adaptive.HostConfig;
}