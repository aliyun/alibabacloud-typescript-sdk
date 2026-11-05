import * as $dara from '@darabonba/typescript';
import { CreateCostRuleResponseBody } from "./CreateCostRuleResponseBody";
export declare class CreateCostRuleResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateCostRuleResponseBody;
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
