import * as $dara from '@darabonba/typescript';
import { DescribeAIDBClusterAttributeResponseBody } from "./DescribeAidbclusterAttributeResponseBody";
export declare class DescribeAIDBClusterAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAIDBClusterAttributeResponseBody;
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
