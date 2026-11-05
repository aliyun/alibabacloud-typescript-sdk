import * as $dara from '@darabonba/typescript';
import { UpdateMemoryStoreResponseBody } from "./UpdateMemoryStoreResponseBody";
export declare class UpdateMemoryStoreResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateMemoryStoreResponseBody;
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
