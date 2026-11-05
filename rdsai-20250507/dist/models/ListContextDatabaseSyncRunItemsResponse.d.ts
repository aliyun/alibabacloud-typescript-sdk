import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseSyncRunItemsResponseBody } from "./ListContextDatabaseSyncRunItemsResponseBody";
export declare class ListContextDatabaseSyncRunItemsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseSyncRunItemsResponseBody;
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
