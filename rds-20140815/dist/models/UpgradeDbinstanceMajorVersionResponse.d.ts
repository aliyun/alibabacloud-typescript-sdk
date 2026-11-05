import * as $dara from '@darabonba/typescript';
import { UpgradeDBInstanceMajorVersionResponseBody } from "./UpgradeDbinstanceMajorVersionResponseBody";
export declare class UpgradeDBInstanceMajorVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpgradeDBInstanceMajorVersionResponseBody;
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
