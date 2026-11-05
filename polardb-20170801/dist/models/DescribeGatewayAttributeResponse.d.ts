import * as $dara from '@darabonba/typescript';
import { DescribeGatewayAttributeResponseBody } from "./DescribeGatewayAttributeResponseBody";
export declare class DescribeGatewayAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeGatewayAttributeResponseBody;
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
