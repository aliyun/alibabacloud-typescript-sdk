import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceCLSResponseBody } from "./DescribeDbinstanceClsresponseBody";
export declare class DescribeDBInstanceCLSResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceCLSResponseBody;
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
