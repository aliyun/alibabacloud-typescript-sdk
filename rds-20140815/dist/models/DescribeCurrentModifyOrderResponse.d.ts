import * as $dara from '@darabonba/typescript';
import { DescribeCurrentModifyOrderResponseBody } from "./DescribeCurrentModifyOrderResponseBody";
export declare class DescribeCurrentModifyOrderResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCurrentModifyOrderResponseBody;
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
