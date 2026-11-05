import * as $dara from '@darabonba/typescript';
import { CreateDBEndpointAddressResponseBody } from "./CreateDbendpointAddressResponseBody";
export declare class CreateDBEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBEndpointAddressResponseBody;
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
