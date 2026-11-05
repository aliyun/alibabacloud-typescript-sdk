import * as $dara from '@darabonba/typescript';
import { ModifyDBProxyEndpointResponseBody } from "./ModifyDbproxyEndpointResponseBody";
export declare class ModifyDBProxyEndpointResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBProxyEndpointResponseBody;
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
