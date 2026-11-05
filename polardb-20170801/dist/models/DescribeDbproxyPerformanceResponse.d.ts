import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyPerformanceResponseBody } from "./DescribeDbproxyPerformanceResponseBody";
export declare class DescribeDBProxyPerformanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBProxyPerformanceResponseBody;
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
