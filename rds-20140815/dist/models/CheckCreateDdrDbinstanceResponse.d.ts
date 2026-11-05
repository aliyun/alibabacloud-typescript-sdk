import * as $dara from '@darabonba/typescript';
import { CheckCreateDdrDBInstanceResponseBody } from "./CheckCreateDdrDbinstanceResponseBody";
export declare class CheckCreateDdrDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckCreateDdrDBInstanceResponseBody;
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
