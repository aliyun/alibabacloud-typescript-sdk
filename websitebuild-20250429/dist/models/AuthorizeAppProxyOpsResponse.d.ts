import * as $dara from '@darabonba/typescript';
import { AuthorizeAppProxyOpsResponseBody } from "./AuthorizeAppProxyOpsResponseBody";
export declare class AuthorizeAppProxyOpsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AuthorizeAppProxyOpsResponseBody;
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
