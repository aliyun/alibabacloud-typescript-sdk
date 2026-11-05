import * as $dara from '@darabonba/typescript';
import { RestartDBInstanceResponseBody } from "./RestartDbinstanceResponseBody";
export declare class RestartDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RestartDBInstanceResponseBody;
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
