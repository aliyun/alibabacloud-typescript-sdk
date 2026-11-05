import * as $dara from '@darabonba/typescript';
import { UpdateContextDatabaseSyncJobResponseBody } from "./UpdateContextDatabaseSyncJobResponseBody";
export declare class UpdateContextDatabaseSyncJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateContextDatabaseSyncJobResponseBody;
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
