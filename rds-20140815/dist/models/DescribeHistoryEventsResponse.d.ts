import * as $dara from '@darabonba/typescript';
import { DescribeHistoryEventsResponseBody } from "./DescribeHistoryEventsResponseBody";
export declare class DescribeHistoryEventsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeHistoryEventsResponseBody;
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
