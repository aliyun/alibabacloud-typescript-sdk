import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceSpecResponseBody } from "./ModifyDbinstanceSpecResponseBody";
export declare class ModifyDBInstanceSpecResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceSpecResponseBody;
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
