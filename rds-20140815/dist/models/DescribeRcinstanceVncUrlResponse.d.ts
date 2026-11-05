import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceVncUrlResponseBody } from "./DescribeRcinstanceVncUrlResponseBody";
export declare class DescribeRCInstanceVncUrlResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCInstanceVncUrlResponseBody;
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
