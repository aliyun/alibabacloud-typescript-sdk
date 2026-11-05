import * as $dara from '@darabonba/typescript';
import { DescribeRenewalPriceResponseBody } from "./DescribeRenewalPriceResponseBody";
export declare class DescribeRenewalPriceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRenewalPriceResponseBody;
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
