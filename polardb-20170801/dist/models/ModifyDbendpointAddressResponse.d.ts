import * as $dara from '@darabonba/typescript';
import { ModifyDBEndpointAddressResponseBody } from "./ModifyDbendpointAddressResponseBody";
export declare class ModifyDBEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBEndpointAddressResponseBody;
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
