import * as $dara from '@darabonba/typescript';
import { DescribeAppInstancesResponseBody } from "./DescribeAppInstancesResponseBody";
export declare class DescribeAppInstancesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAppInstancesResponseBody;
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
