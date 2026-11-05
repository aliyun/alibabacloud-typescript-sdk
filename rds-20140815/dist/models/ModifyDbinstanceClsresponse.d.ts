import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceCLSResponseBody } from "./ModifyDbinstanceClsresponseBody";
export declare class ModifyDBInstanceCLSResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceCLSResponseBody;
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
