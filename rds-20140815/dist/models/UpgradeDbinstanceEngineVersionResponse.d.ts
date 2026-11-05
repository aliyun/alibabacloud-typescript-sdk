import * as $dara from '@darabonba/typescript';
import { UpgradeDBInstanceEngineVersionResponseBody } from "./UpgradeDbinstanceEngineVersionResponseBody";
export declare class UpgradeDBInstanceEngineVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpgradeDBInstanceEngineVersionResponseBody;
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
