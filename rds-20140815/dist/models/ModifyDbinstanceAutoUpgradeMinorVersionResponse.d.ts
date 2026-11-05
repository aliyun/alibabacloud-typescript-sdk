import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceAutoUpgradeMinorVersionResponseBody } from "./ModifyDbinstanceAutoUpgradeMinorVersionResponseBody";
export declare class ModifyDBInstanceAutoUpgradeMinorVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceAutoUpgradeMinorVersionResponseBody;
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
