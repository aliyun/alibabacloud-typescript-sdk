import * as $dara from '@darabonba/typescript';
import { DeleteOIDCProviderResponseBody } from "./DeleteOidcproviderResponseBody";
export declare class DeleteOIDCProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteOIDCProviderResponseBody;
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
