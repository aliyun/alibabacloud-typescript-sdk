import * as $dara from '@darabonba/typescript';
import { EncryptPasswordResponseBody } from "./EncryptPasswordResponseBody";
export declare class EncryptPasswordResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EncryptPasswordResponseBody;
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
