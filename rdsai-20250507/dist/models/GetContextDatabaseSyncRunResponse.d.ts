import * as $dara from '@darabonba/typescript';
import { GetContextDatabaseSyncRunResponseBody } from "./GetContextDatabaseSyncRunResponseBody";
export declare class GetContextDatabaseSyncRunResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetContextDatabaseSyncRunResponseBody;
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
