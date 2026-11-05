import * as $dara from '@darabonba/typescript';
import { GetPasswordPolicyResponseBody } from "./GetPasswordPolicyResponseBody";
export declare class GetPasswordPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetPasswordPolicyResponseBody;
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
