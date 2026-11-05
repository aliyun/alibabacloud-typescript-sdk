import * as $dara from '@darabonba/typescript';
import { DeleteContextDatabaseSyncJobResponseBody } from "./DeleteContextDatabaseSyncJobResponseBody";
export declare class DeleteContextDatabaseSyncJobResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteContextDatabaseSyncJobResponseBody;
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
