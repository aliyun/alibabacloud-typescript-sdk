import * as $dara from '@darabonba/typescript';
import { DeleteContextDatabaseSyncConnectionResponseBody } from "./DeleteContextDatabaseSyncConnectionResponseBody";
export declare class DeleteContextDatabaseSyncConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteContextDatabaseSyncConnectionResponseBody;
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
