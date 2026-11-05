import * as $dara from '@darabonba/typescript';
import { DeleteDBInstanceEndpointResponseBody } from "./DeleteDbinstanceEndpointResponseBody";
export declare class DeleteDBInstanceEndpointResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDBInstanceEndpointResponseBody;
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
