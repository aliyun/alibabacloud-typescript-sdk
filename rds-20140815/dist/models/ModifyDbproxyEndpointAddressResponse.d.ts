import * as $dara from '@darabonba/typescript';
import { ModifyDBProxyEndpointAddressResponseBody } from "./ModifyDbproxyEndpointAddressResponseBody";
export declare class ModifyDBProxyEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBProxyEndpointAddressResponseBody;
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
