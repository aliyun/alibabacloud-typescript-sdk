import * as $dara from '@darabonba/typescript';
import { UpdateContextDatabaseSyncSourceSelectionResponseBody } from "./UpdateContextDatabaseSyncSourceSelectionResponseBody";
export declare class UpdateContextDatabaseSyncSourceSelectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateContextDatabaseSyncSourceSelectionResponseBody;
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
