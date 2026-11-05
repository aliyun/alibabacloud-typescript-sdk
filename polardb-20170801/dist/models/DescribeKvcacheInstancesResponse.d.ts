import * as $dara from '@darabonba/typescript';
import { DescribeKVCacheInstancesResponseBody } from "./DescribeKvcacheInstancesResponseBody";
export declare class DescribeKVCacheInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeKVCacheInstancesResponseBody;
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
