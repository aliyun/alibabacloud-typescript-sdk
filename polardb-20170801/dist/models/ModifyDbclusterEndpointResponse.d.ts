import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterEndpointResponseBody } from "./ModifyDbclusterEndpointResponseBody";
export declare class ModifyDBClusterEndpointResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterEndpointResponseBody;
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
