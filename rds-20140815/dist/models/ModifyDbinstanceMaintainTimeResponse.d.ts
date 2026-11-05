import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceMaintainTimeResponseBody } from "./ModifyDbinstanceMaintainTimeResponseBody";
export declare class ModifyDBInstanceMaintainTimeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceMaintainTimeResponseBody;
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
