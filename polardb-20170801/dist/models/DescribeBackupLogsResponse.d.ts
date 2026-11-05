import * as $dara from '@darabonba/typescript';
import { DescribeBackupLogsResponseBody } from "./DescribeBackupLogsResponseBody";
export declare class DescribeBackupLogsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeBackupLogsResponseBody;
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
