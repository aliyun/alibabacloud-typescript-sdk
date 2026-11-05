import * as $dara from '@darabonba/typescript';
import { AddFingerprintToOIDCProviderResponseBody } from "./AddFingerprintToOidcproviderResponseBody";
export declare class AddFingerprintToOIDCProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddFingerprintToOIDCProviderResponseBody;
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
