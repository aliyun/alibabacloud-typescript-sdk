import * as $dara from '@darabonba/typescript';
import { CreateContextDatabaseSyncJobResponseBody } from "./CreateContextDatabaseSyncJobResponseBody";
export declare class CreateContextDatabaseSyncJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateContextDatabaseSyncJobResponseBody;
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
