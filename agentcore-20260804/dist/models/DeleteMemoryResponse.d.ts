import * as $dara from '@darabonba/typescript';
import { DeleteMemoryResponseBody } from "./DeleteMemoryResponseBody";
export declare class DeleteMemoryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteMemoryResponseBody;
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
