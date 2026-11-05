import * as $dara from '@darabonba/typescript';
import { DescribeAgenticDBBranchEndpointsResponseBody } from "./DescribeAgenticDbbranchEndpointsResponseBody";
export declare class DescribeAgenticDBBranchEndpointsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAgenticDBBranchEndpointsResponseBody;
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
