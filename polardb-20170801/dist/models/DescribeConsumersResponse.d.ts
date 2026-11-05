import * as $dara from '@darabonba/typescript';
import { DescribeConsumersResponseBody } from "./DescribeConsumersResponseBody";
export declare class DescribeConsumersResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeConsumersResponseBody;
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
