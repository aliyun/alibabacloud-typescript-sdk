import * as $dara from '@darabonba/typescript';
import { DescribeHistoryTasksStatResponseBody } from "./DescribeHistoryTasksStatResponseBody";
export declare class DescribeHistoryTasksStatResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeHistoryTasksStatResponseBody;
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
