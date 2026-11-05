import * as $dara from '@darabonba/typescript';
import { DescribeActivationCodesResponseBody } from "./DescribeActivationCodesResponseBody";
export declare class DescribeActivationCodesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeActivationCodesResponseBody;
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
