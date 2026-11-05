import * as $dara from '@darabonba/typescript';
import { UninstallAppPluginResponseBody } from "./UninstallAppPluginResponseBody";
export declare class UninstallAppPluginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UninstallAppPluginResponseBody;
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
