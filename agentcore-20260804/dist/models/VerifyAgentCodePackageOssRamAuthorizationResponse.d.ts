import * as $dara from '@darabonba/typescript';
import { VerifyAgentCodePackageOssRamAuthorizationResponseBody } from "./VerifyAgentCodePackageOssRamAuthorizationResponseBody";
export declare class VerifyAgentCodePackageOssRamAuthorizationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: VerifyAgentCodePackageOssRamAuthorizationResponseBody;
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
