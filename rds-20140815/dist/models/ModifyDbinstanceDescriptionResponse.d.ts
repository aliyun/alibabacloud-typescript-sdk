import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceDescriptionResponseBody } from "./ModifyDbinstanceDescriptionResponseBody";
export declare class ModifyDBInstanceDescriptionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceDescriptionResponseBody;
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
