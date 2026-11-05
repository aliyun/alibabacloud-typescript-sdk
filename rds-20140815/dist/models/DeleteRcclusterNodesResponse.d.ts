import * as $dara from '@darabonba/typescript';
import { DeleteRCClusterNodesResponseBody } from "./DeleteRcclusterNodesResponseBody";
export declare class DeleteRCClusterNodesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteRCClusterNodesResponseBody;
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
