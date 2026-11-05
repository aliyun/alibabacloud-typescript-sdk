import * as $dara from '@darabonba/typescript';
import { DescribeAgenticDBBranchesResponseBody } from "./DescribeAgenticDbbranchesResponseBody";
export declare class DescribeAgenticDBBranchesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAgenticDBBranchesResponseBody;
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
