import * as $dara from '@darabonba/typescript';
import { DescribeGatewayApikeyListResponseBody } from "./DescribeGatewayApikeyListResponseBody";
export declare class DescribeGatewayApikeyListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeGatewayApikeyListResponseBody;
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
