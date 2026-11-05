import * as $dara from '@darabonba/typescript';
import { SetAccessKeyPolicyResponseBody } from "./SetAccessKeyPolicyResponseBody";
export declare class SetAccessKeyPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: SetAccessKeyPolicyResponseBody;
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
