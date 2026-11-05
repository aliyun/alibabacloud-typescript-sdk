import * as $dara from '@darabonba/typescript';
import { DescribeLogBackupPolicyResponseBody } from "./DescribeLogBackupPolicyResponseBody";
export declare class DescribeLogBackupPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeLogBackupPolicyResponseBody;
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
