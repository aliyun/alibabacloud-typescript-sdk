import * as $dara from '@darabonba/typescript';
import { DescribeAIDBClustersResponseBody } from "./DescribeAidbclustersResponseBody";
export declare class DescribeAIDBClustersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAIDBClustersResponseBody;
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
