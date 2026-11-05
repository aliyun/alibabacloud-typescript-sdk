import * as $dara from '@darabonba/typescript';
import { DeleteDBInstanceEndpointAddressResponseBody } from "./DeleteDbinstanceEndpointAddressResponseBody";
export declare class DeleteDBInstanceEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDBInstanceEndpointAddressResponseBody;
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
