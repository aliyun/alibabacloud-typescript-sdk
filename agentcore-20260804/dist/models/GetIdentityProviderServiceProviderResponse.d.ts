import * as $dara from '@darabonba/typescript';
import { GetIdentityProviderServiceProviderResponseBody } from "./GetIdentityProviderServiceProviderResponseBody";
export declare class GetIdentityProviderServiceProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetIdentityProviderServiceProviderResponseBody;
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
