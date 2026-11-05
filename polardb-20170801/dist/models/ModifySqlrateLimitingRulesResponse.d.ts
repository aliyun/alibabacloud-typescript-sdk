import * as $dara from '@darabonba/typescript';
import { ModifySQLRateLimitingRulesResponseBody } from "./ModifySqlrateLimitingRulesResponseBody";
export declare class ModifySQLRateLimitingRulesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifySQLRateLimitingRulesResponseBody;
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
