import * as $dara from '@darabonba/typescript';
import { UpdateKnowledgeSpaceResponseBody } from "./UpdateKnowledgeSpaceResponseBody";
export declare class UpdateKnowledgeSpaceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: UpdateKnowledgeSpaceResponseBody;
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
