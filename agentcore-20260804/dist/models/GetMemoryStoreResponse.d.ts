import * as $dara from '@darabonba/typescript';
import { GetMemoryStoreResponseBody } from "./GetMemoryStoreResponseBody";
export declare class GetMemoryStoreResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetMemoryStoreResponseBody;
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
