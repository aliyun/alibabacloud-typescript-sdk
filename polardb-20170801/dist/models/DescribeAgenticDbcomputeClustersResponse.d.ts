import * as $dara from '@darabonba/typescript';
import { DescribeAgenticDBComputeClustersResponseBody } from "./DescribeAgenticDbcomputeClustersResponseBody";
export declare class DescribeAgenticDBComputeClustersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAgenticDBComputeClustersResponseBody;
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
