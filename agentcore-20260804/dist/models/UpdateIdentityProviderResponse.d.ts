import * as $dara from '@darabonba/typescript';
import { UpdateIdentityProviderResponseBody } from "./UpdateIdentityProviderResponseBody";
export declare class UpdateIdentityProviderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateIdentityProviderResponseBody;
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
