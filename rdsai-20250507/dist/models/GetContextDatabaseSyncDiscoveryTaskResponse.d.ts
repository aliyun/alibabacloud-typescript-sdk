import * as $dara from '@darabonba/typescript';
import { GetContextDatabaseSyncDiscoveryTaskResponseBody } from "./GetContextDatabaseSyncDiscoveryTaskResponseBody";
export declare class GetContextDatabaseSyncDiscoveryTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetContextDatabaseSyncDiscoveryTaskResponseBody;
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
