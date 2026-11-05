import * as $dara from '@darabonba/typescript';
import { UpdateKnowledgeBaseResponseBody } from "./UpdateKnowledgeBaseResponseBody";
export declare class UpdateKnowledgeBaseResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateKnowledgeBaseResponseBody;
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
