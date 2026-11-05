import * as $dara from '@darabonba/typescript';
import { UpgradeDBProxyInstanceKernelVersionResponseBody } from "./UpgradeDbproxyInstanceKernelVersionResponseBody";
export declare class UpgradeDBProxyInstanceKernelVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpgradeDBProxyInstanceKernelVersionResponseBody;
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
