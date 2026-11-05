import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceEndpointsResponseBody } from "./DescribeDbinstanceEndpointsResponseBody";
export declare class DescribeDBInstanceEndpointsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceEndpointsResponseBody;
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
