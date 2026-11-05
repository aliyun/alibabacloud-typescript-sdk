import * as $dara from '@darabonba/typescript';
import { MigrateDBNodesResponseBody } from "./MigrateDbnodesResponseBody";
export declare class MigrateDBNodesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: MigrateDBNodesResponseBody;
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
