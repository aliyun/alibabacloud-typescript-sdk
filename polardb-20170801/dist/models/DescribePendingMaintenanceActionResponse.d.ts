import * as $dara from '@darabonba/typescript';
import { DescribePendingMaintenanceActionResponseBody } from "./DescribePendingMaintenanceActionResponseBody";
export declare class DescribePendingMaintenanceActionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribePendingMaintenanceActionResponseBody;
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
