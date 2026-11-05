import * as $dara from '@darabonba/typescript';
import { CreateDBProxyEndpointAddressResponseBody } from "./CreateDbproxyEndpointAddressResponseBody";
export declare class CreateDBProxyEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBProxyEndpointAddressResponseBody;
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
