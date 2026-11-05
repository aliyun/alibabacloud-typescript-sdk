import * as $dara from '@darabonba/typescript';
import { DeleteIdentityProviderResponseBody } from "./DeleteIdentityProviderResponseBody";
export declare class DeleteIdentityProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteIdentityProviderResponseBody;
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
