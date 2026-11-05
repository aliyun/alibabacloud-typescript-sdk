import * as $dara from '@darabonba/typescript';
import { ListApiKeysResponseBody } from "./ListApiKeysResponseBody";
export declare class ListApiKeysResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListApiKeysResponseBody;
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
