import * as $dara from '@darabonba/typescript';
import { CreateDBClusterEndpointZonalResponseBody } from "./CreateDbclusterEndpointZonalResponseBody";
export declare class CreateDBClusterEndpointZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBClusterEndpointZonalResponseBody;
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
