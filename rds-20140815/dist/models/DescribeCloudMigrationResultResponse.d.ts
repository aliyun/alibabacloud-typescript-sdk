import * as $dara from '@darabonba/typescript';
import { DescribeCloudMigrationResultResponseBody } from "./DescribeCloudMigrationResultResponseBody";
export declare class DescribeCloudMigrationResultResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeCloudMigrationResultResponseBody;
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
