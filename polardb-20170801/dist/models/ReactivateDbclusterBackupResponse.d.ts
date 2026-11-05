import * as $dara from '@darabonba/typescript';
import { ReactivateDBClusterBackupResponseBody } from "./ReactivateDbclusterBackupResponseBody";
export declare class ReactivateDBClusterBackupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ReactivateDBClusterBackupResponseBody;
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
