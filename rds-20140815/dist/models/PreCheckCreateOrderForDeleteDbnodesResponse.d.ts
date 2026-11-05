import * as $dara from '@darabonba/typescript';
import { PreCheckCreateOrderForDeleteDBNodesResponseBody } from "./PreCheckCreateOrderForDeleteDbnodesResponseBody";
export declare class PreCheckCreateOrderForDeleteDBNodesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: PreCheckCreateOrderForDeleteDBNodesResponseBody;
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
