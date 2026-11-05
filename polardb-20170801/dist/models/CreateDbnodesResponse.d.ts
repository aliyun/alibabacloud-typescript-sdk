import * as $dara from '@darabonba/typescript';
import { CreateDBNodesResponseBody } from "./CreateDbnodesResponseBody";
export declare class CreateDBNodesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBNodesResponseBody;
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
