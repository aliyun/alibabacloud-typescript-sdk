import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesForCloneResponseBody } from "./DescribeDbinstancesForCloneResponseBody";
export declare class DescribeDBInstancesForCloneResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstancesForCloneResponseBody;
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
