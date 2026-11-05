import * as $dara from '@darabonba/typescript';
import { DeleteAgenticDBTenantApiKeyResponseBody } from "./DeleteAgenticDbtenantApiKeyResponseBody";
export declare class DeleteAgenticDBTenantApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAgenticDBTenantApiKeyResponseBody;
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
