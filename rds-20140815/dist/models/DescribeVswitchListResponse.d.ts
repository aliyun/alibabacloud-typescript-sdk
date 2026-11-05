import * as $dara from '@darabonba/typescript';
import { DescribeVSwitchListResponseBody } from "./DescribeVswitchListResponseBody";
export declare class DescribeVSwitchListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeVSwitchListResponseBody;
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
