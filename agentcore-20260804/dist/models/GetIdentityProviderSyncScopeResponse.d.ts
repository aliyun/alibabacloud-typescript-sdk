import * as $dara from '@darabonba/typescript';
import { GetIdentityProviderSyncScopeResponseBody } from "./GetIdentityProviderSyncScopeResponseBody";
export declare class GetIdentityProviderSyncScopeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetIdentityProviderSyncScopeResponseBody;
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
