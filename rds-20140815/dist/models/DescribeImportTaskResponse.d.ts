import * as $dara from '@darabonba/typescript';
import { DescribeImportTaskResponseBody } from "./DescribeImportTaskResponseBody";
export declare class DescribeImportTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeImportTaskResponseBody;
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
