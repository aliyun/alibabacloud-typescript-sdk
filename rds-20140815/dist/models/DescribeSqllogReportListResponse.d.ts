import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogReportListResponseBody } from "./DescribeSqllogReportListResponseBody";
export declare class DescribeSQLLogReportListResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSQLLogReportListResponseBody;
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
