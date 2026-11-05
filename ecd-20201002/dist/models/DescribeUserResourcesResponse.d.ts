import * as $dara from '@darabonba/typescript';
import { DescribeUserResourcesResponseBody } from "./DescribeUserResourcesResponseBody";
export declare class DescribeUserResourcesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeUserResourcesResponseBody;
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
