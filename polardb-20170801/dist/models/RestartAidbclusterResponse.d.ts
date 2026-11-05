import * as $dara from '@darabonba/typescript';
import { RestartAIDBClusterResponseBody } from "./RestartAidbclusterResponseBody";
export declare class RestartAIDBClusterResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RestartAIDBClusterResponseBody;
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
