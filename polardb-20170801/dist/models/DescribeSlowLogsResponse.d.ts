import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogsResponseBody } from "./DescribeSlowLogsResponseBody";
export declare class DescribeSlowLogsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSlowLogsResponseBody;
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
