// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetsResponseBodyDataCycleQuota extends $dara.Model {
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

export class DescribeBudgetsResponseBodyDataEcIdAccountIdsFilter extends $dara.Model {
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

export class DescribeBudgetsResponseBodyDataQueryFilter extends $dara.Model {
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

export class DescribeBudgetsResponseBodyDataWarnConfs extends $dara.Model {
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

export class DescribeBudgetsResponseBodyData extends $dara.Model {
  /**
   * @example
   * department1-test
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
  cycleQuota?: DescribeBudgetsResponseBodyDataCycleQuota[];
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
  ecIdAccountIdsFilter?: DescribeBudgetsResponseBodyDataEcIdAccountIdsFilter;
  /**
   * @example
   * NOT_EXPIRED
   */
  expireStatus?: string;
  /**
   * @example
   * REQUIRE_AMOUNT
   */
  metric?: string;
  queryFilter?: DescribeBudgetsResponseBodyDataQueryFilter[];
  /**
   * @example
   * 10000
   */
  quota?: string;
  /**
   * @example
   * FIXED
   */
  quotaType?: string;
  warnConfs?: DescribeBudgetsResponseBodyDataWarnConfs[];
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
      expireStatus: 'ExpireStatus',
      metric: 'Metric',
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
      cycleQuota: { 'type': 'array', 'itemType': DescribeBudgetsResponseBodyDataCycleQuota },
      cycleStartPeriod: 'string',
      cycleType: 'string',
      ecIdAccountIdsFilter: DescribeBudgetsResponseBodyDataEcIdAccountIdsFilter,
      expireStatus: 'string',
      metric: 'string',
      queryFilter: { 'type': 'array', 'itemType': DescribeBudgetsResponseBodyDataQueryFilter },
      quota: 'string',
      quotaType: 'string',
      warnConfs: { 'type': 'array', 'itemType': DescribeBudgetsResponseBodyDataWarnConfs },
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

export class DescribeBudgetsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: DescribeBudgetsResponseBodyData[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * DB2A9097-289C-11CE-AA74-235FCFD39204
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': DescribeBudgetsResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

