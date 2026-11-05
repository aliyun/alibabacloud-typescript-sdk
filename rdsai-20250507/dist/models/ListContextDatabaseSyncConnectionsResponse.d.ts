import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseSyncConnectionsResponseBody } from "./ListContextDatabaseSyncConnectionsResponseBody";
export declare class ListContextDatabaseSyncConnectionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseSyncConnectionsResponseBody;
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
