import * as $dara from '@darabonba/typescript';
import { DescribeAIDBClusterTaskAttributeResponseBody } from "./DescribeAidbclusterTaskAttributeResponseBody";
export declare class DescribeAIDBClusterTaskAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAIDBClusterTaskAttributeResponseBody;
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
