import * as $dara from '@darabonba/typescript';
import { DescribeInstanceKeywordsResponseBody } from "./DescribeInstanceKeywordsResponseBody";
export declare class DescribeInstanceKeywordsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeInstanceKeywordsResponseBody;
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
