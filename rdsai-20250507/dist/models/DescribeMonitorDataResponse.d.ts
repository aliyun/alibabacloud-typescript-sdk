import * as $dara from '@darabonba/typescript';
import { DescribeMonitorDataResponseBody } from "./DescribeMonitorDataResponseBody";
export declare class DescribeMonitorDataResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeMonitorDataResponseBody;
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
