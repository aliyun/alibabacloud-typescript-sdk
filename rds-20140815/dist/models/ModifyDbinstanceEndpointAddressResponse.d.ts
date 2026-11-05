import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceEndpointAddressResponseBody } from "./ModifyDbinstanceEndpointAddressResponseBody";
export declare class ModifyDBInstanceEndpointAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceEndpointAddressResponseBody;
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
