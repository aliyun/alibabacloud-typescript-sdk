import * as $dara from '@darabonba/typescript';
import { AddSQLRateLimitingRulesResponseBody } from "./AddSqlrateLimitingRulesResponseBody";
export declare class AddSQLRateLimitingRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: AddSQLRateLimitingRulesResponseBody;
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
