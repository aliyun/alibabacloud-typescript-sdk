import * as $dara from '@darabonba/typescript';
import { EnableSQLRateLimitingRulesResponseBody } from "./EnableSqlrateLimitingRulesResponseBody";
export declare class EnableSQLRateLimitingRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnableSQLRateLimitingRulesResponseBody;
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
