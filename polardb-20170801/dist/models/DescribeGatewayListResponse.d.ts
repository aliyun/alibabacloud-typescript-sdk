import * as $dara from '@darabonba/typescript';
import { DescribeGatewayListResponseBody } from "./DescribeGatewayListResponseBody";
export declare class DescribeGatewayListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeGatewayListResponseBody;
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
