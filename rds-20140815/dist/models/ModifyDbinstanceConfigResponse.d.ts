import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceConfigResponseBody } from "./ModifyDbinstanceConfigResponseBody";
export declare class ModifyDBInstanceConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceConfigResponseBody;
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
