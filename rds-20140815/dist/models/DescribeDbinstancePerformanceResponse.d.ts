import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancePerformanceResponseBody } from "./DescribeDbinstancePerformanceResponseBody";
export declare class DescribeDBInstancePerformanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstancePerformanceResponseBody;
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
