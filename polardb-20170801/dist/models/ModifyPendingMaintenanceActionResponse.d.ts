import * as $dara from '@darabonba/typescript';
import { ModifyPendingMaintenanceActionResponseBody } from "./ModifyPendingMaintenanceActionResponseBody";
export declare class ModifyPendingMaintenanceActionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyPendingMaintenanceActionResponseBody;
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
