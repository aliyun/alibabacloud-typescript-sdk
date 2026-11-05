import * as $dara from '@darabonba/typescript';
import { DescribeApplicationUsageResponseBody } from "./DescribeApplicationUsageResponseBody";
export declare class DescribeApplicationUsageResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeApplicationUsageResponseBody;
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
