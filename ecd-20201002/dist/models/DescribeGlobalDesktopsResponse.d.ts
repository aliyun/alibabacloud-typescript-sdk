import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDesktopsResponseBody } from "./DescribeGlobalDesktopsResponseBody";
export declare class DescribeGlobalDesktopsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeGlobalDesktopsResponseBody;
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
