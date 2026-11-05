import * as $dara from '@darabonba/typescript';
import { CreateApplicationEndpointAddressResponseBody } from "./CreateApplicationEndpointAddressResponseBody";
export declare class CreateApplicationEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateApplicationEndpointAddressResponseBody;
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
