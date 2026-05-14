// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetResponseBodyCycleQuota extends $dara.Model {
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

export class DescribeBudgetResponseBodyEcIdAccountIdsFilter extends $dara.Model {
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

export class DescribeBudgetResponseBodyQueryFilter extends $dara.Model {
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

export class DescribeBudgetResponseBodyWarnConfs extends $dara.Model {
  comment?: string;
  eventBridge?: boolean;
  mscChannels?: string[];
  mscContacts?: string[];
  name?: string;
  sequence?: number;
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
   * @example
   * department1
   */
  budgetName?: string;
  /**
   * @example
   * CONSUME
   */
  budgetType?: string;
  comment?: string;
  /**
   * @example
   * 2026-12
   */
  cycleEndPeriod?: string;
  cycleQuota?: DescribeBudgetResponseBodyCycleQuota[];
  /**
   * @example
   * 2025-10
   */
  cycleStartPeriod?: string;
  /**
   * @example
   * MONTHLY
   */
  cycleType?: string;
  ecIdAccountIdsFilter?: DescribeBudgetResponseBodyEcIdAccountIdsFilter;
  metadata?: any;
  /**
   * @example
   * REQUIRE_AMOUNT
   */
  metric?: string;
  queryFilter?: DescribeBudgetResponseBodyQueryFilter[];
  /**
   * @example
   * 1000
   */
  quota?: string;
  /**
   * @example
   * FIXED
   */
  quotaType?: string;
  /**
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
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

