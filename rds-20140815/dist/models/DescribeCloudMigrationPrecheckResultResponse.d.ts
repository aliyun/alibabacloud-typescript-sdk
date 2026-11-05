import * as $dara from '@darabonba/typescript';
import { DescribeCloudMigrationPrecheckResultResponseBody } from "./DescribeCloudMigrationPrecheckResultResponseBody";
export declare class DescribeCloudMigrationPrecheckResultResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCloudMigrationPrecheckResultResponseBody;
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
