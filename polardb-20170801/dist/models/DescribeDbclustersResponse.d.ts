import * as $dara from '@darabonba/typescript';
import { DescribeDBClustersResponseBody } from "./DescribeDbclustersResponseBody";
export declare class DescribeDBClustersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClustersResponseBody;
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
