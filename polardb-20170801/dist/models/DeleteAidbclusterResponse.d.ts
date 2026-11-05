import * as $dara from '@darabonba/typescript';
import { DeleteAIDBClusterResponseBody } from "./DeleteAidbclusterResponseBody";
export declare class DeleteAIDBClusterResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAIDBClusterResponseBody;
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
