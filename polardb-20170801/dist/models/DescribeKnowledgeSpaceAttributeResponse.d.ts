import * as $dara from '@darabonba/typescript';
import { DescribeKnowledgeSpaceAttributeResponseBody } from "./DescribeKnowledgeSpaceAttributeResponseBody";
export declare class DescribeKnowledgeSpaceAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeKnowledgeSpaceAttributeResponseBody;
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
