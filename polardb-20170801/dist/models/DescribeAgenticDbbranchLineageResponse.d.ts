import * as $dara from '@darabonba/typescript';
import { DescribeAgenticDBBranchLineageResponseBody } from "./DescribeAgenticDbbranchLineageResponseBody";
export declare class DescribeAgenticDBBranchLineageResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAgenticDBBranchLineageResponseBody;
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
