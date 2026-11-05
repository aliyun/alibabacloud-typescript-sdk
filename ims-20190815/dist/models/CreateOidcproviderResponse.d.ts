import * as $dara from '@darabonba/typescript';
import { CreateOIDCProviderResponseBody } from "./CreateOidcproviderResponseBody";
export declare class CreateOIDCProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateOIDCProviderResponseBody;
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
