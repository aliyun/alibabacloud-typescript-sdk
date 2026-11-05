import * as $dara from '@darabonba/typescript';
import { GetContextDatabaseSyncJobScheduleResponseBody } from "./GetContextDatabaseSyncJobScheduleResponseBody";
export declare class GetContextDatabaseSyncJobScheduleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetContextDatabaseSyncJobScheduleResponseBody;
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
