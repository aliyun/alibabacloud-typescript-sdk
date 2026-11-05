import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceSwitchLogResponseBody } from "./DescribeDbinstanceSwitchLogResponseBody";
export declare class DescribeDBInstanceSwitchLogResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeDBInstanceSwitchLogResponseBody;
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
