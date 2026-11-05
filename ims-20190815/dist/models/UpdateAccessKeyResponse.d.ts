import * as $dara from '@darabonba/typescript';
import { UpdateAccessKeyResponseBody } from "./UpdateAccessKeyResponseBody";
export declare class UpdateAccessKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateAccessKeyResponseBody;
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
