import * as $dara from '@darabonba/typescript';
import { SetPasswordPolicyResponseBody } from "./SetPasswordPolicyResponseBody";
export declare class SetPasswordPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetPasswordPolicyResponseBody;
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
