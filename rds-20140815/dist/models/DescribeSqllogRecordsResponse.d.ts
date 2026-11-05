import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogRecordsResponseBody } from "./DescribeSqllogRecordsResponseBody";
export declare class DescribeSQLLogRecordsResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSQLLogRecordsResponseBody;
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
