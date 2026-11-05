import * as $dara from '@darabonba/typescript';
import { CreateDBClusterEndpointResponseBody } from "./CreateDbclusterEndpointResponseBody";
export declare class CreateDBClusterEndpointResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBClusterEndpointResponseBody;
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
