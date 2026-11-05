import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceSecurityGroupRuleResponseBody } from "./DescribeDbinstanceSecurityGroupRuleResponseBody";
export declare class DescribeDBInstanceSecurityGroupRuleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceSecurityGroupRuleResponseBody;
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
