import * as $dara from '@darabonba/typescript';
import { AuthorizeRCSecurityGroupPermissionResponseBody } from "./AuthorizeRcsecurityGroupPermissionResponseBody";
export declare class AuthorizeRCSecurityGroupPermissionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AuthorizeRCSecurityGroupPermissionResponseBody;
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
