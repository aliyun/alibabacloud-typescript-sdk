import * as $dara from '@darabonba/typescript';
import { DescribeAIDBClusterDatasetsResponseBody } from "./DescribeAidbclusterDatasetsResponseBody";
export declare class DescribeAIDBClusterDatasetsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAIDBClusterDatasetsResponseBody;
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
