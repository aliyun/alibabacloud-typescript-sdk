// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBudgetRequestCycleQuota extends $dara.Model {
  /**
   * @remarks
   * The cycle.
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

export class CreateBudgetRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accounts to access. An empty value indicates all accounts under the current entity ID.
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

export class CreateBudgetRequestQueryFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter code.
   * 
   * @example
   * RESOURCE_OWNER_ACCOUNT
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

export class CreateBudgetRequestWarnConfs extends $dara.Model {
  /**
   * @remarks
   * The remarks.
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
   * The alert name. This is a user-defined optional field. If not specified, the backend automatically generates a name.
   * 
   * @example
   * Alter-1
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
   * 2000
   */
  thresholdValue?: string;
  /**
   * @remarks
   * The alert target.
   * 
   * @example
   * FORECAST
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

export class CreateBudgetRequest extends $dara.Model {
  /**
   * @remarks
   * The budget name.
   * 
   * This parameter is required.
   * 
   * @example
   * Department_dev_budget
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
   * The remarks.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The end cycle.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-12
   */
  cycleEndPeriod?: string;
  /**
   * @remarks
   * The per-cycle specified quota. This parameter is required when QuotaType is set to `SPECIFY`.
   */
  cycleQuota?: CreateBudgetRequestCycleQuota[];
  /**
   * @remarks
   * The start cycle.
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
   * The list of enterprises and accounts. An empty value indicates the current account.
   */
  ecIdAccountIds?: CreateBudgetRequestEcIdAccountIds[];
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
   * The level-1 marketplace ID. If empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 26842
   */
  nbid?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  queryFilter?: CreateBudgetRequestQueryFilter[];
  /**
   * @remarks
   * The fixed quota value. If the type is quota, the unit is percentage.
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
  warnConfs?: CreateBudgetRequestWarnConfs[];
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
      cycleQuota: { 'type': 'array', 'itemType': CreateBudgetRequestCycleQuota },
      cycleStartPeriod: 'string',
      cycleType: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': CreateBudgetRequestEcIdAccountIds },
      metric: 'string',
      nbid: 'string',
      queryFilter: { 'type': 'array', 'itemType': CreateBudgetRequestQueryFilter },
      quota: 'string',
      quotaType: 'string',
      warnConfs: { 'type': 'array', 'itemType': CreateBudgetRequestWarnConfs },
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

