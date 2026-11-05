import * as $dara from '@darabonba/typescript';
import { ModifyEncryptionDBRolePrivilegeResponseBody } from "./ModifyEncryptionDbrolePrivilegeResponseBody";
export declare class ModifyEncryptionDBRolePrivilegeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyEncryptionDBRolePrivilegeResponseBody;
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
