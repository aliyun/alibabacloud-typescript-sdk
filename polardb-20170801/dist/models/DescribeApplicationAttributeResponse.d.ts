import * as $dara from '@darabonba/typescript';
import { DescribeApplicationAttributeResponseBody } from "./DescribeApplicationAttributeResponseBody";
export declare class DescribeApplicationAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeApplicationAttributeResponseBody;
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
