import * as $dara from '@darabonba/typescript';
import { DescribeRCClusterConfigResponseBody } from "./DescribeRcclusterConfigResponseBody";
export declare class DescribeRCClusterConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCClusterConfigResponseBody;
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
