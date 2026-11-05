import * as $dara from '@darabonba/typescript';
import { CreateKnowledgeSpaceResponseBody } from "./CreateKnowledgeSpaceResponseBody";
export declare class CreateKnowledgeSpaceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateKnowledgeSpaceResponseBody;
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
