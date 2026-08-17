// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList extends $dara.Model {
  /**
   * @remarks
   * The time point in the format `yyyy-MM-dd HH` (accurate to the hour).
   * 
   * @example
   * 2026-05-02 10
   */
  timePoint?: string;
  /**
   * @remarks
   * The number of credits consumed in this hour.
   * 
   * @example
   * 12
   */
  usedCredit?: number;
  static names(): { [key: string]: string } {
    return {
      timePoint: 'TimePoint',
      usedCredit: 'UsedCredit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePoint: 'string',
      usedCredit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoRemainCreditInfo extends $dara.Model {
  deductingAmount?: number;
  pendingAmount?: number;
  static names(): { [key: string]: string } {
    return {
      deductingAmount: 'DeductingAmount',
      pendingAmount: 'PendingAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductingAmount: 'number',
      pendingAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfo extends $dara.Model {
  availableAmount?: number;
  contactGroupNames?: string[];
  /**
   * @remarks
   * The hourly consumption samples of the current credit package.
   */
  creditTrendList?: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList[];
  currentInstanceExpiredTime?: string;
  /**
   * @remarks
   * The instance ID of the current active credit package.
   * 
   * @example
   * cp-inst-001
   */
  currentInstanceId?: string;
  /**
   * @remarks
   * The remaining credits of the current active credit package.
   * 
   * @example
   * Current period remaining credits
   */
  currentRemainCredit?: number;
  /**
   * @remarks
   * The total credits of the current active credit package.
   * 
   * @example
   * Current period credit quota
   */
  currentTotalCredit?: number;
  /**
   * @remarks
   * The used credits of the current active credit package.
   * 
   * @example
   * Current period credits consumed
   */
  currentUsedCredit?: number;
  /**
   * @remarks
   * The credit usage in the last 1 day.
   * 
   * @example
   * Credits consumed in the last day
   */
  dayUsedCredit?: number;
  lastTriggeredAt?: string;
  /**
   * @remarks
   * The shared credit quota in the current active period.
   * 
   * @example
   * 300
   */
  periodTotalCredit?: number;
  /**
   * @remarks
   * The shared credit usage in the current active period.
   * 
   * @example
   * 120
   */
  periodUsedCredit?: number;
  /**
   * @remarks
   * The cumulative remaining credits.
   * 
   * @example
   * Remaining credits
   */
  remainCredit?: number;
  remainCreditInfo?: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoRemainCreditInfo;
  /**
   * @remarks
   * The quota used today.
   */
  todayUsed?: string;
  /**
   * @remarks
   * The total cumulative credits.
   * 
   * @example
   * Credit quota
   */
  totalCredit?: number;
  /**
   * @remarks
   * The cumulative used quota.
   */
  totalUsed?: string;
  /**
   * @remarks
   * The cumulative credit usage.
   * 
   * @example
   * Total credits consumed
   */
  totalUsedCredit?: number;
  /**
   * @remarks
   * The alert threshold percentage (0–100).
   * 
   * @example
   * 80
   */
  warnPercent?: number;
  /**
   * @remarks
   * The credit usage in the last 1 week.
   * 
   * @example
   * Credits consumed in the last week
   */
  weekUsedCredit?: number;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      contactGroupNames: 'ContactGroupNames',
      creditTrendList: 'CreditTrendList',
      currentInstanceExpiredTime: 'CurrentInstanceExpiredTime',
      currentInstanceId: 'CurrentInstanceId',
      currentRemainCredit: 'CurrentRemainCredit',
      currentTotalCredit: 'CurrentTotalCredit',
      currentUsedCredit: 'CurrentUsedCredit',
      dayUsedCredit: 'DayUsedCredit',
      lastTriggeredAt: 'LastTriggeredAt',
      periodTotalCredit: 'PeriodTotalCredit',
      periodUsedCredit: 'PeriodUsedCredit',
      remainCredit: 'RemainCredit',
      remainCreditInfo: 'RemainCreditInfo',
      todayUsed: 'TodayUsed',
      totalCredit: 'TotalCredit',
      totalUsed: 'TotalUsed',
      totalUsedCredit: 'TotalUsedCredit',
      warnPercent: 'WarnPercent',
      weekUsedCredit: 'WeekUsedCredit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'number',
      contactGroupNames: { 'type': 'array', 'itemType': 'string' },
      creditTrendList: { 'type': 'array', 'itemType': DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList },
      currentInstanceExpiredTime: 'string',
      currentInstanceId: 'string',
      currentRemainCredit: 'number',
      currentTotalCredit: 'number',
      currentUsedCredit: 'number',
      dayUsedCredit: 'number',
      lastTriggeredAt: 'string',
      periodTotalCredit: 'number',
      periodUsedCredit: 'number',
      remainCredit: 'number',
      remainCreditInfo: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoRemainCreditInfo,
      todayUsed: 'string',
      totalCredit: 'number',
      totalUsed: 'string',
      totalUsedCredit: 'number',
      warnPercent: 'number',
      weekUsedCredit: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contactGroupNames)) {
      $dara.Model.validateArray(this.contactGroupNames);
    }
    if(Array.isArray(this.creditTrendList)) {
      $dara.Model.validateArray(this.creditTrendList);
    }
    if(this.remainCreditInfo && typeof (this.remainCreditInfo as any).validate === 'function') {
      (this.remainCreditInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditUsageInfoResponseBodyUsageInfoList extends $dara.Model {
  /**
   * @remarks
   * The usage data details.
   */
  usageInfo?: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfo;
  /**
   * @remarks
   * The usage primary key. When `UsageType=User`, this is the `aliUid`. When `UsageType=CreditPackage`, this is the credit package instance ID. When `UsageType=Agent`, this is the `AgentId`.
   * 
   * @example
   * agent-abc
   */
  usageInfoKey?: string;
  static names(): { [key: string]: string } {
    return {
      usageInfo: 'UsageInfo',
      usageInfoKey: 'UsageInfoKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageInfo: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfo,
      usageInfoKey: 'string',
    };
  }

  validate() {
    if(this.usageInfo && typeof (this.usageInfo as any).validate === 'function') {
      (this.usageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditUsageInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68BD3312-53D8-123E-BB32-1A9F25E07A03
   */
  requestId?: string;
  /**
   * @remarks
   * The array of usage data.
   */
  usageInfoList?: DescribeCreditUsageInfoResponseBodyUsageInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageInfoList: 'UsageInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageInfoList: { 'type': 'array', 'itemType': DescribeCreditUsageInfoResponseBodyUsageInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.usageInfoList)) {
      $dara.Model.validateArray(this.usageInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

