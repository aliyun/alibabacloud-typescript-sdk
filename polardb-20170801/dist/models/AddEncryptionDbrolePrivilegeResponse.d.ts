import * as $dara from '@darabonba/typescript';
import { AddEncryptionDBRolePrivilegeResponseBody } from "./AddEncryptionDbrolePrivilegeResponseBody";
export declare class AddEncryptionDBRolePrivilegeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddEncryptionDBRolePrivilegeResponseBody;
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
