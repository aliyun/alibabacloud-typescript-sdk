import * as $dara from '@darabonba/typescript';
import { CloseAITaskResponseBody } from "./CloseAitaskResponseBody";
export declare class CloseAITaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CloseAITaskResponseBody;
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
