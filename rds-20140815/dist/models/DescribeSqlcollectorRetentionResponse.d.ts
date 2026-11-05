import * as $dara from '@darabonba/typescript';
import { DescribeSQLCollectorRetentionResponseBody } from "./DescribeSqlcollectorRetentionResponseBody";
export declare class DescribeSQLCollectorRetentionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSQLCollectorRetentionResponseBody;
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
