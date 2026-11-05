import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceConnectionStringResponseBody } from "./ModifyDbinstanceConnectionStringResponseBody";
export declare class ModifyDBInstanceConnectionStringResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceConnectionStringResponseBody;
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
