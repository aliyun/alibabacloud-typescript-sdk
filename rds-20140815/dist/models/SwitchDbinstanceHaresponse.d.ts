import * as $dara from '@darabonba/typescript';
import { SwitchDBInstanceHAResponseBody } from "./SwitchDbinstanceHaresponseBody";
export declare class SwitchDBInstanceHAResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SwitchDBInstanceHAResponseBody;
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
