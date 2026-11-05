import * as $dara from '@darabonba/typescript';
import { ModifyApplicationEndpointAddressResponseBody } from "./ModifyApplicationEndpointAddressResponseBody";
export declare class ModifyApplicationEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyApplicationEndpointAddressResponseBody;
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
