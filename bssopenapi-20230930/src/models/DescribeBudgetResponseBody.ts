// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetResponseBodyCycleQuota extends $dara.Model {
  /**
   * @remarks
   * Cycle period.
   * 
   * @example
   * 202601
   */
  cyclePeriod?: string;
  /**
   * @remarks
   * Quota.
   * 
   * @example
   * 100
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

export class DescribeBudgetResponseBodyEcIdAccountIdsFilter extends $dara.Model {
  /**
   * @remarks
   * Member account IDs.
   */
  accountIds?: number[];
  /**
   * @remarks
   * Enterprise entity ID.
   * 
   * @example
   * E2024112210463400001
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

export class DescribeBudgetResponseBodyQueryFilter extends $dara.Model {
  /**
   * @remarks
   * Parameter code.
   * 
   * @example
   * RESOURCE_OWNER_ACCOUNT
   */
  code?: string;
  /**
   * @remarks
   * Selection mode.
   * 
   * @example
   * IN
   */
  selectType?: string;
  /**
   * @remarks
   * Filter value list.
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

export class DescribeBudgetResponseBodyWarnConfs extends $dara.Model {
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether to enable EventBridge.
   */
  eventBridge?: boolean;
  /**
   * @remarks
   * Message center notification channel list.
   */
  mscChannels?: string[];
  /**
   * @remarks
   * Message center contact list.
   */
  mscContacts?: string[];
  /**
   * @remarks
   * Alert name. User-defined and optional. If not specified, the backend automatically generates a name.
   * 
   * @example
   * Alter-1
   */
  name?: string;
  /**
   * @remarks
   * Sequence number. Only present in responses. Alerts are numbered in ascending order of alert ID, starting from 1.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Threshold type.
   * 
   * @example
   * FIXED
   */
  thresholdType?: string;
  /**
   * @remarks
   * Threshold value.
   * 
   * @example
   * 1000
   */
  thresholdValue?: string;
  /**
   * @remarks
   * Alert target.
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
      sequence: 'Sequence',
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
      sequence: 'number',
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

export class DescribeBudgetResponseBody extends $dara.Model {
  /**
   * @remarks
   * Budget name.
   * 
   * @example
   * department1
   */
  budgetName?: string;
  /**
   * @remarks
   * Budget type.
   * 
   * @example
   * CONSUME
   */
  budgetType?: string;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * End cycle period.
   * 
   * @example
   * 2026-12
   */
  cycleEndPeriod?: string;
  /**
   * @remarks
   * Quota specified per cycle.
   */
  cycleQuota?: DescribeBudgetResponseBodyCycleQuota[];
  /**
   * @remarks
   * Start cycle period.
   * 
   * @example
   * 2025-10
   */
  cycleStartPeriod?: string;
  /**
   * @remarks
   * Cycle type.
   * 
   * @example
   * MONTHLY
   */
  cycleType?: string;
  /**
   * @remarks
   * Enterprise multi-account filter conditions.
   */
  ecIdAccountIdsFilter?: DescribeBudgetResponseBodyEcIdAccountIdsFilter;
  /**
   * @remarks
   * Response structure metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * Budget metric.
   * 
   * @example
   * REQUIRE_AMOUNT
   */
  metric?: string;
  /**
   * @remarks
   * Filter conditions.
   */
  queryFilter?: DescribeBudgetResponseBodyQueryFilter[];
  /**
   * @remarks
   * Fixed quota value.
   * 
   * @example
   * 1000
   */
  quota?: string;
  /**
   * @remarks
   * Quota type.
   * 
   * @example
   * FIXED
   */
  quotaType?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Alert configurations.
   */
  warnConfs?: DescribeBudgetResponseBodyWarnConfs[];
  static names(): { [key: string]: string } {
    return {
      budgetName: 'BudgetName',
      budgetType: 'BudgetType',
      comment: 'Comment',
      cycleEndPeriod: 'CycleEndPeriod',
      cycleQuota: 'CycleQuota',
      cycleStartPeriod: 'CycleStartPeriod',
      cycleType: 'CycleType',
      ecIdAccountIdsFilter: 'EcIdAccountIdsFilter',
      metadata: 'Metadata',
      metric: 'Metric',
      queryFilter: 'QueryFilter',
      quota: 'Quota',
      quotaType: 'QuotaType',
      requestId: 'RequestId',
      warnConfs: 'WarnConfs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetName: 'string',
      budgetType: 'string',
      comment: 'string',
      cycleEndPeriod: 'string',
      cycleQuota: { 'type': 'array', 'itemType': DescribeBudgetResponseBodyCycleQuota },
      cycleStartPeriod: 'string',
      cycleType: 'string',
      ecIdAccountIdsFilter: DescribeBudgetResponseBodyEcIdAccountIdsFilter,
      metadata: 'any',
      metric: 'string',
      queryFilter: { 'type': 'array', 'itemType': DescribeBudgetResponseBodyQueryFilter },
      quota: 'string',
      quotaType: 'string',
      requestId: 'string',
      warnConfs: { 'type': 'array', 'itemType': DescribeBudgetResponseBodyWarnConfs },
    };
  }

  validate() {
    if(Array.isArray(this.cycleQuota)) {
      $dara.Model.validateArray(this.cycleQuota);
    }
    if(this.ecIdAccountIdsFilter && typeof (this.ecIdAccountIdsFilter as any).validate === 'function') {
      (this.ecIdAccountIdsFilter as any).validate();
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

