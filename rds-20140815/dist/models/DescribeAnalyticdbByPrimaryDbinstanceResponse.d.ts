import * as $dara from '@darabonba/typescript';
import { DescribeAnalyticdbByPrimaryDBInstanceResponseBody } from "./DescribeAnalyticdbByPrimaryDbinstanceResponseBody";
export declare class DescribeAnalyticdbByPrimaryDBInstanceResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeAnalyticdbByPrimaryDBInstanceResponseBody;
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
