import * as $dara from '@darabonba/typescript';
import { CreateKnowledgeBaseResponseBody } from "./CreateKnowledgeBaseResponseBody";
export declare class CreateKnowledgeBaseResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateKnowledgeBaseResponseBody;
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
