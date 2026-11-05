import * as $dara from '@darabonba/typescript';
import { DescribeBackupDatabaseResponseBody } from "./DescribeBackupDatabaseResponseBody";
export declare class DescribeBackupDatabaseResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeBackupDatabaseResponseBody;
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
