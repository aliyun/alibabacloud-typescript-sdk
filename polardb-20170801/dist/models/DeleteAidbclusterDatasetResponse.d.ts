import * as $dara from '@darabonba/typescript';
import { DeleteAIDBClusterDatasetResponseBody } from "./DeleteAidbclusterDatasetResponseBody";
export declare class DeleteAIDBClusterDatasetResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAIDBClusterDatasetResponseBody;
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
