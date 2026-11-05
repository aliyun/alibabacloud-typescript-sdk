import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterStoragePerformanceResponseBody } from "./ModifyDbclusterStoragePerformanceResponseBody";
export declare class ModifyDBClusterStoragePerformanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterStoragePerformanceResponseBody;
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
