import * as $dara from '@darabonba/typescript';
import { DescribeRCInvocationResultsResponseBody } from "./DescribeRcinvocationResultsResponseBody";
export declare class DescribeRCInvocationResultsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCInvocationResultsResponseBody;
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
