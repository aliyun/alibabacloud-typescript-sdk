import * as $dara from '@darabonba/typescript';
import { GetMemoryTaskResponseBody } from "./GetMemoryTaskResponseBody";
export declare class GetMemoryTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetMemoryTaskResponseBody;
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
