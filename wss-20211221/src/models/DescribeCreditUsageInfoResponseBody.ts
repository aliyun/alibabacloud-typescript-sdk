// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList extends $dara.Model {
  /**
   * @remarks
   * The time point in the `yyyy-MM-dd HH` format, accurate to the hour.
   * 
   * @example
   * 2026-05-02 10
   */
  timePoint?: string;
  /**
   * @remarks
   * The number of credits consumed in the hour.
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
  /**
   * @remarks
   * The number of instances being deducted.
   * 
   * @example
   * 23
   */
  deductingAmount?: number;
  /**
   * @remarks
   * The number of instances pending to take effect.
   * 
   * @example
   * 24
   */
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
  /**
   * @remarks
   * The number of currently available instances for the reported resources.
   * 
   * @example
   * 9976.00
   */
  availableAmount?: number;
  /**
   * @remarks
   * The list of contact group names.
   */
  contactGroupNames?: string[];
  /**
   * @remarks
   * The hourly consumption samples of the current credit package.
   */
  creditTrendList?: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList[];
  /**
   * @remarks
   * The time when the current instance expires, in the `YYYY-MM-DD HH:mm:ss` format.
   * 
   * @example
   * 2026-12-02 00:00:00
   */
  currentInstanceExpiredTime?: string;
  /**
   * @remarks
   * The instance ID of the currently active credit package.
   * 
   * @example
   * cp-inst-001
   */
  currentInstanceId?: string;
  /**
   * @remarks
   * The remaining amount of the currently active credit package.
   * 
   * @example
   * Remaining credits for the current period
   */
  currentRemainCredit?: number;
  /**
   * @remarks
   * The total amount of the currently active credit package.
   * 
   * @example
   * Credit quota for the current period
   */
  currentTotalCredit?: number;
  /**
   * @remarks
   * The used amount of the currently active credit package.
   * 
   * @example
   * Credits consumed in the current period
   */
  currentUsedCredit?: number;
  /**
   * @remarks
   * The credit usage in the last day.
   * 
   * @example
   * Credits consumed in the last day
   */
  dayUsedCredit?: number;
  /**
   * @remarks
   * The last trigger time.
   * 
   * @example
   * 2026-05-02 10:10:10
   */
  lastTriggeredAt?: string;
  /**
   * @remarks
   * The credit quota for the current period.
   * 
   * @example
   * 2000
   */
  periodCreditQuota?: number;
  /**
   * @remarks
   * The pay-as-you-go credits consumed in the current period.
   * 
   * @example
   * 240
   */
  periodPayGoUsedCredit?: number;
  /**
   * @remarks
   * The shared credits consumed in the current period.
   * 
   * @example
   * 120
   */
  periodSharedUsedCredit?: number;
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
   * The total credits consumed in the current period.
   * 
   * @example
   * 360
   */
  periodTotalUsedCredit?: number;
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
   * The cumulative remaining billable credits.
   * 
   * @example
   * Remaining credits
   */
  remainCredit?: number;
  /**
   * @remarks
   * The remaining credit information.
   */
  remainCreditInfo?: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoRemainCreditInfo;
  /**
   * @remarks
   * The used quota for today.
   * 
   * @example
   * 200
   */
  todayUsed?: string;
  /**
   * @remarks
   * The cumulative total credits.
   * 
   * @example
   * Credit quota
   */
  totalCredit?: number;
  /**
   * @remarks
   * The cumulative used quota.
   * 
   * @example
   * 100
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
   * The alert threshold percentage, ranging from 0 to 100.
   * 
   * @example
   * 80
   */
  warnPercent?: number;
  /**
   * @remarks
   * The credit usage in the last week.
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
      periodCreditQuota: 'PeriodCreditQuota',
      periodPayGoUsedCredit: 'PeriodPayGoUsedCredit',
      periodSharedUsedCredit: 'PeriodSharedUsedCredit',
      periodTotalCredit: 'PeriodTotalCredit',
      periodTotalUsedCredit: 'PeriodTotalUsedCredit',
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
      periodCreditQuota: 'number',
      periodPayGoUsedCredit: 'number',
      periodSharedUsedCredit: 'number',
      periodTotalCredit: 'number',
      periodTotalUsedCredit: 'number',
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
   * The primary key for usage. The value is `aliUid` when `UsageType` is `User`, the credit package instance ID when `UsageType` is `CreditPackage`, and the agent ID when `UsageType` is `Agent`.
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
   * The business data array.
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

