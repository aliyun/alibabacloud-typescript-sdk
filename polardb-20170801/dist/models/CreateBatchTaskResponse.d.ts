import * as $dara from '@darabonba/typescript';
import { CreateBatchTaskResponseBody } from "./CreateBatchTaskResponseBody";
export declare class CreateBatchTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateBatchTaskResponseBody;
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
