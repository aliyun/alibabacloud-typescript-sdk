import * as $dara from '@darabonba/typescript';
import { DescribeEdgeCloudRegionResponseBody } from "./DescribeEdgeCloudRegionResponseBody";
export declare class DescribeEdgeCloudRegionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeEdgeCloudRegionResponseBody;
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
