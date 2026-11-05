import * as $dara from '@darabonba/typescript';
import { StartContextDatabaseSyncSourceDiscoveryResponseBody } from "./StartContextDatabaseSyncSourceDiscoveryResponseBody";
export declare class StartContextDatabaseSyncSourceDiscoveryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StartContextDatabaseSyncSourceDiscoveryResponseBody;
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
