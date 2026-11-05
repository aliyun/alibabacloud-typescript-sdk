import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogFilesResponseBody } from "./DescribeSqllogFilesResponseBody";
export declare class DescribeSQLLogFilesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSQLLogFilesResponseBody;
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
