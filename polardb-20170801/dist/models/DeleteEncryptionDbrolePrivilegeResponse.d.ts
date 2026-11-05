import * as $dara from '@darabonba/typescript';
import { DeleteEncryptionDBRolePrivilegeResponseBody } from "./DeleteEncryptionDbrolePrivilegeResponseBody";
export declare class DeleteEncryptionDBRolePrivilegeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteEncryptionDBRolePrivilegeResponseBody;
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
