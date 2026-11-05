import * as $dara from '@darabonba/typescript';
import { ModifyAIDBClusterModelResponseBody } from "./ModifyAidbclusterModelResponseBody";
export declare class ModifyAIDBClusterModelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAIDBClusterModelResponseBody;
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
