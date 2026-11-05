import * as $dara from '@darabonba/typescript';
import { OpenAITaskResponseBody } from "./OpenAitaskResponseBody";
export declare class OpenAITaskResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: OpenAITaskResponseBody;
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
