import * as $dara from '@darabonba/typescript';
export declare class CreateBudgetPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The alert threshold percentage (0 to 100).
     *
     * @example
     * 10
     */
    alertThresholdPct?: string;
    /**
     * @remarks
     * The ID of the dimension object. This parameter is required when BudgetType is set to ConsumerGroupTotal or Consumer.
     *
     * @example
     * mi-xxxxx
     */
    budgetDimensionRefId?: string;
    /**
     * @remarks
     * The budget points.
     *
     * This parameter is required.
     *
     * @example
     * 1000
     */
    budgetPoints?: string;
    /**
     * @remarks
     * The budget type. Valid values:
     *
     * - **GlobalTotal**: global total budget
     * - **ConsumerGroupTotal**: total budget of a consumer group
     * - **ConsumerGroupMemberDefault**: default budget for consumer group members
     * - **Consumer**: budget for a single consumer
     *
     * This parameter is required.
     *
     * @example
     * GlobalTotal
     */
    budgetType?: string;
    /**
     * @remarks
     * The gateway instance ID.
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
    /**
     * @remarks
     * The day of the month when the budget is reset (1 to 28).
     *
     * This parameter is required.
     *
     * @example
     * 1
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
