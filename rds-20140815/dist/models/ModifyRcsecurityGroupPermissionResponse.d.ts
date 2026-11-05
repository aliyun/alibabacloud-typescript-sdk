import * as $dara from '@darabonba/typescript';
import { ModifyRCSecurityGroupPermissionResponseBody } from "./ModifyRcsecurityGroupPermissionResponseBody";
export declare class ModifyRCSecurityGroupPermissionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyRCSecurityGroupPermissionResponseBody;
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
