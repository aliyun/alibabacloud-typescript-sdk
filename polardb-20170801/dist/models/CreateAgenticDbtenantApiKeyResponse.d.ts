import * as $dara from '@darabonba/typescript';
import { CreateAgenticDBTenantApiKeyResponseBody } from "./CreateAgenticDbtenantApiKeyResponseBody";
export declare class CreateAgenticDBTenantApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAgenticDBTenantApiKeyResponseBody;
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
