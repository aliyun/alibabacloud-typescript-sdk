import * as $dara from '@darabonba/typescript';
import { ModifyLakebaseS3AccountPolicyResponseBody } from "./ModifyLakebaseS3accountPolicyResponseBody";
export declare class ModifyLakebaseS3AccountPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyLakebaseS3AccountPolicyResponseBody;
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
