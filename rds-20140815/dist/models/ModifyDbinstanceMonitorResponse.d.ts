import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceMonitorResponseBody } from "./ModifyDbinstanceMonitorResponseBody";
export declare class ModifyDBInstanceMonitorResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceMonitorResponseBody;
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
