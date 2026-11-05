import * as $dara from '@darabonba/typescript';
import { RegisterAIDBClusterCustomModelResponseBody } from "./RegisterAidbclusterCustomModelResponseBody";
export declare class RegisterAIDBClusterCustomModelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RegisterAIDBClusterCustomModelResponseBody;
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
