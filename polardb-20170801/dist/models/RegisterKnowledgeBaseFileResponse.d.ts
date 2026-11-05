import * as $dara from '@darabonba/typescript';
import { RegisterKnowledgeBaseFileResponseBody } from "./RegisterKnowledgeBaseFileResponseBody";
export declare class RegisterKnowledgeBaseFileResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: RegisterKnowledgeBaseFileResponseBody;
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
