import * as $dara from '@darabonba/typescript';
import { DescribeRCMetricListResponseBody } from "./DescribeRcmetricListResponseBody";
export declare class DescribeRCMetricListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCMetricListResponseBody;
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
