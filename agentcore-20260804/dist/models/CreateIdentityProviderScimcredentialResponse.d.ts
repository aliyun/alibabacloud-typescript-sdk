import * as $dara from '@darabonba/typescript';
import { CreateIdentityProviderSCIMCredentialResponseBody } from "./CreateIdentityProviderScimcredentialResponseBody";
export declare class CreateIdentityProviderSCIMCredentialResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateIdentityProviderSCIMCredentialResponseBody;
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
