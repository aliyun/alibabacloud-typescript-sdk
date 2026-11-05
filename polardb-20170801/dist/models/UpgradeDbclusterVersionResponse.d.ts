import * as $dara from '@darabonba/typescript';
import { UpgradeDBClusterVersionResponseBody } from "./UpgradeDbclusterVersionResponseBody";
export declare class UpgradeDBClusterVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpgradeDBClusterVersionResponseBody;
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
