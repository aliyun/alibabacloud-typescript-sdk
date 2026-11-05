import * as $dara from '@darabonba/typescript';
import { DeleteAIDBClusterTaskResponseBody } from "./DeleteAidbclusterTaskResponseBody";
export declare class DeleteAIDBClusterTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAIDBClusterTaskResponseBody;
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
