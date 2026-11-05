import * as $dara from '@darabonba/typescript';
import { RenameApiKeyResponseBody } from "./RenameApiKeyResponseBody";
export declare class RenameApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RenameApiKeyResponseBody;
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
