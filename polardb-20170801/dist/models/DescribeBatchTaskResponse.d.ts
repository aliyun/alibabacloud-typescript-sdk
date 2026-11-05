import * as $dara from '@darabonba/typescript';
import { DescribeBatchTaskResponseBody } from "./DescribeBatchTaskResponseBody";
export declare class DescribeBatchTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeBatchTaskResponseBody;
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
