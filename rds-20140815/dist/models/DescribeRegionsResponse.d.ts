import * as $dara from '@darabonba/typescript';
import { DescribeRegionsResponseBody } from "./DescribeRegionsResponseBody";
export declare class DescribeRegionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRegionsResponseBody;
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
