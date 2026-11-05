import * as $dara from '@darabonba/typescript';
import { DeleteAccessKeyResponseBody } from "./DeleteAccessKeyResponseBody";
export declare class DeleteAccessKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAccessKeyResponseBody;
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
