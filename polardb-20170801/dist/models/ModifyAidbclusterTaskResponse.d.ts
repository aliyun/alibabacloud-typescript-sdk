import * as $dara from '@darabonba/typescript';
import { ModifyAIDBClusterTaskResponseBody } from "./ModifyAidbclusterTaskResponseBody";
export declare class ModifyAIDBClusterTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyAIDBClusterTaskResponseBody;
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
