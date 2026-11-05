import * as $dara from '@darabonba/typescript';
import { DeleteDBInstanceResponseBody } from "./DeleteDbinstanceResponseBody";
export declare class DeleteDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDBInstanceResponseBody;
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
