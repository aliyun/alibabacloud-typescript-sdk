import * as $dara from '@darabonba/typescript';
import { GetContextDatabaseSyncSourceSelectionResponseBody } from "./GetContextDatabaseSyncSourceSelectionResponseBody";
export declare class GetContextDatabaseSyncSourceSelectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetContextDatabaseSyncSourceSelectionResponseBody;
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
