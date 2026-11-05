import * as $dara from '@darabonba/typescript';
import { CreateIdentityProviderResponseBody } from "./CreateIdentityProviderResponseBody";
export declare class CreateIdentityProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateIdentityProviderResponseBody;
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
