// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList extends $dara.Model {
  /**
   * @remarks
   * The time point in the format of `yyyy-MM-dd HH` (accurate to the hour).
   * 
   * @example
   * 2026-05-02 10
   */
  timePoint?: string;
  /**
   * @remarks
   * The number of credits consumed during the hour.
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

export class DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfo extends $dara.Model {
  /**
   * @remarks
   * The hourly consumption samples of the current credit package.
   */
  creditTrendList?: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList[];
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
   * 当前周期积分余量
   */
  currentRemainCredit?: number;
  /**
   * @remarks
   * The total credits of the current active credit package.
   * 
   * @example
   * 当前周期积分配额
   */
  currentTotalCredit?: number;
  /**
   * @remarks
   * The used credits of the current active credit package.
   * 
   * @example
   * 当前周期积分消耗
   */
  currentUsedCredit?: number;
  /**
   * @remarks
   * The credit usage in the last 1 day.
   * 
   * @example
   * 最近一天消耗积分
   */
  dayUsedCredit?: number;
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
   * 积分余量
   */
  remainCredit?: number;
  todayUsed?: string;
  /**
   * @remarks
   * The cumulative total credits.
   * 
   * @example
   * 积分配额
   */
  totalCredit?: number;
  totalUsed?: string;
  /**
   * @remarks
   * The cumulative credit usage.
   * 
   * @example
   * 共计消耗积分
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
   * 最近一周消耗积分
   */
  weekUsedCredit?: number;
  static names(): { [key: string]: string } {
    return {
      creditTrendList: 'CreditTrendList',
      currentInstanceId: 'CurrentInstanceId',
      currentRemainCredit: 'CurrentRemainCredit',
      currentTotalCredit: 'CurrentTotalCredit',
      currentUsedCredit: 'CurrentUsedCredit',
      dayUsedCredit: 'DayUsedCredit',
      periodTotalCredit: 'PeriodTotalCredit',
      periodUsedCredit: 'PeriodUsedCredit',
      remainCredit: 'RemainCredit',
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
      creditTrendList: { 'type': 'array', 'itemType': DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList },
      currentInstanceId: 'string',
      currentRemainCredit: 'number',
      currentTotalCredit: 'number',
      currentUsedCredit: 'number',
      dayUsedCredit: 'number',
      periodTotalCredit: 'number',
      periodUsedCredit: 'number',
      remainCredit: 'number',
      todayUsed: 'string',
      totalCredit: 'number',
      totalUsed: 'string',
      totalUsedCredit: 'number',
      warnPercent: 'number',
      weekUsedCredit: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.creditTrendList)) {
      $dara.Model.validateArray(this.creditTrendList);
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

