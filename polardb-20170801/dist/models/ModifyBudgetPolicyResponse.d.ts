import * as $dara from '@darabonba/typescript';
import { ModifyBudgetPolicyResponseBody } from "./ModifyBudgetPolicyResponseBody";
export declare class ModifyBudgetPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ModifyBudgetPolicyResponseBody;
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
