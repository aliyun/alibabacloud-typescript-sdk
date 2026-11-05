import * as $dara from '@darabonba/typescript';
import { DeleteContextDatabaseSyncSourceResponseBody } from "./DeleteContextDatabaseSyncSourceResponseBody";
export declare class DeleteContextDatabaseSyncSourceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteContextDatabaseSyncSourceResponseBody;
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
