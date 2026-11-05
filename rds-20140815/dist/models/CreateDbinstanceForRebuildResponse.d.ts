import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceForRebuildResponseBody } from "./CreateDbinstanceForRebuildResponseBody";
export declare class CreateDBInstanceForRebuildResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBInstanceForRebuildResponseBody;
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
