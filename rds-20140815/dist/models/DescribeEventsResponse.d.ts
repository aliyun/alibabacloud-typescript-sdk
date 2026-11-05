import * as $dara from '@darabonba/typescript';
import { DescribeEventsResponseBody } from "./DescribeEventsResponseBody";
export declare class DescribeEventsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeEventsResponseBody;
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
