import * as $dara from '@darabonba/typescript';
import { DescribeAIDBClusterPerformanceResponseBody } from "./DescribeAidbclusterPerformanceResponseBody";
export declare class DescribeAIDBClusterPerformanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAIDBClusterPerformanceResponseBody;
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
