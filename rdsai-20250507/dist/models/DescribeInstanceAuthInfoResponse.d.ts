import * as $dara from '@darabonba/typescript';
import { DescribeInstanceAuthInfoResponseBody } from "./DescribeInstanceAuthInfoResponseBody";
export declare class DescribeInstanceAuthInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeInstanceAuthInfoResponseBody;
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
