import * as $dara from '@darabonba/typescript';
import { GetIdentityProviderResponseBody } from "./GetIdentityProviderResponseBody";
export declare class GetIdentityProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetIdentityProviderResponseBody;
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
