import * as $dara from '@darabonba/typescript';
import { GetAccessKeyPolicyForAccountResponseBody } from "./GetAccessKeyPolicyForAccountResponseBody";
export declare class GetAccessKeyPolicyForAccountResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAccessKeyPolicyForAccountResponseBody;
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
