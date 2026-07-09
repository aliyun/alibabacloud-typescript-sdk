// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBudgetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The budget name.
   * 
   * This parameter is required.
   * 
   * @example
   * NewBudgetName
   */
  budgetName?: string;
  /**
   * @remarks
   * The budget type.
   * 
   * This parameter is required.
   * 
   * @example
   * CONSUME
   */
  budgetType?: string;
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The end period of the cycle.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-12
   */
  cycleEndPeriod?: string;
  /**
   * @remarks
   * The quota specified for each cycle.
   */
  cycleQuotaShrink?: string;
  /**
   * @remarks
   * The start period of the cycle.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-01
   */
  cycleStartPeriod?: string;
  /**
   * @remarks
   * The cycle type.
   * 
   * This parameter is required.
   * 
   * @example
   * MONTHLY
   */
  cycleType?: string;
  /**
   * @remarks
   * The list of enterprise entities and accounts. If this parameter is left empty, the current account is queried.
   */
  ecIdAccountIdsShrink?: string;
  /**
   * @remarks
   * The budget metric.
   * 
   * This parameter is required.
   * 
   * @example
   * REQUIRE_AMOUNT
   */
  metric?: string;
  /**
   * @remarks
   * The primary sales channel ID. If this parameter is left empty, the sales channel ID of the current user is used by default.
   * 
   * @example
   * 26842
   */
  nbid?: string;
  /**
   * @remarks
   * The original budget name.
   * 
   * This parameter is required.
   * 
   * @example
   * OriginalBudgetName
   */
  originalBudgetName?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  queryFilterShrink?: string;
  /**
   * @remarks
   * The fixed quota value.
   * 
   * @example
   * 1000
   */
  quota?: string;
  /**
   * @remarks
   * The quota type.
   * 
   * This parameter is required.
   * 
   * @example
   * FIXED
   */
  quotaType?: string;
  /**
   * @remarks
   * The alert configurations.
   */
  warnConfsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      budgetName: 'BudgetName',
      budgetType: 'BudgetType',
      comment: 'Comment',
      cycleEndPeriod: 'CycleEndPeriod',
      cycleQuotaShrink: 'CycleQuota',
      cycleStartPeriod: 'CycleStartPeriod',
      cycleType: 'CycleType',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      metric: 'Metric',
      nbid: 'Nbid',
      originalBudgetName: 'OriginalBudgetName',
      queryFilterShrink: 'QueryFilter',
      quota: 'Quota',
      quotaType: 'QuotaType',
      warnConfsShrink: 'WarnConfs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetName: 'string',
      budgetType: 'string',
      comment: 'string',
      cycleEndPeriod: 'string',
      cycleQuotaShrink: 'string',
      cycleStartPeriod: 'string',
      cycleType: 'string',
      ecIdAccountIdsShrink: 'string',
      metric: 'string',
      nbid: 'string',
      originalBudgetName: 'string',
      queryFilterShrink: 'string',
      quota: 'string',
      quotaType: 'string',
      warnConfsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

