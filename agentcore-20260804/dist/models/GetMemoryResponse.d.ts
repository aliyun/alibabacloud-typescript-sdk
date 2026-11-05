import * as $dara from '@darabonba/typescript';
import { GetMemoryResponseBody } from "./GetMemoryResponseBody";
export declare class GetMemoryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetMemoryResponseBody;
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
