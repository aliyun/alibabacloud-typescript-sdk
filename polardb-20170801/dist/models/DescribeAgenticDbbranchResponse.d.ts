import * as $dara from '@darabonba/typescript';
import { DescribeAgenticDBBranchResponseBody } from "./DescribeAgenticDbbranchResponseBody";
export declare class DescribeAgenticDBBranchResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAgenticDBBranchResponseBody;
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
