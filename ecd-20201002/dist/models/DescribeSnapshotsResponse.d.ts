import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotsResponseBody } from "./DescribeSnapshotsResponseBody";
export declare class DescribeSnapshotsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSnapshotsResponseBody;
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
