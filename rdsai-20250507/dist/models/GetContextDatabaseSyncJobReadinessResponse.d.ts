import * as $dara from '@darabonba/typescript';
import { GetContextDatabaseSyncJobReadinessResponseBody } from "./GetContextDatabaseSyncJobReadinessResponseBody";
export declare class GetContextDatabaseSyncJobReadinessResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetContextDatabaseSyncJobReadinessResponseBody;
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
