import * as $dara from '@darabonba/typescript';
import { GetContextDatabaseSyncConnectionResponseBody } from "./GetContextDatabaseSyncConnectionResponseBody";
export declare class GetContextDatabaseSyncConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetContextDatabaseSyncConnectionResponseBody;
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
