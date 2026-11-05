import * as $dara from '@darabonba/typescript';
import { DescribeSQLRateLimitingRulesResponseBody } from "./DescribeSqlrateLimitingRulesResponseBody";
export declare class DescribeSQLRateLimitingRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeSQLRateLimitingRulesResponseBody;
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
