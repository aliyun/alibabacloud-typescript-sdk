import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseSyncSourceTreeNodesResponseBody } from "./ListContextDatabaseSyncSourceTreeNodesResponseBody";
export declare class ListContextDatabaseSyncSourceTreeNodesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseSyncSourceTreeNodesResponseBody;
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
