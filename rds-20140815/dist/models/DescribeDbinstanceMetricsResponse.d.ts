import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceMetricsResponseBody } from "./DescribeDbinstanceMetricsResponseBody";
export declare class DescribeDBInstanceMetricsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceMetricsResponseBody;
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
