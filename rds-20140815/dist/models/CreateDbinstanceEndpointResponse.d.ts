import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceEndpointResponseBody } from "./CreateDbinstanceEndpointResponseBody";
export declare class CreateDBInstanceEndpointResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateDBInstanceEndpointResponseBody;
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
