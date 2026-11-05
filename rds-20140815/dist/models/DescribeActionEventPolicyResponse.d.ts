import * as $dara from '@darabonba/typescript';
import { DescribeActionEventPolicyResponseBody } from "./DescribeActionEventPolicyResponseBody";
export declare class DescribeActionEventPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeActionEventPolicyResponseBody;
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
