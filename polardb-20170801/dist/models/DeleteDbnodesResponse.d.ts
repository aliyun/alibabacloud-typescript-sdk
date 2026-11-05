import * as $dara from '@darabonba/typescript';
import { DeleteDBNodesResponseBody } from "./DeleteDbnodesResponseBody";
export declare class DeleteDBNodesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDBNodesResponseBody;
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
