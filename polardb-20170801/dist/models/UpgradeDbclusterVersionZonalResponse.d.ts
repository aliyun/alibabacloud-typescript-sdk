import * as $dara from '@darabonba/typescript';
import { UpgradeDBClusterVersionZonalResponseBody } from "./UpgradeDbclusterVersionZonalResponseBody";
export declare class UpgradeDBClusterVersionZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpgradeDBClusterVersionZonalResponseBody;
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
