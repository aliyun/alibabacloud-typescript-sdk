import * as $dara from '@darabonba/typescript';
import { ModifyDBInstancePayTypeResponseBody } from "./ModifyDbinstancePayTypeResponseBody";
export declare class ModifyDBInstancePayTypeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstancePayTypeResponseBody;
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
