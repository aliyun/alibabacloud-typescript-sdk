import * as $dara from '@darabonba/typescript';
import { DescribeApikeyAttributeResponseBody } from "./DescribeApikeyAttributeResponseBody";
export declare class DescribeApikeyAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeApikeyAttributeResponseBody;
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
