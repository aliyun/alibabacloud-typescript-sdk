import * as $dara from '@darabonba/typescript';
import { DescribeBudgetPoliciesResponseBody } from "./DescribeBudgetPoliciesResponseBody";
export declare class DescribeBudgetPoliciesResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DescribeBudgetPoliciesResponseBody;
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
