import * as $dara from '@darabonba/typescript';
import { DescribeBackupRegionsResponseBody } from "./DescribeBackupRegionsResponseBody";
export declare class DescribeBackupRegionsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeBackupRegionsResponseBody;
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
