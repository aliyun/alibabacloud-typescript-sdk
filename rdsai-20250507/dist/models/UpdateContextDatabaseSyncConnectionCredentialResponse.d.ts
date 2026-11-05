import * as $dara from '@darabonba/typescript';
import { UpdateContextDatabaseSyncConnectionCredentialResponseBody } from "./UpdateContextDatabaseSyncConnectionCredentialResponseBody";
export declare class UpdateContextDatabaseSyncConnectionCredentialResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateContextDatabaseSyncConnectionCredentialResponseBody;
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
