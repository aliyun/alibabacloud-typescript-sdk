import * as $dara from '@darabonba/typescript';
import { DescribeNetworkChannelResponseBody } from "./DescribeNetworkChannelResponseBody";
export declare class DescribeNetworkChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeNetworkChannelResponseBody;
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
