import * as $dara from '@darabonba/typescript';
import { DescribeInstanceSSLResponseBody } from "./DescribeInstanceSslresponseBody";
export declare class DescribeInstanceSSLResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeInstanceSSLResponseBody;
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
