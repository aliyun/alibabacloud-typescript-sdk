import * as $dara from '@darabonba/typescript';
import { DeleteRateLimitPolicyResponseBody } from "./DeleteRateLimitPolicyResponseBody";
export declare class DeleteRateLimitPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteRateLimitPolicyResponseBody;
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
