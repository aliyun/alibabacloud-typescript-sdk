import * as $dara from '@darabonba/typescript';
export declare class DeleteBudgetPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the budget policy to delete. You can obtain the ID from the BudgetPolicyId returned by CreateBudgetPolicy.
     *
     * This parameter is required.
     *
     * @example
     * 023aacc1effc4b56bb154bfbec6baxxx
     */
    budgetPolicyId?: string;
    /**
     * @remarks
     * The ID of the gateway instance. You can obtain the ID from the GwClusterId returned by CreateGateway.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
