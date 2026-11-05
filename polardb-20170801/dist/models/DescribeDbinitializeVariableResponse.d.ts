import * as $dara from '@darabonba/typescript';
import { DescribeDBInitializeVariableResponseBody } from "./DescribeDbinitializeVariableResponseBody";
export declare class DescribeDBInitializeVariableResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInitializeVariableResponseBody;
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
