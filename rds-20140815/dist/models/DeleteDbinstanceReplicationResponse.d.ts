import * as $dara from '@darabonba/typescript';
import { DeleteDBInstanceReplicationResponseBody } from "./DeleteDbinstanceReplicationResponseBody";
export declare class DeleteDBInstanceReplicationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDBInstanceReplicationResponseBody;
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
