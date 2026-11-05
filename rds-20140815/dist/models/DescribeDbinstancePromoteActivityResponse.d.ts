import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancePromoteActivityResponseBody } from "./DescribeDbinstancePromoteActivityResponseBody";
export declare class DescribeDBInstancePromoteActivityResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstancePromoteActivityResponseBody;
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
