import * as $dara from '@darabonba/typescript';
import { DescribeRCClustersResponseBody } from "./DescribeRcclustersResponseBody";
export declare class DescribeRCClustersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCClustersResponseBody;
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
