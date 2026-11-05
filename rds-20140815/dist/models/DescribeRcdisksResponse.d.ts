import * as $dara from '@darabonba/typescript';
import { DescribeRCDisksResponseBody } from "./DescribeRcdisksResponseBody";
export declare class DescribeRCDisksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCDisksResponseBody;
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
