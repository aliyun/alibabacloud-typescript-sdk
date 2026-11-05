import * as $dara from '@darabonba/typescript';
import { DescribeDBNodesParametersResponseBody } from "./DescribeDbnodesParametersResponseBody";
export declare class DescribeDBNodesParametersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBNodesParametersResponseBody;
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
