import * as $dara from '@darabonba/typescript';
import { RetryFailedContextDatabaseSyncRunResponseBody } from "./RetryFailedContextDatabaseSyncRunResponseBody";
export declare class RetryFailedContextDatabaseSyncRunResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RetryFailedContextDatabaseSyncRunResponseBody;
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
