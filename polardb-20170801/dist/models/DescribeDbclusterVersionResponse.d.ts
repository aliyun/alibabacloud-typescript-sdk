import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterVersionResponseBody } from "./DescribeDbclusterVersionResponseBody";
export declare class DescribeDBClusterVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterVersionResponseBody;
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
