import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceEncryptionKeyResponseBody } from "./DescribeDbinstanceEncryptionKeyResponseBody";
export declare class DescribeDBInstanceEncryptionKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceEncryptionKeyResponseBody;
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
