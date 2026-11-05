import * as $dara from '@darabonba/typescript';
import { CreateAINodesResponseBody } from "./CreateAinodesResponseBody";
export declare class CreateAINodesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateAINodesResponseBody;
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
