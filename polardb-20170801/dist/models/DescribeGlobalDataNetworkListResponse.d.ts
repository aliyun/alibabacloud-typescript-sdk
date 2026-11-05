import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDataNetworkListResponseBody } from "./DescribeGlobalDataNetworkListResponseBody";
export declare class DescribeGlobalDataNetworkListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeGlobalDataNetworkListResponseBody;
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
