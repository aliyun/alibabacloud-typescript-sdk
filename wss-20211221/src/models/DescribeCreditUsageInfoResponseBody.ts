// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList extends $dara.Model {
  /**
   * @example
   * 2026-05-02 10
   */
  timePoint?: string;
  /**
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
  creditTrendList?: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfoCreditTrendList[];
  /**
   * @example
   * cp-inst-001
   */
  currentInstanceId?: string;
  currentRemainCredit?: number;
  currentTotalCredit?: number;
  currentUsedCredit?: number;
  dayUsedCredit?: number;
  /**
   * @example
   * 300
   */
  periodTotalCredit?: number;
  /**
   * @example
   * 120
   */
  periodUsedCredit?: number;
  remainCredit?: number;
  totalCredit?: number;
  totalUsedCredit?: number;
  /**
   * @example
   * 80
   */
  warnPercent?: number;
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
      totalCredit: 'TotalCredit',
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
      totalCredit: 'number',
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
  usageInfo?: DescribeCreditUsageInfoResponseBodyUsageInfoListUsageInfo;
  /**
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
   * @example
   * 68BD3312-53D8-123E-BB32-1A9F25E07A03
   */
  requestId?: string;
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

