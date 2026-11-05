import * as $dara from '@darabonba/typescript';
import { CloneDBInstanceResponseBody } from "./CloneDbinstanceResponseBody";
export declare class CloneDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CloneDBInstanceResponseBody;
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
