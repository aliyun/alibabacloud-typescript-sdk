import * as $dara from '@darabonba/typescript';
import { DeleteSQLRateLimitingRulesResponseBody } from "./DeleteSqlrateLimitingRulesResponseBody";
export declare class DeleteSQLRateLimitingRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteSQLRateLimitingRulesResponseBody;
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
