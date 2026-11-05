import * as $dara from '@darabonba/typescript';
import { ModifyDBProxyInstanceResponseBody } from "./ModifyDbproxyInstanceResponseBody";
export declare class ModifyDBProxyInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDBProxyInstanceResponseBody;
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
