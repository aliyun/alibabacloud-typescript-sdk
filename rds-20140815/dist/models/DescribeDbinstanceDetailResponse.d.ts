import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceDetailResponseBody } from "./DescribeDbinstanceDetailResponseBody";
export declare class DescribeDBInstanceDetailResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceDetailResponseBody;
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
