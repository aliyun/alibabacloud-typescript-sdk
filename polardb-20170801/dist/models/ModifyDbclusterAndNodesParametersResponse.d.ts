import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterAndNodesParametersResponseBody } from "./ModifyDbclusterAndNodesParametersResponseBody";
export declare class ModifyDBClusterAndNodesParametersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterAndNodesParametersResponseBody;
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
