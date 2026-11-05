import * as $dara from '@darabonba/typescript';
import { AbortDBClusterMigrationResponseBody } from "./AbortDbclusterMigrationResponseBody";
export declare class AbortDBClusterMigrationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AbortDBClusterMigrationResponseBody;
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
