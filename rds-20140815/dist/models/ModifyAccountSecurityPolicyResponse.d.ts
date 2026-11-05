import * as $dara from '@darabonba/typescript';
import { ModifyAccountSecurityPolicyResponseBody } from "./ModifyAccountSecurityPolicyResponseBody";
export declare class ModifyAccountSecurityPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAccountSecurityPolicyResponseBody;
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
