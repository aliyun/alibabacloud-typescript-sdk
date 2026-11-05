import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesAsCsvResponseBody } from "./DescribeDbinstancesAsCsvResponseBody";
export declare class DescribeDBInstancesAsCsvResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstancesAsCsvResponseBody;
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
