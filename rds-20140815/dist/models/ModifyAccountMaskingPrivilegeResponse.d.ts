import * as $dara from '@darabonba/typescript';
import { ModifyAccountMaskingPrivilegeResponseBody } from "./ModifyAccountMaskingPrivilegeResponseBody";
export declare class ModifyAccountMaskingPrivilegeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAccountMaskingPrivilegeResponseBody;
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
