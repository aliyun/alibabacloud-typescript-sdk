import * as $dara from '@darabonba/typescript';
import { CreateMemoryStoreResponseBody } from "./CreateMemoryStoreResponseBody";
export declare class CreateMemoryStoreResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateMemoryStoreResponseBody;
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
