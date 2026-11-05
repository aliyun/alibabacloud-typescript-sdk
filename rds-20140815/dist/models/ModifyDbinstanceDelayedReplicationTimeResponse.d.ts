import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceDelayedReplicationTimeResponseBody } from "./ModifyDbinstanceDelayedReplicationTimeResponseBody";
export declare class ModifyDBInstanceDelayedReplicationTimeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceDelayedReplicationTimeResponseBody;
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
