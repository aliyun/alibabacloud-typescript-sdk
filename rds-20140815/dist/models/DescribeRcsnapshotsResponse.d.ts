import * as $dara from '@darabonba/typescript';
import { DescribeRCSnapshotsResponseBody } from "./DescribeRcsnapshotsResponseBody";
export declare class DescribeRCSnapshotsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeRCSnapshotsResponseBody;
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
