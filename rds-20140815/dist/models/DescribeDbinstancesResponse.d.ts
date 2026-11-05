import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesResponseBody } from "./DescribeDbinstancesResponseBody";
export declare class DescribeDBInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstancesResponseBody;
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
