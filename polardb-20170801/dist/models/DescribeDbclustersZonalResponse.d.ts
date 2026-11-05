import * as $dara from '@darabonba/typescript';
import { DescribeDBClustersZonalResponseBody } from "./DescribeDbclustersZonalResponseBody";
export declare class DescribeDBClustersZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClustersZonalResponseBody;
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
