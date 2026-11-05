import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterVersionZonalResponseBody } from "./DescribeDbclusterVersionZonalResponseBody";
export declare class DescribeDBClusterVersionZonalResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterVersionZonalResponseBody;
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
