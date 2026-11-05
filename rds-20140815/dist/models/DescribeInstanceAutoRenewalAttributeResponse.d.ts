import * as $dara from '@darabonba/typescript';
import { DescribeInstanceAutoRenewalAttributeResponseBody } from "./DescribeInstanceAutoRenewalAttributeResponseBody";
export declare class DescribeInstanceAutoRenewalAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeInstanceAutoRenewalAttributeResponseBody;
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
