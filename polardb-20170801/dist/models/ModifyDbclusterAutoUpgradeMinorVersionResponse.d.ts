import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterAutoUpgradeMinorVersionResponseBody } from "./ModifyDbclusterAutoUpgradeMinorVersionResponseBody";
export declare class ModifyDBClusterAutoUpgradeMinorVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterAutoUpgradeMinorVersionResponseBody;
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
