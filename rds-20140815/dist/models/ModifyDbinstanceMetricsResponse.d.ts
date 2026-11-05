import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceMetricsResponseBody } from "./ModifyDbinstanceMetricsResponseBody";
export declare class ModifyDBInstanceMetricsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceMetricsResponseBody;
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
