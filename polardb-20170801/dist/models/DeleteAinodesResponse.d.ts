import * as $dara from '@darabonba/typescript';
import { DeleteAINodesResponseBody } from "./DeleteAinodesResponseBody";
export declare class DeleteAINodesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAINodesResponseBody;
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
