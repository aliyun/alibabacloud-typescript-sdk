import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseSyncRunsResponseBody } from "./ListContextDatabaseSyncRunsResponseBody";
export declare class ListContextDatabaseSyncRunsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseSyncRunsResponseBody;
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
