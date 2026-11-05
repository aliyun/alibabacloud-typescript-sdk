import * as $dara from '@darabonba/typescript';
import { UpdateContextDatabaseSyncConnectionResponseBody } from "./UpdateContextDatabaseSyncConnectionResponseBody";
export declare class UpdateContextDatabaseSyncConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateContextDatabaseSyncConnectionResponseBody;
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
