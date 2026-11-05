import * as $dara from '@darabonba/typescript';
import { RevokeContextDatabaseApiKeyResponseBody } from "./RevokeContextDatabaseApiKeyResponseBody";
export declare class RevokeContextDatabaseApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RevokeContextDatabaseApiKeyResponseBody;
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
