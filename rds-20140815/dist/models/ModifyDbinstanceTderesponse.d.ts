import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceTDEResponseBody } from "./ModifyDbinstanceTderesponseBody";
export declare class ModifyDBInstanceTDEResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceTDEResponseBody;
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
