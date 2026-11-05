import * as $dara from '@darabonba/typescript';
import { DescribeDBNodePerformanceResponseBody } from "./DescribeDbnodePerformanceResponseBody";
export declare class DescribeDBNodePerformanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBNodePerformanceResponseBody;
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
