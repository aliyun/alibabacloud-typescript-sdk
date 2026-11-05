import * as $dara from '@darabonba/typescript';
import { CreateRateLimitPolicyResponseBody } from "./CreateRateLimitPolicyResponseBody";
export declare class CreateRateLimitPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateRateLimitPolicyResponseBody;
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
