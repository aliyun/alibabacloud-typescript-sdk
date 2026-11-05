import * as $dara from '@darabonba/typescript';
import { UpdateContextDatabaseApiKeyResponseBody } from "./UpdateContextDatabaseApiKeyResponseBody";
export declare class UpdateContextDatabaseApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateContextDatabaseApiKeyResponseBody;
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
