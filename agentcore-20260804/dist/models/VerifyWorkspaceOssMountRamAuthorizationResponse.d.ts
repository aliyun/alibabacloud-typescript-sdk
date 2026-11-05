import * as $dara from '@darabonba/typescript';
import { VerifyWorkspaceOssMountRamAuthorizationResponseBody } from "./VerifyWorkspaceOssMountRamAuthorizationResponseBody";
export declare class VerifyWorkspaceOssMountRamAuthorizationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: VerifyWorkspaceOssMountRamAuthorizationResponseBody;
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
