import * as $dara from '@darabonba/typescript';
import { CreateAIDBClusterApiKeyResponseBody } from "./CreateAidbclusterApiKeyResponseBody";
export declare class CreateAIDBClusterApiKeyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAIDBClusterApiKeyResponseBody;
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
