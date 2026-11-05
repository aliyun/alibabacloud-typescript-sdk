import * as $dara from '@darabonba/typescript';
import { DescribeConsumerGroupsResponseBody } from "./DescribeConsumerGroupsResponseBody";
export declare class DescribeConsumerGroupsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeConsumerGroupsResponseBody;
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
