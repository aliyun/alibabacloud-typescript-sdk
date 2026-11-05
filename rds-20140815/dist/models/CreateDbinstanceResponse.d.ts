import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceResponseBody } from "./CreateDbinstanceResponseBody";
export declare class CreateDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBInstanceResponseBody;
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
