import * as $dara from '@darabonba/typescript';
import { RecoveryDBInstanceResponseBody } from "./RecoveryDbinstanceResponseBody";
export declare class RecoveryDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RecoveryDBInstanceResponseBody;
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
