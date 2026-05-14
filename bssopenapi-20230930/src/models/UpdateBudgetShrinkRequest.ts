// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBudgetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NewBudgetName
   */
  budgetName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CONSUME
   */
  budgetType?: string;
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-12
   */
  cycleEndPeriod?: string;
  cycleQuotaShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-01
   */
  cycleStartPeriod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MONTHLY
   */
  cycleType?: string;
  ecIdAccountIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REQUIRE_AMOUNT
   */
  metric?: string;
  nbid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OriginalBudgetName
   */
  originalBudgetName?: string;
  queryFilterShrink?: string;
  /**
   * @example
   * 1000
   */
  quota?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FIXED
   */
  quotaType?: string;
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

