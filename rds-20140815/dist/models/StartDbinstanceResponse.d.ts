import * as $dara from '@darabonba/typescript';
import { StartDBInstanceResponseBody } from "./StartDbinstanceResponseBody";
export declare class StartDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: StartDBInstanceResponseBody;
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
