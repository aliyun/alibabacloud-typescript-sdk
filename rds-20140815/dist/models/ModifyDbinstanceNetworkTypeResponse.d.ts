import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceNetworkTypeResponseBody } from "./ModifyDbinstanceNetworkTypeResponseBody";
export declare class ModifyDBInstanceNetworkTypeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceNetworkTypeResponseBody;
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
