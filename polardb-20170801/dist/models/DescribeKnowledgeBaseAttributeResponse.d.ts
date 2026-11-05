import * as $dara from '@darabonba/typescript';
import { DescribeKnowledgeBaseAttributeResponseBody } from "./DescribeKnowledgeBaseAttributeResponseBody";
export declare class DescribeKnowledgeBaseAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeKnowledgeBaseAttributeResponseBody;
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
