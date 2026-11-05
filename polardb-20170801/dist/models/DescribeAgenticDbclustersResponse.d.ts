import * as $dara from '@darabonba/typescript';
import { DescribeAgenticDBClustersResponseBody } from "./DescribeAgenticDbclustersResponseBody";
export declare class DescribeAgenticDBClustersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAgenticDBClustersResponseBody;
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
