import * as $dara from '@darabonba/typescript';
import { DescribeDBClustersWithBackupsResponseBody } from "./DescribeDbclustersWithBackupsResponseBody";
export declare class DescribeDBClustersWithBackupsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBClustersWithBackupsResponseBody;
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
