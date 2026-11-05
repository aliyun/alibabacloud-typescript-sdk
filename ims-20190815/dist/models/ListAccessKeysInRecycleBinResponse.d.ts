import * as $dara from '@darabonba/typescript';
import { ListAccessKeysInRecycleBinResponseBody } from "./ListAccessKeysInRecycleBinResponseBody";
export declare class ListAccessKeysInRecycleBinResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListAccessKeysInRecycleBinResponseBody;
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
