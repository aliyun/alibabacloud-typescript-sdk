import * as $dara from '@darabonba/typescript';
import { DescribeResourcePackagesResponseBody } from "./DescribeResourcePackagesResponseBody";
export declare class DescribeResourcePackagesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeResourcePackagesResponseBody;
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
