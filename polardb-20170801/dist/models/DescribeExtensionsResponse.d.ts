import * as $dara from '@darabonba/typescript';
import { DescribeExtensionsResponseBody } from "./DescribeExtensionsResponseBody";
export declare class DescribeExtensionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeExtensionsResponseBody;
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
