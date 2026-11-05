import * as $dara from '@darabonba/typescript';
import { UpdateContextDatabaseSyncJobScheduleResponseBody } from "./UpdateContextDatabaseSyncJobScheduleResponseBody";
export declare class UpdateContextDatabaseSyncJobScheduleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateContextDatabaseSyncJobScheduleResponseBody;
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
