import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseApiKeysResponseBody } from "./ListContextDatabaseApiKeysResponseBody";
export declare class ListContextDatabaseApiKeysResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseApiKeysResponseBody;
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
