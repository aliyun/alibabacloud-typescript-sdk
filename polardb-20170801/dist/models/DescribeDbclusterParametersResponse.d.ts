import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterParametersResponseBody } from "./DescribeDbclusterParametersResponseBody";
export declare class DescribeDBClusterParametersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterParametersResponseBody;
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
