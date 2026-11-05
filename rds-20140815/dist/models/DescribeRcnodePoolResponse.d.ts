import * as $dara from '@darabonba/typescript';
import { DescribeRCNodePoolResponseBody } from "./DescribeRcnodePoolResponseBody";
export declare class DescribeRCNodePoolResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCNodePoolResponseBody;
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
