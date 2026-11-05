import * as $dara from '@darabonba/typescript';
import { DescribeAIDBClusterTaskMetricsResponseBody } from "./DescribeAidbclusterTaskMetricsResponseBody";
export declare class DescribeAIDBClusterTaskMetricsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAIDBClusterTaskMetricsResponseBody;
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
