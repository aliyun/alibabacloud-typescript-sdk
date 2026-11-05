import * as $dara from '@darabonba/typescript';
import { ModifyDBNodesClassResponseBody } from "./ModifyDbnodesClassResponseBody";
export declare class ModifyDBNodesClassResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBNodesClassResponseBody;
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
