import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterEndpointsZonalResponseBody } from "./DescribeDbclusterEndpointsZonalResponseBody";
export declare class DescribeDBClusterEndpointsZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterEndpointsZonalResponseBody;
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
