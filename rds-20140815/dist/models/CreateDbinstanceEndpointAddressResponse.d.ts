import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceEndpointAddressResponseBody } from "./CreateDbinstanceEndpointAddressResponseBody";
export declare class CreateDBInstanceEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBInstanceEndpointAddressResponseBody;
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
