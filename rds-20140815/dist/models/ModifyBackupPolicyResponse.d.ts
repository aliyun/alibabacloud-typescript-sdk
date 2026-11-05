import * as $dara from '@darabonba/typescript';
import { ModifyBackupPolicyResponseBody } from "./ModifyBackupPolicyResponseBody";
export declare class ModifyBackupPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyBackupPolicyResponseBody;
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
