import * as $dara from '@darabonba/typescript';
import { DescribeApplicationParametersResponseBody } from "./DescribeApplicationParametersResponseBody";
export declare class DescribeApplicationParametersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeApplicationParametersResponseBody;
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
