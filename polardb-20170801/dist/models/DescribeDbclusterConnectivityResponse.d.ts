import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterConnectivityResponseBody } from "./DescribeDbclusterConnectivityResponseBody";
export declare class DescribeDBClusterConnectivityResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterConnectivityResponseBody;
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
