import * as $dara from '@darabonba/typescript';
import { DescribeRegionInfosResponseBody } from "./DescribeRegionInfosResponseBody";
export declare class DescribeRegionInfosResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRegionInfosResponseBody;
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
