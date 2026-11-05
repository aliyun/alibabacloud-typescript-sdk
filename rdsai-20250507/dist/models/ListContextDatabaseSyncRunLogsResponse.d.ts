import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseSyncRunLogsResponseBody } from "./ListContextDatabaseSyncRunLogsResponseBody";
export declare class ListContextDatabaseSyncRunLogsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseSyncRunLogsResponseBody;
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
