import * as $dara from '@darabonba/typescript';
import { DescribeLogBackupFilesResponseBody } from "./DescribeLogBackupFilesResponseBody";
export declare class DescribeLogBackupFilesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeLogBackupFilesResponseBody;
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
