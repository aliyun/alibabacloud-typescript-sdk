import * as $dara from '@darabonba/typescript';
import { DeleteDBClusterEndpointResponseBody } from "./DeleteDbclusterEndpointResponseBody";
export declare class DeleteDBClusterEndpointResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDBClusterEndpointResponseBody;
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
