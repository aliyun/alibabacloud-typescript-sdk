import * as $dara from '@darabonba/typescript';
import { CreateBudgetPolicyResponseBody } from "./CreateBudgetPolicyResponseBody";
export declare class CreateBudgetPolicyResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: CreateBudgetPolicyResponseBody;
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
