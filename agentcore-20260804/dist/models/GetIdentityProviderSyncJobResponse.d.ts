import * as $dara from '@darabonba/typescript';
import { GetIdentityProviderSyncJobResponseBody } from "./GetIdentityProviderSyncJobResponseBody";
export declare class GetIdentityProviderSyncJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetIdentityProviderSyncJobResponseBody;
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
