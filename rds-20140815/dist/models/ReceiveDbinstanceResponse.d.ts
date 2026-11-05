import * as $dara from '@darabonba/typescript';
import { ReceiveDBInstanceResponseBody } from "./ReceiveDbinstanceResponseBody";
export declare class ReceiveDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ReceiveDBInstanceResponseBody;
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
