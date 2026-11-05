import * as $dara from '@darabonba/typescript';
import { ModifyDBNodesParametersResponseBody } from "./ModifyDbnodesParametersResponseBody";
export declare class ModifyDBNodesParametersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBNodesParametersResponseBody;
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
