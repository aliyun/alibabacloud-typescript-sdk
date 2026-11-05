import * as $dara from '@darabonba/typescript';
import { DescribeAIDBClusterApiKeysResponseBody } from "./DescribeAidbclusterApiKeysResponseBody";
export declare class DescribeAIDBClusterApiKeysResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAIDBClusterApiKeysResponseBody;
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
