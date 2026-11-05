import * as $dara from '@darabonba/typescript';
import { DeleteAIDBClusterApiKeyResponseBody } from "./DeleteAidbclusterApiKeyResponseBody";
export declare class DeleteAIDBClusterApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAIDBClusterApiKeyResponseBody;
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
