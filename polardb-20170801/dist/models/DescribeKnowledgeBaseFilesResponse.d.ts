import * as $dara from '@darabonba/typescript';
import { DescribeKnowledgeBaseFilesResponseBody } from "./DescribeKnowledgeBaseFilesResponseBody";
export declare class DescribeKnowledgeBaseFilesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeKnowledgeBaseFilesResponseBody;
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
