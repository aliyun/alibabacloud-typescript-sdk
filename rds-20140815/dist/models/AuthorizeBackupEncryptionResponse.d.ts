import * as $dara from '@darabonba/typescript';
import { AuthorizeBackupEncryptionResponseBody } from "./AuthorizeBackupEncryptionResponseBody";
export declare class AuthorizeBackupEncryptionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AuthorizeBackupEncryptionResponseBody;
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
