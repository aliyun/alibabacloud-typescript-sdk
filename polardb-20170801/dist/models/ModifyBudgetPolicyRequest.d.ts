import * as $dara from '@darabonba/typescript';
export declare class ModifyBudgetPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The budget usage percentage that triggers an alert. Valid values: 0 to 100.
     *
     * @example
     * 80
     */
    alertThresholdPct?: string;
    /**
     * @remarks
     * The budget amount in points.
     *
     * @example
     * 10000
     */
    budgetPoints?: string;
    /**
     * @remarks
     * The ID of the budget policy.
     *
     * This parameter is required.
     *
     * @example
     * 023aacc1effc4b56bb154bfbec6ba9**
     */
    budgetPolicyId?: string;
    /**
     * @remarks
     * The ID of the gateway instance.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The ID of the region.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The day of the month when the budget is reset. Valid values: 1 to 28.
     *
     * @example
     * 2
     */
    resetDayOfMonth?: string;
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
