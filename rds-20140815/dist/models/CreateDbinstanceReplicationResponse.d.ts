import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceReplicationResponseBody } from "./CreateDbinstanceReplicationResponseBody";
export declare class CreateDBInstanceReplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBInstanceReplicationResponseBody;
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
