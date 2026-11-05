import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterEncryptionKeyResponseBody } from "./DescribeDbclusterEncryptionKeyResponseBody";
export declare class DescribeDBClusterEncryptionKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterEncryptionKeyResponseBody;
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
