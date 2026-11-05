import * as $dara from '@darabonba/typescript';
import { DescribeHistoryTasksResponseBody } from "./DescribeHistoryTasksResponseBody";
export declare class DescribeHistoryTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeHistoryTasksResponseBody;
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
