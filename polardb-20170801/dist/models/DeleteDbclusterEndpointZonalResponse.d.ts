import * as $dara from '@darabonba/typescript';
import { DeleteDBClusterEndpointZonalResponseBody } from "./DeleteDbclusterEndpointZonalResponseBody";
export declare class DeleteDBClusterEndpointZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDBClusterEndpointZonalResponseBody;
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
