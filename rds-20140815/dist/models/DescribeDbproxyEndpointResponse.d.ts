import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyEndpointResponseBody } from "./DescribeDbproxyEndpointResponseBody";
export declare class DescribeDBProxyEndpointResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBProxyEndpointResponseBody;
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
