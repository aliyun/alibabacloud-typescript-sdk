import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterMonitorResponseBody } from "./ModifyDbclusterMonitorResponseBody";
export declare class ModifyDBClusterMonitorResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterMonitorResponseBody;
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
