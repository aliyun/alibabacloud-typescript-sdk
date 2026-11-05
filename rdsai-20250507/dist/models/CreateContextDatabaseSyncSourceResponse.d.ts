import * as $dara from '@darabonba/typescript';
import { CreateContextDatabaseSyncSourceResponseBody } from "./CreateContextDatabaseSyncSourceResponseBody";
export declare class CreateContextDatabaseSyncSourceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateContextDatabaseSyncSourceResponseBody;
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
