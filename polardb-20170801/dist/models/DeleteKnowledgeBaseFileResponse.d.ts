import * as $dara from '@darabonba/typescript';
import { DeleteKnowledgeBaseFileResponseBody } from "./DeleteKnowledgeBaseFileResponseBody";
export declare class DeleteKnowledgeBaseFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteKnowledgeBaseFileResponseBody;
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
