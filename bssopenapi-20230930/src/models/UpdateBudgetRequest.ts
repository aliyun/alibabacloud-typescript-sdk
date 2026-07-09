// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBudgetRequestCycleQuota extends $dara.Model {
  /**
   * @remarks
   * The cycle period.
   * 
   * @example
   * 2026-01
   */
  cyclePeriod?: string;
  /**
   * @remarks
   * The quota.
   * 
   * @example
   * 1000
   */
  quota?: string;
  static names(): { [key: string]: string } {
    return {
      cyclePeriod: 'CyclePeriod',
      quota: 'Quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cyclePeriod: 'string',
      quota: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBudgetRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accounts to access. If this parameter is left empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The enterprise entity ID.
   * 
   * @example
   * 1
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBudgetRequestQueryFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter code.
   * 
   * @example
   * PRODUCT
   */
  code?: string;
  /**
   * @remarks
   * The selection mode.
   * 
   * @example
   * IN
   */
  selectType?: string;
  /**
   * @remarks
   * The list of filter values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      selectType: 'SelectType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      selectType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBudgetRequestWarnConfs extends $dara.Model {
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
   * Specifies whether to enable EventBridge.
   * 
   * @example
   * true
   */
  eventBridge?: boolean;
  /**
   * @remarks
   * The list of Message Center notification channels.
   */
  mscChannels?: string[];
  /**
   * @remarks
   * The list of Message Center contacts.
   */
  mscContacts?: string[];
  /**
   * @remarks
   * The alert name. This is user-defined and optional. If not specified, the backend automatically generates a name.
   * 
   * @example
   * warn1
   */
  name?: string;
  /**
   * @remarks
   * The threshold type.
   * 
   * @example
   * FIXED
   */
  thresholdType?: string;
  /**
   * @remarks
   * The threshold value.
   * 
   * @example
   * 1000
   */
  thresholdValue?: string;
  /**
   * @remarks
   * The alert target.
   * 
   * @example
   * ACTUAL
   */
  warnTarget?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      eventBridge: 'EventBridge',
      mscChannels: 'MscChannels',
      mscContacts: 'MscContacts',
      name: 'Name',
      thresholdType: 'ThresholdType',
      thresholdValue: 'ThresholdValue',
      warnTarget: 'WarnTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      eventBridge: 'boolean',
      mscChannels: { 'type': 'array', 'itemType': 'string' },
      mscContacts: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      thresholdType: 'string',
      thresholdValue: 'string',
      warnTarget: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mscChannels)) {
      $dara.Model.validateArray(this.mscChannels);
    }
    if(Array.isArray(this.mscContacts)) {
      $dara.Model.validateArray(this.mscContacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBudgetRequest extends $dara.Model {
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
  cycleQuota?: UpdateBudgetRequestCycleQuota[];
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
  ecIdAccountIds?: UpdateBudgetRequestEcIdAccountIds[];
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
  queryFilter?: UpdateBudgetRequestQueryFilter[];
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
  warnConfs?: UpdateBudgetRequestWarnConfs[];
  static names(): { [key: string]: string } {
    return {
      budgetName: 'BudgetName',
      budgetType: 'BudgetType',
      comment: 'Comment',
      cycleEndPeriod: 'CycleEndPeriod',
      cycleQuota: 'CycleQuota',
      cycleStartPeriod: 'CycleStartPeriod',
      cycleType: 'CycleType',
      ecIdAccountIds: 'EcIdAccountIds',
      metric: 'Metric',
      nbid: 'Nbid',
      originalBudgetName: 'OriginalBudgetName',
      queryFilter: 'QueryFilter',
      quota: 'Quota',
      quotaType: 'QuotaType',
      warnConfs: 'WarnConfs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetName: 'string',
      budgetType: 'string',
      comment: 'string',
      cycleEndPeriod: 'string',
      cycleQuota: { 'type': 'array', 'itemType': UpdateBudgetRequestCycleQuota },
      cycleStartPeriod: 'string',
      cycleType: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': UpdateBudgetRequestEcIdAccountIds },
      metric: 'string',
      nbid: 'string',
      originalBudgetName: 'string',
      queryFilter: { 'type': 'array', 'itemType': UpdateBudgetRequestQueryFilter },
      quota: 'string',
      quotaType: 'string',
      warnConfs: { 'type': 'array', 'itemType': UpdateBudgetRequestWarnConfs },
    };
  }

  validate() {
    if(Array.isArray(this.cycleQuota)) {
      $dara.Model.validateArray(this.cycleQuota);
    }
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(Array.isArray(this.queryFilter)) {
      $dara.Model.validateArray(this.queryFilter);
    }
    if(Array.isArray(this.warnConfs)) {
      $dara.Model.validateArray(this.warnConfs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

