import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceReplicationSwitchResponseBody } from "./ModifyDbinstanceReplicationSwitchResponseBody";
export declare class ModifyDBInstanceReplicationSwitchResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceReplicationSwitchResponseBody;
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
