import * as $dara from '@darabonba/typescript';
import { UpdateOIDCProviderResponseBody } from "./UpdateOidcproviderResponseBody";
export declare class UpdateOIDCProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateOIDCProviderResponseBody;
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
