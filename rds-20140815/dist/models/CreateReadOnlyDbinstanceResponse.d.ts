import * as $dara from '@darabonba/typescript';
import { CreateReadOnlyDBInstanceResponseBody } from "./CreateReadOnlyDbinstanceResponseBody";
export declare class CreateReadOnlyDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateReadOnlyDBInstanceResponseBody;
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
