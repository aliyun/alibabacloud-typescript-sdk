import * as $dara from '@darabonba/typescript';
import { DescribeDeductionStatisticResponseBody } from "./DescribeDeductionStatisticResponseBody";
export declare class DescribeDeductionStatisticResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDeductionStatisticResponseBody;
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
