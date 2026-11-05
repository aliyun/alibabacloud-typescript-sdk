import * as $dara from '@darabonba/typescript';
import { DescribeKnowledgeBaseAnswerResponseBody } from "./DescribeKnowledgeBaseAnswerResponseBody";
export declare class DescribeKnowledgeBaseAnswerResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeKnowledgeBaseAnswerResponseBody;
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
