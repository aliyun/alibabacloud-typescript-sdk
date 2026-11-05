import * as $dara from '@darabonba/typescript';
import { ListMemoryStoresResponseBody } from "./ListMemoryStoresResponseBody";
export declare class ListMemoryStoresResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListMemoryStoresResponseBody;
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
