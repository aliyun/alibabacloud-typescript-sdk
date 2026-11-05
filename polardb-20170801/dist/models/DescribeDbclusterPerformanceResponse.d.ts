import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterPerformanceResponseBody } from "./DescribeDbclusterPerformanceResponseBody";
export declare class DescribeDBClusterPerformanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterPerformanceResponseBody;
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
