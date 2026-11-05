import * as $dara from '@darabonba/typescript';
import { DescribeDirectoriesResponseBody } from "./DescribeDirectoriesResponseBody";
export declare class DescribeDirectoriesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDirectoriesResponseBody;
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
