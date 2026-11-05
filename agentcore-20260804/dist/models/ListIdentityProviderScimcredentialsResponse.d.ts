import * as $dara from '@darabonba/typescript';
import { ListIdentityProviderSCIMCredentialsResponseBody } from "./ListIdentityProviderScimcredentialsResponseBody";
export declare class ListIdentityProviderSCIMCredentialsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListIdentityProviderSCIMCredentialsResponseBody;
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
