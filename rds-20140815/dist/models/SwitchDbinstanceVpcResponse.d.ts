import * as $dara from '@darabonba/typescript';
import { SwitchDBInstanceVpcResponseBody } from "./SwitchDbinstanceVpcResponseBody";
export declare class SwitchDBInstanceVpcResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SwitchDBInstanceVpcResponseBody;
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
