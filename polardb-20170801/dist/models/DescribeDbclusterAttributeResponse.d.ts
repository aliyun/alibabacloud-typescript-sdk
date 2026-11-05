import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAttributeResponseBody } from "./DescribeDbclusterAttributeResponseBody";
export declare class DescribeDBClusterAttributeResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterAttributeResponseBody;
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
