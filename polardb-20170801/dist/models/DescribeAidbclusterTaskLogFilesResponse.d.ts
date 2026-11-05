import * as $dara from '@darabonba/typescript';
import { DescribeAIDBClusterTaskLogFilesResponseBody } from "./DescribeAidbclusterTaskLogFilesResponseBody";
export declare class DescribeAIDBClusterTaskLogFilesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAIDBClusterTaskLogFilesResponseBody;
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
