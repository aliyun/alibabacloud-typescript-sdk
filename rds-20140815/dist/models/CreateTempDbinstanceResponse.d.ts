import * as $dara from '@darabonba/typescript';
import { CreateTempDBInstanceResponseBody } from "./CreateTempDbinstanceResponseBody";
export declare class CreateTempDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateTempDBInstanceResponseBody;
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
