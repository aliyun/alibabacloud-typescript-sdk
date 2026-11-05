import * as $dara from '@darabonba/typescript';
import { RemoveClientIdFromOIDCProviderResponseBody } from "./RemoveClientIdFromOidcproviderResponseBody";
export declare class RemoveClientIdFromOIDCProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RemoveClientIdFromOIDCProviderResponseBody;
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
