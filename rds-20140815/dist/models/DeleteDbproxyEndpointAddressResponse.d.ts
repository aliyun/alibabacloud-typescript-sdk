import * as $dara from '@darabonba/typescript';
import { DeleteDBProxyEndpointAddressResponseBody } from "./DeleteDbproxyEndpointAddressResponseBody";
export declare class DeleteDBProxyEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDBProxyEndpointAddressResponseBody;
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
