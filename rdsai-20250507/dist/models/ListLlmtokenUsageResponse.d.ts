import * as $dara from '@darabonba/typescript';
import { ListLLMTokenUsageResponseBody } from "./ListLlmtokenUsageResponseBody";
export declare class ListLLMTokenUsageResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ListLLMTokenUsageResponseBody;
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
