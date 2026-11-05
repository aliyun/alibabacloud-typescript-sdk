import * as $dara from '@darabonba/typescript';
import { ModifyApplicationPromptResponseBody } from "./ModifyApplicationPromptResponseBody";
export declare class ModifyApplicationPromptResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyApplicationPromptResponseBody;
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
