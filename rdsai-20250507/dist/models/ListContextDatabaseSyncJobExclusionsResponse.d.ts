import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseSyncJobExclusionsResponseBody } from "./ListContextDatabaseSyncJobExclusionsResponseBody";
export declare class ListContextDatabaseSyncJobExclusionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseSyncJobExclusionsResponseBody;
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
