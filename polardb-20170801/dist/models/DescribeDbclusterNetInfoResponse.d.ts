import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterNetInfoResponseBody } from "./DescribeDbclusterNetInfoResponseBody";
export declare class DescribeDBClusterNetInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterNetInfoResponseBody;
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
