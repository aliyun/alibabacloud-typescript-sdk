import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseSyncJobDocumentsResponseBody } from "./ListContextDatabaseSyncJobDocumentsResponseBody";
export declare class ListContextDatabaseSyncJobDocumentsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseSyncJobDocumentsResponseBody;
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
