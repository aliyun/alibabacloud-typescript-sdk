import * as $dara from '@darabonba/typescript';
import { GetContextDatabaseSyncJobResponseBody } from "./GetContextDatabaseSyncJobResponseBody";
export declare class GetContextDatabaseSyncJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetContextDatabaseSyncJobResponseBody;
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
