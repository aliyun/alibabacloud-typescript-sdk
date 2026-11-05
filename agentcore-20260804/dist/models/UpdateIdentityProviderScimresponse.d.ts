import * as $dara from '@darabonba/typescript';
import { UpdateIdentityProviderSCIMResponseBody } from "./UpdateIdentityProviderScimresponseBody";
export declare class UpdateIdentityProviderSCIMResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateIdentityProviderSCIMResponseBody;
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
