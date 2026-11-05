import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceIPArrayListResponseBody } from "./DescribeDbinstanceIparrayListResponseBody";
export declare class DescribeDBInstanceIPArrayListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceIPArrayListResponseBody;
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
