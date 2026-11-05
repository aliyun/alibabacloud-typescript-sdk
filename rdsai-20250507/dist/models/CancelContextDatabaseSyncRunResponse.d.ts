import * as $dara from '@darabonba/typescript';
import { CancelContextDatabaseSyncRunResponseBody } from "./CancelContextDatabaseSyncRunResponseBody";
export declare class CancelContextDatabaseSyncRunResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CancelContextDatabaseSyncRunResponseBody;
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
