import * as $dara from '@darabonba/typescript';
import { UpdateMemoryResponseBody } from "./UpdateMemoryResponseBody";
export declare class UpdateMemoryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateMemoryResponseBody;
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
