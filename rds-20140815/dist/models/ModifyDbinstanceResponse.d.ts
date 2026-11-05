import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceResponseBody } from "./ModifyDbinstanceResponseBody";
export declare class ModifyDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceResponseBody;
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
