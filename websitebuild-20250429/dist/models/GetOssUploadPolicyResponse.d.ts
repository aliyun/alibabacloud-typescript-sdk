import * as $dara from '@darabonba/typescript';
import { GetOssUploadPolicyResponseBody } from "./GetOssUploadPolicyResponseBody";
export declare class GetOssUploadPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetOssUploadPolicyResponseBody;
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
