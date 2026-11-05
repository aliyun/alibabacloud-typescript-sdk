import * as $dara from '@darabonba/typescript';
import { ModifyDbProxyInstanceSslResponseBody } from "./ModifyDbProxyInstanceSslResponseBody";
export declare class ModifyDbProxyInstanceSslResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyDbProxyInstanceSslResponseBody;
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
