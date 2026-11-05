import * as $dara from '@darabonba/typescript';
import { DeleteBudgetPolicyResponseBody } from "./DeleteBudgetPolicyResponseBody";
export declare class DeleteBudgetPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteBudgetPolicyResponseBody;
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
