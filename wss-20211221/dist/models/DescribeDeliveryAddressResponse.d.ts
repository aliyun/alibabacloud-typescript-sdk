import * as $dara from '@darabonba/typescript';
import { DescribeDeliveryAddressResponseBody } from "./DescribeDeliveryAddressResponseBody";
export declare class DescribeDeliveryAddressResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDeliveryAddressResponseBody;
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
