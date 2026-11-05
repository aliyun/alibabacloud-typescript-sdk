import * as $dara from '@darabonba/typescript';
import { UpdateApiKeyQuotaResponseBody } from "./UpdateApiKeyQuotaResponseBody";
export declare class UpdateApiKeyQuotaResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateApiKeyQuotaResponseBody;
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
