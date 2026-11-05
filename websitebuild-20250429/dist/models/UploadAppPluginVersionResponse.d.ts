import * as $dara from '@darabonba/typescript';
import { UploadAppPluginVersionResponseBody } from "./UploadAppPluginVersionResponseBody";
export declare class UploadAppPluginVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UploadAppPluginVersionResponseBody;
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
