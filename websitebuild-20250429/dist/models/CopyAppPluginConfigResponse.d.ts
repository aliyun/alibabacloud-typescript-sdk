import * as $dara from '@darabonba/typescript';
import { CopyAppPluginConfigResponseBody } from "./CopyAppPluginConfigResponseBody";
export declare class CopyAppPluginConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CopyAppPluginConfigResponseBody;
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
