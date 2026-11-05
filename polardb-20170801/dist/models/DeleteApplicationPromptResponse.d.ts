import * as $dara from '@darabonba/typescript';
import { DeleteApplicationPromptResponseBody } from "./DeleteApplicationPromptResponseBody";
export declare class DeleteApplicationPromptResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteApplicationPromptResponseBody;
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
