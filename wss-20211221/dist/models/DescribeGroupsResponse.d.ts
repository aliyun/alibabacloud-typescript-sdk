import * as $dara from '@darabonba/typescript';
import { DescribeGroupsResponseBody } from "./DescribeGroupsResponseBody";
export declare class DescribeGroupsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeGroupsResponseBody;
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
