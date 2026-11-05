import * as $dara from '@darabonba/typescript';
import { SetAccessKeyPolicyForAccountResponseBody } from "./SetAccessKeyPolicyForAccountResponseBody";
export declare class SetAccessKeyPolicyForAccountResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetAccessKeyPolicyForAccountResponseBody;
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
