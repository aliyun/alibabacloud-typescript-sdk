import * as $dara from '@darabonba/typescript';
import { DescribeActiveOperationTaskResponseBody } from "./DescribeActiveOperationTaskResponseBody";
export declare class DescribeActiveOperationTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeActiveOperationTaskResponseBody;
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
