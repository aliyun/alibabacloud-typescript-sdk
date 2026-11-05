import * as $dara from '@darabonba/typescript';
import { UpdateContextDatabaseSyncSourceResponseBody } from "./UpdateContextDatabaseSyncSourceResponseBody";
export declare class UpdateContextDatabaseSyncSourceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateContextDatabaseSyncSourceResponseBody;
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
