import * as $dara from '@darabonba/typescript';
import { DescribeBackupLogDownloadLinksResponseBody } from "./DescribeBackupLogDownloadLinksResponseBody";
export declare class DescribeBackupLogDownloadLinksResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeBackupLogDownloadLinksResponseBody;
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
