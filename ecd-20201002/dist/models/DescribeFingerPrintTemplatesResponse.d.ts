import * as $dara from '@darabonba/typescript';
import { DescribeFingerPrintTemplatesResponseBody } from "./DescribeFingerPrintTemplatesResponseBody";
export declare class DescribeFingerPrintTemplatesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeFingerPrintTemplatesResponseBody;
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
