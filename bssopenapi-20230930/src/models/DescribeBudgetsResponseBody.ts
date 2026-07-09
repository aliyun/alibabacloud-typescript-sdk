// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetsResponseBodyDataCycleQuota extends $dara.Model {
  /**
   * @remarks
   * The cycle period.
   * 
   * @example
   * 202601
   */
  cyclePeriod?: string;
  /**
   * @remarks
   * The quota.
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

export class DescribeBudgetsResponseBodyDataEcIdAccountIdsFilter extends $dara.Model {
  /**
   * @remarks
   * The member account IDs.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The enterprise entity ID.
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

export class DescribeBudgetsResponseBodyDataQueryFilter extends $dara.Model {
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
   * The filter value list.
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

export class DescribeBudgetsResponseBodyDataWarnConfs extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * comment1
   */
  comment?: string;
  /**
   * @remarks
   * Indicates whether EventBridge is enabled.
   */
  eventBridge?: boolean;
  /**
   * @remarks
   * The list of message center notification channels.
   */
  mscChannels?: string[];
  /**
   * @remarks
   * The list of message center contacts.
   */
  mscContacts?: string[];
  /**
   * @remarks
   * The alert name. This parameter is user-defined and optional. If not specified, the backend automatically generates a name.
   * 
   * @example
   * Alert-1
   */
  name?: string;
  /**
   * @remarks
   * The sort sequence number. This parameter is present only in responses. Alerts are numbered in ascending order by alert ID, starting from 1.
   * 
   * @example
   * 1
   */
  sequence?: number;
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
   * 100
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
   * @remarks
   * The budget name.
   * 
   * @example
   * department1-test
   */
  budgetName?: string;
  /**
   * @remarks
   * The budget type.
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
   * budget-1
   */
  comment?: string;
  /**
   * @remarks
   * The end period.
   * 
   * @example
   * 2026-12
   */
  cycleEndPeriod?: string;
  /**
   * @remarks
   * The specified quota per cycle.
   */
  cycleQuota?: DescribeBudgetsResponseBodyDataCycleQuota[];
  /**
   * @remarks
   * The start period.
   * 
   * @example
   * 2025-10
   */
  cycleStartPeriod?: string;
  /**
   * @remarks
   * The cycle type.
   * 
   * @example
   * MONTHLY
   */
  cycleType?: string;
  /**
   * @remarks
   * The enterprise multi-account filter conditions.
   */
  ecIdAccountIdsFilter?: DescribeBudgetsResponseBodyDataEcIdAccountIdsFilter;
  /**
   * @remarks
   * The expiration status.
   * 
   * @example
   * NOT_EXPIRED
   */
  expireStatus?: string;
  /**
   * @remarks
   * The budget metric.
   * 
   * @example
   * REQUIRE_AMOUNT
   */
  metric?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  queryFilter?: DescribeBudgetsResponseBodyDataQueryFilter[];
  /**
   * @remarks
   * The fixed quota value.
   * 
   * @example
   * 10000
   */
  quota?: string;
  /**
   * @remarks
   * The quota type.
   * 
   * @example
   * FIXED
   */
  quotaType?: string;
  /**
   * @remarks
   * The alert configurations.
   */
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
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data list.
   */
  data?: DescribeBudgetsResponseBodyData[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB2A9097-289C-11CE-AA74-235FCFD39204
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
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

