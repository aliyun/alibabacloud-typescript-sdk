import * as $dara from '@darabonba/typescript';
import { DescribeKnowledgeBasesResponseBody } from "./DescribeKnowledgeBasesResponseBody";
export declare class DescribeKnowledgeBasesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeKnowledgeBasesResponseBody;
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
