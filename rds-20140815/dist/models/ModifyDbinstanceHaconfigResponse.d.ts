import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceHAConfigResponseBody } from "./ModifyDbinstanceHaconfigResponseBody";
export declare class ModifyDBInstanceHAConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceHAConfigResponseBody;
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
