import * as $dara from '@darabonba/typescript';
import { ModifyEncryptionDBSecretResponseBody } from "./ModifyEncryptionDbsecretResponseBody";
export declare class ModifyEncryptionDBSecretResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyEncryptionDBSecretResponseBody;
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
