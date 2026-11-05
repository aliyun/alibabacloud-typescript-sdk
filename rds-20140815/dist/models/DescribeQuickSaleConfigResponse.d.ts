import * as $dara from '@darabonba/typescript';
import { DescribeQuickSaleConfigResponseBody } from "./DescribeQuickSaleConfigResponseBody";
export declare class DescribeQuickSaleConfigResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeQuickSaleConfigResponseBody;
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
