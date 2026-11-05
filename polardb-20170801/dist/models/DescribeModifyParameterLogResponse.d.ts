import * as $dara from '@darabonba/typescript';
import { DescribeModifyParameterLogResponseBody } from "./DescribeModifyParameterLogResponseBody";
export declare class DescribeModifyParameterLogResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeModifyParameterLogResponseBody;
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
