import * as $dara from '@darabonba/typescript';
import { DescribeParameterGroupsResponseBody } from "./DescribeParameterGroupsResponseBody";
export declare class DescribeParameterGroupsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeParameterGroupsResponseBody;
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
