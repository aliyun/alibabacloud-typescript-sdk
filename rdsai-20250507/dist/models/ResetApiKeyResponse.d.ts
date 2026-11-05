import * as $dara from '@darabonba/typescript';
import { ResetApiKeyResponseBody } from "./ResetApiKeyResponseBody";
export declare class ResetApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResetApiKeyResponseBody;
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
