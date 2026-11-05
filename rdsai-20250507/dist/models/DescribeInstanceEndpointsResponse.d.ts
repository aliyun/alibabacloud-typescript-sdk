import * as $dara from '@darabonba/typescript';
import { DescribeInstanceEndpointsResponseBody } from "./DescribeInstanceEndpointsResponseBody";
export declare class DescribeInstanceEndpointsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeInstanceEndpointsResponseBody;
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
