import * as $dara from '@darabonba/typescript';
import { GetContextDatabaseSyncSourceResponseBody } from "./GetContextDatabaseSyncSourceResponseBody";
export declare class GetContextDatabaseSyncSourceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetContextDatabaseSyncSourceResponseBody;
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
