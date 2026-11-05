import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseSyncSourcesResponseBody } from "./ListContextDatabaseSyncSourcesResponseBody";
export declare class ListContextDatabaseSyncSourcesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseSyncSourcesResponseBody;
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
