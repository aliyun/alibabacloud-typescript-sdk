import * as $dara from '@darabonba/typescript';
import { ModifyInstanceCrossBackupPolicyResponseBody } from "./ModifyInstanceCrossBackupPolicyResponseBody";
export declare class ModifyInstanceCrossBackupPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyInstanceCrossBackupPolicyResponseBody;
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
