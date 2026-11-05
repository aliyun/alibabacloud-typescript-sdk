import * as $dara from '@darabonba/typescript';
import { DescribeRCClusterNodesResponseBody } from "./DescribeRcclusterNodesResponseBody";
export declare class DescribeRCClusterNodesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCClusterNodesResponseBody;
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
