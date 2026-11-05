import * as $dara from '@darabonba/typescript';
import { DescribePackageDeductionsResponseBody } from "./DescribePackageDeductionsResponseBody";
export declare class DescribePackageDeductionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePackageDeductionsResponseBody;
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
