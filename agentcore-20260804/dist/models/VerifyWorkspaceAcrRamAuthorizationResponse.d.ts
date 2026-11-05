import * as $dara from '@darabonba/typescript';
import { VerifyWorkspaceAcrRamAuthorizationResponseBody } from "./VerifyWorkspaceAcrRamAuthorizationResponseBody";
export declare class VerifyWorkspaceAcrRamAuthorizationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: VerifyWorkspaceAcrRamAuthorizationResponseBody;
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
