import * as $dara from '@darabonba/typescript';
import { DescribeApplicationSSLResponseBody } from "./DescribeApplicationSslresponseBody";
export declare class DescribeApplicationSSLResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeApplicationSSLResponseBody;
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
