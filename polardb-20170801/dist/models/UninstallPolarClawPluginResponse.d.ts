import * as $dara from '@darabonba/typescript';
import { UninstallPolarClawPluginResponseBody } from "./UninstallPolarClawPluginResponseBody";
export declare class UninstallPolarClawPluginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UninstallPolarClawPluginResponseBody;
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
