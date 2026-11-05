import * as $dara from '@darabonba/typescript';
import { DeleteMemoryStoreResponseBody } from "./DeleteMemoryStoreResponseBody";
export declare class DeleteMemoryStoreResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteMemoryStoreResponseBody;
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
