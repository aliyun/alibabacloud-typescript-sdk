import * as $dara from '@darabonba/typescript';
import { DescribeDBLogFilesResponseBody } from "./DescribeDblogFilesResponseBody";
export declare class DescribeDBLogFilesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBLogFilesResponseBody;
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
