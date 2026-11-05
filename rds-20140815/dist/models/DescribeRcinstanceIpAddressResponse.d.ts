import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceIpAddressResponseBody } from "./DescribeRcinstanceIpAddressResponseBody";
export declare class DescribeRCInstanceIpAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCInstanceIpAddressResponseBody;
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
