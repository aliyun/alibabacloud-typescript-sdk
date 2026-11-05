import * as $dara from '@darabonba/typescript';
import { DescribeAvailableMetricsResponseBody } from "./DescribeAvailableMetricsResponseBody";
export declare class DescribeAvailableMetricsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAvailableMetricsResponseBody;
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
