import * as $dara from '@darabonba/typescript';
import { RemoveFingerprintFromOIDCProviderResponseBody } from "./RemoveFingerprintFromOidcproviderResponseBody";
export declare class RemoveFingerprintFromOIDCProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RemoveFingerprintFromOIDCProviderResponseBody;
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
