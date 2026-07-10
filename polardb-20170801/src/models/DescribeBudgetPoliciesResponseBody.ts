// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetPoliciesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The alert threshold percentage. Valid values: 0 to 100.
   * 
   * @example
   * 80
   */
  alertThresholdPct?: string;
  /**
   * @remarks
   * Indicates whether the alert threshold has been triggered.
   * 
   * @example
   * false
   */
  alertTriggered?: boolean;
  /**
   * @remarks
   * The dimension object ID. This parameter is required when BudgetDimensionType is set to ConsumerGroup or Consumer.
   * 
   * @example
   * cg-p3gk2oh55c**
   */
  budgetDimensionRefId?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - **ConsumerGroup**: total budget for a user group
   * - **Consumer**: total budget for a user
   * 
   * @example
   * ConsumerGroup
   */
  budgetDimensionType?: string;
  /**
   * @remarks
   * The budget points.
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
   * 023aacc1effc4b56bb154bfbec6ba9**
   */
  budgetPolicyId?: string;
  /**
   * @remarks
   * The budget type. Valid values:
   * 
   * - **GlobalTotal**: global total budget
   * - **ConsumerTotal**: total budget for a user
   * - **ConsumerGroupTotal**: total budget for a user group
   * 
   * @example
   * GlobalTotal
   */
  budgetType?: string;
  /**
   * @remarks
   * Indicates whether the quota has been exceeded.
   * 
   * @example
   * false
   */
  exceeded?: string;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2025-03-19T14:13:53+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the policy was last modified.
   * 
   * @example
   * 2025-04-08T10:43:28+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The day of the month on which the budget resets. Valid values: 1 to 28.
   * 
   * @example
   * 2
   */
  resetDayOfMonth?: string;
  /**
   * @remarks
   * The policy status. Valid values:
   * 
   * - **Enabled**: enabled
   * - **Disenabled**: disabled
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The number of used points.
   * 
   * @example
   * 10
   */
  usedPoints?: number;
  static names(): { [key: string]: string } {
    return {
      alertThresholdPct: 'AlertThresholdPct',
      alertTriggered: 'AlertTriggered',
      budgetDimensionRefId: 'BudgetDimensionRefId',
      budgetDimensionType: 'BudgetDimensionType',
      budgetPoints: 'BudgetPoints',
      budgetPolicyId: 'BudgetPolicyId',
      budgetType: 'BudgetType',
      exceeded: 'Exceeded',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      gwClusterId: 'GwClusterId',
      resetDayOfMonth: 'ResetDayOfMonth',
      status: 'Status',
      usedPoints: 'UsedPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertThresholdPct: 'string',
      alertTriggered: 'boolean',
      budgetDimensionRefId: 'string',
      budgetDimensionType: 'string',
      budgetPoints: 'string',
      budgetPolicyId: 'string',
      budgetType: 'string',
      exceeded: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      gwClusterId: 'string',
      resetDayOfMonth: 'string',
      status: 'string',
      usedPoints: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBudgetPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of budget policies.
   */
  items?: DescribeBudgetPoliciesResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30**, **50**, and **100**.
   *                               
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeBudgetPoliciesResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

