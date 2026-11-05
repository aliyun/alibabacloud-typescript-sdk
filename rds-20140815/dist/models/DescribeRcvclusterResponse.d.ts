import * as $dara from '@darabonba/typescript';
import { DescribeRCVClusterResponseBody } from "./DescribeRcvclusterResponseBody";
export declare class DescribeRCVClusterResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCVClusterResponseBody;
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
