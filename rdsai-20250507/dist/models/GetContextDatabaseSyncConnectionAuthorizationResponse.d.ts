import * as $dara from '@darabonba/typescript';
import { GetContextDatabaseSyncConnectionAuthorizationResponseBody } from "./GetContextDatabaseSyncConnectionAuthorizationResponseBody";
export declare class GetContextDatabaseSyncConnectionAuthorizationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetContextDatabaseSyncConnectionAuthorizationResponseBody;
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
