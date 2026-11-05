import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAvailableResourcesResponseBody } from "./DescribeDbclusterAvailableResourcesResponseBody";
export declare class DescribeDBClusterAvailableResourcesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterAvailableResourcesResponseBody;
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
