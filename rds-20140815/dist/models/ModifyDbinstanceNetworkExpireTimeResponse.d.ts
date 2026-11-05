import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceNetworkExpireTimeResponseBody } from "./ModifyDbinstanceNetworkExpireTimeResponseBody";
export declare class ModifyDBInstanceNetworkExpireTimeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceNetworkExpireTimeResponseBody;
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
