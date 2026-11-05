import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceIpHostnameResponseBody } from "./DescribeDbinstanceIpHostnameResponseBody";
export declare class DescribeDBInstanceIpHostnameResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceIpHostnameResponseBody;
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
