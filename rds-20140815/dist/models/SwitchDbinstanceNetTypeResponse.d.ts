import * as $dara from '@darabonba/typescript';
import { SwitchDBInstanceNetTypeResponseBody } from "./SwitchDbinstanceNetTypeResponseBody";
export declare class SwitchDBInstanceNetTypeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SwitchDBInstanceNetTypeResponseBody;
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
