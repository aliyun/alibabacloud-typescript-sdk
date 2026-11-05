import * as $dara from '@darabonba/typescript';
import { DescribeRunIdDeductionsResponseBody } from "./DescribeRunIdDeductionsResponseBody";
export declare class DescribeRunIdDeductionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRunIdDeductionsResponseBody;
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
