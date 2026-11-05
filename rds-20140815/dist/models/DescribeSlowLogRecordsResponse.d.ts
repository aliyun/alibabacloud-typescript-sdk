import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBody } from "./DescribeSlowLogRecordsResponseBody";
export declare class DescribeSlowLogRecordsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSlowLogRecordsResponseBody;
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
