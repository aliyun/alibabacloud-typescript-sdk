import * as $dara from '@darabonba/typescript';
import { PrepareIdentityProviderSCIMResponseBody } from "./PrepareIdentityProviderScimresponseBody";
export declare class PrepareIdentityProviderSCIMResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: PrepareIdentityProviderSCIMResponseBody;
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
