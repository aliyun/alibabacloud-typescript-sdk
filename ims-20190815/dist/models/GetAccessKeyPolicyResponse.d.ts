import * as $dara from '@darabonba/typescript';
import { GetAccessKeyPolicyResponseBody } from "./GetAccessKeyPolicyResponseBody";
export declare class GetAccessKeyPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAccessKeyPolicyResponseBody;
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
