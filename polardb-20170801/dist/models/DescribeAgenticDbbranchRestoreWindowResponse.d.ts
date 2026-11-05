import * as $dara from '@darabonba/typescript';
import { DescribeAgenticDBBranchRestoreWindowResponseBody } from "./DescribeAgenticDbbranchRestoreWindowResponseBody";
export declare class DescribeAgenticDBBranchRestoreWindowResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAgenticDBBranchRestoreWindowResponseBody;
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
