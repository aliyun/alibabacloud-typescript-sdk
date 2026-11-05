import * as $dara from '@darabonba/typescript';
import { DescribeRCNetworkInterfacesResponseBody } from "./DescribeRcnetworkInterfacesResponseBody";
export declare class DescribeRCNetworkInterfacesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCNetworkInterfacesResponseBody;
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
