import * as $dara from '@darabonba/typescript';
import { ModifyRateLimitPolicyResponseBody } from "./ModifyRateLimitPolicyResponseBody";
export declare class ModifyRateLimitPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRateLimitPolicyResponseBody;
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
