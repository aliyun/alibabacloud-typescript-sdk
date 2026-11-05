import * as $dara from '@darabonba/typescript';
import { CancelContextDatabaseSyncDiscoveryResponseBody } from "./CancelContextDatabaseSyncDiscoveryResponseBody";
export declare class CancelContextDatabaseSyncDiscoveryResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CancelContextDatabaseSyncDiscoveryResponseBody;
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
