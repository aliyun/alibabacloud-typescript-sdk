import * as $dara from '@darabonba/typescript';
import { CreateContextDatabaseSyncConnectionResponseBody } from "./CreateContextDatabaseSyncConnectionResponseBody";
export declare class CreateContextDatabaseSyncConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateContextDatabaseSyncConnectionResponseBody;
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
