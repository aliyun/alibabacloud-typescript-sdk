import * as $dara from '@darabonba/typescript';
import { DescribeTagsResponseBody } from "./DescribeTagsResponseBody";
export declare class DescribeTagsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeTagsResponseBody;
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
