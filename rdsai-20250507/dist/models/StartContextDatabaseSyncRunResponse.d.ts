import * as $dara from '@darabonba/typescript';
import { StartContextDatabaseSyncRunResponseBody } from "./StartContextDatabaseSyncRunResponseBody";
export declare class StartContextDatabaseSyncRunResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StartContextDatabaseSyncRunResponseBody;
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
