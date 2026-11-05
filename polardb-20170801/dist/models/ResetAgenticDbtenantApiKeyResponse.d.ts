import * as $dara from '@darabonba/typescript';
import { ResetAgenticDBTenantApiKeyResponseBody } from "./ResetAgenticDbtenantApiKeyResponseBody";
export declare class ResetAgenticDBTenantApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetAgenticDBTenantApiKeyResponseBody;
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
