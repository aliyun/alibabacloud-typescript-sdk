import * as $dara from '@darabonba/typescript';
import { DescribeParameterGroupResponseBody } from "./DescribeParameterGroupResponseBody";
export declare class DescribeParameterGroupResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeParameterGroupResponseBody;
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
