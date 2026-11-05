import * as $dara from '@darabonba/typescript';
import { DescribeResourceUsageResponseBody } from "./DescribeResourceUsageResponseBody";
export declare class DescribeResourceUsageResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeResourceUsageResponseBody;
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
