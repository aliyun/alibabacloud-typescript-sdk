import * as $dara from '@darabonba/typescript';
import { DescribeBackupPolicyResponseBody } from "./DescribeBackupPolicyResponseBody";
export declare class DescribeBackupPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeBackupPolicyResponseBody;
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
