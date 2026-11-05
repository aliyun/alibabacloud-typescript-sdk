import * as $dara from '@darabonba/typescript';
import { DescribeErrorLogsResponseBody } from "./DescribeErrorLogsResponseBody";
export declare class DescribeErrorLogsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeErrorLogsResponseBody;
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
