import * as $dara from '@darabonba/typescript';
import { DescribeAutoRenewAttributeResponseBody } from "./DescribeAutoRenewAttributeResponseBody";
export declare class DescribeAutoRenewAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAutoRenewAttributeResponseBody;
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
