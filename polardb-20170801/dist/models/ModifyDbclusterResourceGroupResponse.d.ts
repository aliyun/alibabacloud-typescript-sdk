import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterResourceGroupResponseBody } from "./ModifyDbclusterResourceGroupResponseBody";
export declare class ModifyDBClusterResourceGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterResourceGroupResponseBody;
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
