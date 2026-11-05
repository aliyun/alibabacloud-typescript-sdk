import * as $dara from '@darabonba/typescript';
import { DescribeInstanceRAGConfigResponseBody } from "./DescribeInstanceRagconfigResponseBody";
export declare class DescribeInstanceRAGConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeInstanceRAGConfigResponseBody;
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
