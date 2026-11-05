import * as $dara from '@darabonba/typescript';
import { VerifyContextDatabaseSyncConnectionResponseBody } from "./VerifyContextDatabaseSyncConnectionResponseBody";
export declare class VerifyContextDatabaseSyncConnectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: VerifyContextDatabaseSyncConnectionResponseBody;
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
