import * as $dara from '@darabonba/typescript';
import { UpgradeDBInstanceMajorVersionPrecheckResponseBody } from "./UpgradeDbinstanceMajorVersionPrecheckResponseBody";
export declare class UpgradeDBInstanceMajorVersionPrecheckResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpgradeDBInstanceMajorVersionPrecheckResponseBody;
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
