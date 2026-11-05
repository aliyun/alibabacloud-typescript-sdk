import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterModelEnhancementResponseBody } from "./DescribeDbclusterModelEnhancementResponseBody";
export declare class DescribeDBClusterModelEnhancementResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterModelEnhancementResponseBody;
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
