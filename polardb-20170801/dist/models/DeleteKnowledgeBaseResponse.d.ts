import * as $dara from '@darabonba/typescript';
import { DeleteKnowledgeBaseResponseBody } from "./DeleteKnowledgeBaseResponseBody";
export declare class DeleteKnowledgeBaseResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteKnowledgeBaseResponseBody;
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
