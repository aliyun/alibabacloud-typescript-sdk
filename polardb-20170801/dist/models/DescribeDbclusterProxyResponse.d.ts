import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterProxyResponseBody } from "./DescribeDbclusterProxyResponseBody";
export declare class DescribeDBClusterProxyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterProxyResponseBody;
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
