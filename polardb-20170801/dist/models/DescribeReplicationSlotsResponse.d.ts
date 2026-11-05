import * as $dara from '@darabonba/typescript';
import { DescribeReplicationSlotsResponseBody } from "./DescribeReplicationSlotsResponseBody";
export declare class DescribeReplicationSlotsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeReplicationSlotsResponseBody;
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
