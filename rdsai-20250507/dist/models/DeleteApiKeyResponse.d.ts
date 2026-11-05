import * as $dara from '@darabonba/typescript';
import { DeleteApiKeyResponseBody } from "./DeleteApiKeyResponseBody";
export declare class DeleteApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteApiKeyResponseBody;
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
