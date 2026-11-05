import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceVectorSupportStatusResponseBody } from "./ModifyDbinstanceVectorSupportStatusResponseBody";
export declare class ModifyDBInstanceVectorSupportStatusResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceVectorSupportStatusResponseBody;
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
