import * as $dara from '@darabonba/typescript';
import { DestroyDBInstanceResponseBody } from "./DestroyDbinstanceResponseBody";
export declare class DestroyDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DestroyDBInstanceResponseBody;
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
