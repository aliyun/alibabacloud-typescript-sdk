import * as $dara from '@darabonba/typescript';
import { AnswerKnowledgeBaseResponseBody } from "./AnswerKnowledgeBaseResponseBody";
export declare class AnswerKnowledgeBaseResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AnswerKnowledgeBaseResponseBody;
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
