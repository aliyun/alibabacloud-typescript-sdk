import * as $dara from '@darabonba/typescript';
import { CreateContextDatabaseApiKeyResponseBody } from "./CreateContextDatabaseApiKeyResponseBody";
export declare class CreateContextDatabaseApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateContextDatabaseApiKeyResponseBody;
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
