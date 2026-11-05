import * as $dara from '@darabonba/typescript';
import { DescribePendingMaintenanceActionsResponseBody } from "./DescribePendingMaintenanceActionsResponseBody";
export declare class DescribePendingMaintenanceActionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePendingMaintenanceActionsResponseBody;
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
