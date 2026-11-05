import * as $dara from '@darabonba/typescript';
import { DescribeReplicationLinkLogsResponseBody } from "./DescribeReplicationLinkLogsResponseBody";
export declare class DescribeReplicationLinkLogsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeReplicationLinkLogsResponseBody;
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
