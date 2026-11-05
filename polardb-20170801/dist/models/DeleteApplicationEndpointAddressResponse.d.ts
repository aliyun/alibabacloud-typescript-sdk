import * as $dara from '@darabonba/typescript';
import { DeleteApplicationEndpointAddressResponseBody } from "./DeleteApplicationEndpointAddressResponseBody";
export declare class DeleteApplicationEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteApplicationEndpointAddressResponseBody;
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
