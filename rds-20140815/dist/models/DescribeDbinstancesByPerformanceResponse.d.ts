import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesByPerformanceResponseBody } from "./DescribeDbinstancesByPerformanceResponseBody";
export declare class DescribeDBInstancesByPerformanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstancesByPerformanceResponseBody;
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
