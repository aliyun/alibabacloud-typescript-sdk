import * as $dara from '@darabonba/typescript';
import { AddClientIdToOIDCProviderResponseBody } from "./AddClientIdToOidcproviderResponseBody";
export declare class AddClientIdToOIDCProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddClientIdToOIDCProviderResponseBody;
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
