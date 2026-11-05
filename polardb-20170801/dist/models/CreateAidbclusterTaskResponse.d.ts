import * as $dara from '@darabonba/typescript';
import { CreateAIDBClusterTaskResponseBody } from "./CreateAidbclusterTaskResponseBody";
export declare class CreateAIDBClusterTaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAIDBClusterTaskResponseBody;
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
