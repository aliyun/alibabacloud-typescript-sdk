import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceProxyConfigurationResponseBody } from "./DescribeDbinstanceProxyConfigurationResponseBody";
export declare class DescribeDBInstanceProxyConfigurationResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceProxyConfigurationResponseBody;
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
