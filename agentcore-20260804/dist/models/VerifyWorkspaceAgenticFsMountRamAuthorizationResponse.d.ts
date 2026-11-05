import * as $dara from '@darabonba/typescript';
import { VerifyWorkspaceAgenticFsMountRamAuthorizationResponseBody } from "./VerifyWorkspaceAgenticFsMountRamAuthorizationResponseBody";
export declare class VerifyWorkspaceAgenticFsMountRamAuthorizationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: VerifyWorkspaceAgenticFsMountRamAuthorizationResponseBody;
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
