import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterEndpointZonalResponseBody } from "./ModifyDbclusterEndpointZonalResponseBody";
export declare class ModifyDBClusterEndpointZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBClusterEndpointZonalResponseBody;
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
