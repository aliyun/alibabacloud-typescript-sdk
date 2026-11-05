import * as $dara from '@darabonba/typescript';
import { DescribeTasksResponseBody } from "./DescribeTasksResponseBody";
export declare class DescribeTasksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeTasksResponseBody;
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
