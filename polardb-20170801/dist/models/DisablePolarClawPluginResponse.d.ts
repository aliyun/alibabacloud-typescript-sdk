import * as $dara from '@darabonba/typescript';
import { DisablePolarClawPluginResponseBody } from "./DisablePolarClawPluginResponseBody";
export declare class DisablePolarClawPluginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DisablePolarClawPluginResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
