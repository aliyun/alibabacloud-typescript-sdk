import * as $dara from '@darabonba/typescript';
import { ModifyCostRuleResponseBody } from "./ModifyCostRuleResponseBody";
export declare class ModifyCostRuleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyCostRuleResponseBody;
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
