import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceHistoryEventsResponseBody } from "./DescribeRcinstanceHistoryEventsResponseBody";
export declare class DescribeRCInstanceHistoryEventsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCInstanceHistoryEventsResponseBody;
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
