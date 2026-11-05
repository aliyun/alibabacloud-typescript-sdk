import * as $dara from '@darabonba/typescript';
import { DeleteIdentityProviderSCIMCredentialResponseBody } from "./DeleteIdentityProviderScimcredentialResponseBody";
export declare class DeleteIdentityProviderSCIMCredentialResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteIdentityProviderSCIMCredentialResponseBody;
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
