import * as $dara from '@darabonba/typescript';
import { DeleteDBEndpointAddressResponseBody } from "./DeleteDbendpointAddressResponseBody";
export declare class DeleteDBEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteDBEndpointAddressResponseBody;
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
