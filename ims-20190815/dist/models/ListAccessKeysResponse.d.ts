import * as $dara from '@darabonba/typescript';
import { ListAccessKeysResponseBody } from "./ListAccessKeysResponseBody";
export declare class ListAccessKeysResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAccessKeysResponseBody;
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
