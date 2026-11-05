import * as $dara from '@darabonba/typescript';
import { CreateApiKeyResponseBody } from "./CreateApiKeyResponseBody";
export declare class CreateApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateApiKeyResponseBody;
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
