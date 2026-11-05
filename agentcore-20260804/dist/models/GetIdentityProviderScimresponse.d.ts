import * as $dara from '@darabonba/typescript';
import { GetIdentityProviderSCIMResponseBody } from "./GetIdentityProviderScimresponseBody";
export declare class GetIdentityProviderSCIMResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetIdentityProviderSCIMResponseBody;
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
