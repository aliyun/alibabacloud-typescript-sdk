import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceReplicationResponseBody } from "./DescribeDbinstanceReplicationResponseBody";
export declare class DescribeDBInstanceReplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceReplicationResponseBody;
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
