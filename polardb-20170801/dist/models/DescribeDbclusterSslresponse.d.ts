import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterSSLResponseBody } from "./DescribeDbclusterSslresponseBody";
export declare class DescribeDBClusterSSLResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterSSLResponseBody;
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
