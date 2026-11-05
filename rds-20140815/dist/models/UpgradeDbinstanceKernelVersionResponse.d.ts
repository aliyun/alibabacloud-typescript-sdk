import * as $dara from '@darabonba/typescript';
import { UpgradeDBInstanceKernelVersionResponseBody } from "./UpgradeDbinstanceKernelVersionResponseBody";
export declare class UpgradeDBInstanceKernelVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpgradeDBInstanceKernelVersionResponseBody;
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
