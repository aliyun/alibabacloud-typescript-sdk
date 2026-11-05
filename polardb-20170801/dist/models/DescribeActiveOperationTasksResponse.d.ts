import * as $dara from '@darabonba/typescript';
import { DescribeActiveOperationTasksResponseBody } from "./DescribeActiveOperationTasksResponseBody";
export declare class DescribeActiveOperationTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeActiveOperationTasksResponseBody;
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
