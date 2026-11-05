import * as $dara from '@darabonba/typescript';
import { DescribeOssDownloadsResponseBody } from "./DescribeOssDownloadsResponseBody";
export declare class DescribeOssDownloadsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeOssDownloadsResponseBody;
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
