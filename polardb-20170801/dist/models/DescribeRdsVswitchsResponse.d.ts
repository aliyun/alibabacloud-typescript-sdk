import * as $dara from '@darabonba/typescript';
import { DescribeRdsVSwitchsResponseBody } from "./DescribeRdsVswitchsResponseBody";
export declare class DescribeRdsVSwitchsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRdsVSwitchsResponseBody;
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
