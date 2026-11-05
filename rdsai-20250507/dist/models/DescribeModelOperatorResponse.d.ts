import * as $dara from '@darabonba/typescript';
import { DescribeModelOperatorResponseBody } from "./DescribeModelOperatorResponseBody";
export declare class DescribeModelOperatorResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeModelOperatorResponseBody;
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
