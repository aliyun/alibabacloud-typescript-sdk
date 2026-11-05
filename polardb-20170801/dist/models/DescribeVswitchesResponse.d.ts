import * as $dara from '@darabonba/typescript';
import { DescribeVSwitchesResponseBody } from "./DescribeVswitchesResponseBody";
export declare class DescribeVSwitchesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeVSwitchesResponseBody;
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
