// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetUsageResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The usage percentage that triggers a budget alert.
   * 
   * @example
   * 0.8
   */
  alertThresholdPct?: string;
  /**
   * @remarks
   * The budget dimension reference ID to which the policy applies.
   * 
   * @example
   * ref-001
   */
  budgetDimensionRefId?: string;
  /**
   * @remarks
   * The budget dimension type to which the policy applies.
   * 
   * @example
   * cluster
   */
  budgetDimensionType?: string;
  /**
   * @remarks
   * The number of budget points set by the policy.
   * 
   * @example
   * 10000
   */
  budgetPoints?: string;
  /**
   * @remarks
   * The budget policy ID.
   * 
   * @example
   * bp-001
   */
  budgetPolicyId?: string;
  /**
   * @remarks
   * The budget type.
   * 
   * @example
   * token
   */
  budgetType?: string;
  /**
   * @remarks
   * The day of the month when the budget is reset. For example, 1 indicates the first day of each month.
   * 
   * @example
   * 1
   */
  resetDayOfMonth?: string;
  /**
   * @remarks
   * The budget policy status.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alertThresholdPct: 'AlertThresholdPct',
      budgetDimensionRefId: 'BudgetDimensionRefId',
      budgetDimensionType: 'BudgetDimensionType',
      budgetPoints: 'BudgetPoints',
      budgetPolicyId: 'BudgetPolicyId',
      budgetType: 'BudgetType',
      resetDayOfMonth: 'ResetDayOfMonth',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertThresholdPct: 'string',
      budgetDimensionRefId: 'string',
      budgetDimensionType: 'string',
      budgetPoints: 'string',
      budgetPolicyId: 'string',
      budgetType: 'string',
      resetDayOfMonth: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBudgetUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a budget alert is triggered.
   * 
   * @example
   * false
   */
  alertTriggered?: string;
  /**
   * @remarks
   * The dimension reference ID of the current budget.
   * 
   * @example
   * ref-001
   */
  dimensionRefId?: string;
  /**
   * @remarks
   * The dimension type of the current budget.
   * 
   * @example
   * cluster
   */
  dimensionType?: string;
  /**
   * @remarks
   * Indicates whether the budget is exceeded.
   * 
   * @example
   * false
   */
  exceeded?: string;
  /**
   * @remarks
   * The creation time of the budget usage record in RFC 3339 UTC format.
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The last modification time of the budget usage record in RFC 3339 UTC format.
   * 
   * @example
   * 2025-01-15T12:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * pc-123
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The list of associated budget policies.
   */
  policies?: DescribeBudgetUsageResponseBodyPolicies[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The number of budget points used in the current statistical window.
   * 
   * @example
   * 5000
   */
  usedPoints?: string;
  /**
   * @remarks
   * The end time of the budget statistical window in RFC 3339 UTC format.
   * 
   * @example
   * 2025-01-31T23:59:59Z
   */
  windowEndTime?: string;
  /**
   * @remarks
   * The start time of the budget statistical window in RFC 3339 UTC format.
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  windowStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      alertTriggered: 'AlertTriggered',
      dimensionRefId: 'DimensionRefId',
      dimensionType: 'DimensionType',
      exceeded: 'Exceeded',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      gwClusterId: 'GwClusterId',
      policies: 'Policies',
      requestId: 'RequestId',
      usedPoints: 'UsedPoints',
      windowEndTime: 'WindowEndTime',
      windowStartTime: 'WindowStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTriggered: 'string',
      dimensionRefId: 'string',
      dimensionType: 'string',
      exceeded: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      gwClusterId: 'string',
      policies: { 'type': 'array', 'itemType': DescribeBudgetUsageResponseBodyPolicies },
      requestId: 'string',
      usedPoints: 'string',
      windowEndTime: 'string',
      windowStartTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

