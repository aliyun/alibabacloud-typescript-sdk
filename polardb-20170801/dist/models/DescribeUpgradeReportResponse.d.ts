import * as $dara from '@darabonba/typescript';
import { DescribeUpgradeReportResponseBody } from "./DescribeUpgradeReportResponseBody";
export declare class DescribeUpgradeReportResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeUpgradeReportResponseBody;
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
