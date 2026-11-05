import * as $dara from '@darabonba/typescript';
import { DescribeEncryptionDBSecretResponseBody } from "./DescribeEncryptionDbsecretResponseBody";
export declare class DescribeEncryptionDBSecretResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeEncryptionDBSecretResponseBody;
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
