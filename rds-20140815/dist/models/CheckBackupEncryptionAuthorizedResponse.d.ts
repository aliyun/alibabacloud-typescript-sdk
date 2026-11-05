import * as $dara from '@darabonba/typescript';
import { CheckBackupEncryptionAuthorizedResponseBody } from "./CheckBackupEncryptionAuthorizedResponseBody";
export declare class CheckBackupEncryptionAuthorizedResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CheckBackupEncryptionAuthorizedResponseBody;
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
