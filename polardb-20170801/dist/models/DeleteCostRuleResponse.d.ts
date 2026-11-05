import * as $dara from '@darabonba/typescript';
import { DeleteCostRuleResponseBody } from "./DeleteCostRuleResponseBody";
export declare class DeleteCostRuleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteCostRuleResponseBody;
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
