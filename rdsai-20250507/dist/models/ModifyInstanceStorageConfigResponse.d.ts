import * as $dara from '@darabonba/typescript';
import { ModifyInstanceStorageConfigResponseBody } from "./ModifyInstanceStorageConfigResponseBody";
export declare class ModifyInstanceStorageConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyInstanceStorageConfigResponseBody;
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
