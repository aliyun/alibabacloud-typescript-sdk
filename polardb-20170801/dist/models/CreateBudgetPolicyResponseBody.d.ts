import * as $dara from '@darabonba/typescript';
export declare class CreateBudgetPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the budget policy.
     *
     * @example
     * 05a5a8603df444a8a605af712ffexxx
     */
    budgetPolicyId?: string;
    /**
     * @remarks
     * The gateway instance ID.
     *
     * @example
     * pg-xxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
     */
    requestId?: string;
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
