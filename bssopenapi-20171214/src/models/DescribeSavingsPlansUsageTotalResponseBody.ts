// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSavingsPlansUsageTotalResponseBodyDataPeriodCoverage extends $dara.Model {
  /**
   * @remarks
   * The usage.
   * 
   * @example
   * 1
   */
  percentage?: number;
  /**
   * @remarks
   * The period.
   * 
   * The value is in the format of yyyyMMddHH.
   * 
   * @example
   * 2021041500
   */
  period?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      period: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBodyDataTotalUsage extends $dara.Model {
  /**
   * @remarks
   * The total amount of the savings plan.
   * 
   * @example
   * 100
   */
  poolValue?: number;
  /**
   * @remarks
   * The pay-as-you-go cost.
   * 
   * @example
   * 200
   */
  postpaidCost?: number;
  /**
   * @remarks
   * The amount that is saved.
   * 
   * @example
   * 100
   */
  savedCost?: number;
  /**
   * @remarks
   * The total usage.
   * 
   * @example
   * 1
   */
  usagePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      poolValue: 'PoolValue',
      postpaidCost: 'PostpaidCost',
      savedCost: 'SavedCost',
      usagePercentage: 'UsagePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolValue: 'number',
      postpaidCost: 'number',
      savedCost: 'number',
      usagePercentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The usage in different periods.
   */
  periodCoverage?: DescribeSavingsPlansUsageTotalResponseBodyDataPeriodCoverage[];
  /**
   * @remarks
   * The usage summary.
   */
  totalUsage?: DescribeSavingsPlansUsageTotalResponseBodyDataTotalUsage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalUsage: 'TotalUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeSavingsPlansUsageTotalResponseBodyDataPeriodCoverage },
      totalUsage: DescribeSavingsPlansUsageTotalResponseBodyDataTotalUsage,
    };
  }

  validate() {
    if(Array.isArray(this.periodCoverage)) {
      $dara.Model.validateArray(this.periodCoverage);
    }
    if(this.totalUsage && typeof (this.totalUsage as any).validate === 'function') {
      (this.totalUsage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return data.
   */
  data?: DescribeSavingsPlansUsageTotalResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSavingsPlansUsageTotalResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

