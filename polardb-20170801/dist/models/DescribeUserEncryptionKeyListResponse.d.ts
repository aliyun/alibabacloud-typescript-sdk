import * as $dara from '@darabonba/typescript';
import { DescribeUserEncryptionKeyListResponseBody } from "./DescribeUserEncryptionKeyListResponseBody";
export declare class DescribeUserEncryptionKeyListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeUserEncryptionKeyListResponseBody;
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
