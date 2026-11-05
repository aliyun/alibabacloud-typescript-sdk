import * as $dara from '@darabonba/typescript';
import { DescribeKnowledgeBaseFileShardsResponseBody } from "./DescribeKnowledgeBaseFileShardsResponseBody";
export declare class DescribeKnowledgeBaseFileShardsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeKnowledgeBaseFileShardsResponseBody;
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
