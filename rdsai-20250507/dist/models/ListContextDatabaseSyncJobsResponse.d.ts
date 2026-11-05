import * as $dara from '@darabonba/typescript';
import { ListContextDatabaseSyncJobsResponseBody } from "./ListContextDatabaseSyncJobsResponseBody";
export declare class ListContextDatabaseSyncJobsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListContextDatabaseSyncJobsResponseBody;
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
