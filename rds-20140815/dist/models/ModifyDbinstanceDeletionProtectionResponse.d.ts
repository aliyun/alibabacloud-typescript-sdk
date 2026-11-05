import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceDeletionProtectionResponseBody } from "./ModifyDbinstanceDeletionProtectionResponseBody";
export declare class ModifyDBInstanceDeletionProtectionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceDeletionProtectionResponseBody;
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
