import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterMonitorResponseBody } from "./DescribeDbclusterMonitorResponseBody";
export declare class DescribeDBClusterMonitorResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterMonitorResponseBody;
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
