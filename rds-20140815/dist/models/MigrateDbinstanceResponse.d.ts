import * as $dara from '@darabonba/typescript';
import { MigrateDBInstanceResponseBody } from "./MigrateDbinstanceResponseBody";
export declare class MigrateDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: MigrateDBInstanceResponseBody;
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
