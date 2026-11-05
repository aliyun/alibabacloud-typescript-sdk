import * as $dara from '@darabonba/typescript';
import { StopDBInstanceResponseBody } from "./StopDbinstanceResponseBody";
export declare class StopDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StopDBInstanceResponseBody;
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
