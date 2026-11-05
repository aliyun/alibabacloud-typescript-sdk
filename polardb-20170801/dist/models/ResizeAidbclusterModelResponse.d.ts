import * as $dara from '@darabonba/typescript';
import { ResizeAIDBClusterModelResponseBody } from "./ResizeAidbclusterModelResponseBody";
export declare class ResizeAIDBClusterModelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ResizeAIDBClusterModelResponseBody;
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
