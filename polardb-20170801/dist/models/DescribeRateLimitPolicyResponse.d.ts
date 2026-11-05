import * as $dara from '@darabonba/typescript';
import { DescribeRateLimitPolicyResponseBody } from "./DescribeRateLimitPolicyResponseBody";
export declare class DescribeRateLimitPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRateLimitPolicyResponseBody;
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
