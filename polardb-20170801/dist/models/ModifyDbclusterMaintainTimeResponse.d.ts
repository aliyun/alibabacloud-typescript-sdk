import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterMaintainTimeResponseBody } from "./ModifyDbclusterMaintainTimeResponseBody";
export declare class ModifyDBClusterMaintainTimeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterMaintainTimeResponseBody;
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
