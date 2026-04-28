// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetPoliciesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 80
   */
  alertThresholdPct?: string;
  alertTriggered?: boolean;
  /**
   * @example
   * cg-p3gk2oh55c**
   */
  budgetDimensionRefId?: string;
  /**
   * @example
   * ConsumerGroup
   */
  budgetDimensionType?: string;
  /**
   * @example
   * 10000
   */
  budgetPoints?: string;
  /**
   * @example
   * 023aacc1effc4b56bb154bfbec6ba9**
   */
  budgetPolicyId?: string;
  /**
   * @example
   * GlobalTotal
   */
  budgetType?: string;
  exceeded?: string;
  /**
   * @example
   * 2025-03-19T14:13:53+08:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2025-04-08T10:43:28+08:00
   */
  gmtModified?: string;
  /**
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @example
   * 2
   */
  resetDayOfMonth?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
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
  items?: DescribeBudgetPoliciesResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
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

