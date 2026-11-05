import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterMigrationResponseBody } from "./DescribeDbclusterMigrationResponseBody";
export declare class DescribeDBClusterMigrationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClusterMigrationResponseBody;
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
