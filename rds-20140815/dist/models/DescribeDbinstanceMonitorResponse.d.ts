import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceMonitorResponseBody } from "./DescribeDbinstanceMonitorResponseBody";
export declare class DescribeDBInstanceMonitorResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceMonitorResponseBody;
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
