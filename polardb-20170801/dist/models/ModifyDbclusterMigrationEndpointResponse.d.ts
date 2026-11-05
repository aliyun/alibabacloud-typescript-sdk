import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterMigrationEndpointResponseBody } from "./ModifyDbclusterMigrationEndpointResponseBody";
export declare class ModifyDBClusterMigrationEndpointResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterMigrationEndpointResponseBody;
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
