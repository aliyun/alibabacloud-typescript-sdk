import * as $dara from '@darabonba/typescript';
import { RevokeRCSecurityGroupPermissionResponseBody } from "./RevokeRcsecurityGroupPermissionResponseBody";
export declare class RevokeRCSecurityGroupPermissionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RevokeRCSecurityGroupPermissionResponseBody;
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
