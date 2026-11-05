import * as $dara from '@darabonba/typescript';
import { DescribeMultiPriceResponseBody } from "./DescribeMultiPriceResponseBody";
export declare class DescribeMultiPriceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeMultiPriceResponseBody;
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
