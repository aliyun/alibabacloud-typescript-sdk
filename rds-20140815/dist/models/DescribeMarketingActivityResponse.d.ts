import * as $dara from '@darabonba/typescript';
import { DescribeMarketingActivityResponseBody } from "./DescribeMarketingActivityResponseBody";
export declare class DescribeMarketingActivityResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeMarketingActivityResponseBody;
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
