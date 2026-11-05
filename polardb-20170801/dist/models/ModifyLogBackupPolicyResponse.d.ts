import * as $dara from '@darabonba/typescript';
import { ModifyLogBackupPolicyResponseBody } from "./ModifyLogBackupPolicyResponseBody";
export declare class ModifyLogBackupPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyLogBackupPolicyResponseBody;
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
