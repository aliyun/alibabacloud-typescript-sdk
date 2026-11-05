import * as $dara from '@darabonba/typescript';
import { DescribeApplicationLogsResponseBody } from "./DescribeApplicationLogsResponseBody";
export declare class DescribeApplicationLogsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeApplicationLogsResponseBody;
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
