import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoResponseBody } from "./DescribeDbinstanceNetInfoResponseBody";
export declare class DescribeDBInstanceNetInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceNetInfoResponseBody;
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
