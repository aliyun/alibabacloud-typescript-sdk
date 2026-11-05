import * as $dara from '@darabonba/typescript';
import { ResetConsumerApiKeyResponseBody } from "./ResetConsumerApiKeyResponseBody";
export declare class ResetConsumerApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetConsumerApiKeyResponseBody;
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
