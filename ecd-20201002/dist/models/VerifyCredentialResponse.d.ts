import * as $dara from '@darabonba/typescript';
import { VerifyCredentialResponseBody } from "./VerifyCredentialResponseBody";
export declare class VerifyCredentialResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: VerifyCredentialResponseBody;
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
