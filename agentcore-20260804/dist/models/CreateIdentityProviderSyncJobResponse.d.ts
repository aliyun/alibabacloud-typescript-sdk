import * as $dara from '@darabonba/typescript';
import { CreateIdentityProviderSyncJobResponseBody } from "./CreateIdentityProviderSyncJobResponseBody";
export declare class CreateIdentityProviderSyncJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateIdentityProviderSyncJobResponseBody;
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
