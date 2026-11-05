import * as $dara from '@darabonba/typescript';
import { DescribeADInfoResponseBody } from "./DescribeAdinfoResponseBody";
export declare class DescribeADInfoResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeADInfoResponseBody;
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
