import * as $dara from '@darabonba/typescript';
import { GetAvailableLLMModelsResponseBody } from "./GetAvailableLlmmodelsResponseBody";
export declare class GetAvailableLLMModelsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: GetAvailableLLMModelsResponseBody;
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
