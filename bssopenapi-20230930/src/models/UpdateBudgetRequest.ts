// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBudgetRequestCycleQuota extends $dara.Model {
  cyclePeriod?: string;
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
  accountIds?: number[];
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
  code?: string;
  selectType?: string;
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
  comment?: string;
  eventBridge?: boolean;
  mscChannels?: string[];
  mscContacts?: string[];
  name?: string;
  thresholdType?: string;
  thresholdValue?: string;
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
  cycleQuota?: UpdateBudgetRequestCycleQuota[];
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
  ecIdAccountIds?: UpdateBudgetRequestEcIdAccountIds[];
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
  queryFilter?: UpdateBudgetRequestQueryFilter[];
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

