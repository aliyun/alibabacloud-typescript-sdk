import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceEndpointResponseBody } from "./ModifyDbinstanceEndpointResponseBody";
export declare class ModifyDBInstanceEndpointResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBInstanceEndpointResponseBody;
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
