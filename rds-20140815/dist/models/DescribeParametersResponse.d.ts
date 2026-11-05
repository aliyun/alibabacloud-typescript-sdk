import * as $dara from '@darabonba/typescript';
import { DescribeParametersResponseBody } from "./DescribeParametersResponseBody";
export declare class DescribeParametersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeParametersResponseBody;
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
