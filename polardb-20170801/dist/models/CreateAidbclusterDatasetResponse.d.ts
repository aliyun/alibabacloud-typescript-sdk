import * as $dara from '@darabonba/typescript';
import { CreateAIDBClusterDatasetResponseBody } from "./CreateAidbclusterDatasetResponseBody";
export declare class CreateAIDBClusterDatasetResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAIDBClusterDatasetResponseBody;
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
