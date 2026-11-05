import * as $dara from '@darabonba/typescript';
import { RetrievalKnowledgeBaseResponseBody } from "./RetrievalKnowledgeBaseResponseBody";
export declare class RetrievalKnowledgeBaseResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RetrievalKnowledgeBaseResponseBody;
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
