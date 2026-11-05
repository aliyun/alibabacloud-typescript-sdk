import * as $dara from '@darabonba/typescript';
import { DescribeDBLinksResponseBody } from "./DescribeDblinksResponseBody";
export declare class DescribeDBLinksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBLinksResponseBody;
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
