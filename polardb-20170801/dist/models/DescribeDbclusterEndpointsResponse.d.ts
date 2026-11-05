import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterEndpointsResponseBody } from "./DescribeDbclusterEndpointsResponseBody";
export declare class DescribeDBClusterEndpointsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterEndpointsResponseBody;
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
