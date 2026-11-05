import * as $dara from '@darabonba/typescript';
import { DescribeAIDBClusterTasksResponseBody } from "./DescribeAidbclusterTasksResponseBody";
export declare class DescribeAIDBClusterTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAIDBClusterTasksResponseBody;
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
