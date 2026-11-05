import * as $dara from '@darabonba/typescript';
import { DescribeApplicationPerformanceResponseBody } from "./DescribeApplicationPerformanceResponseBody";
export declare class DescribeApplicationPerformanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeApplicationPerformanceResponseBody;
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
