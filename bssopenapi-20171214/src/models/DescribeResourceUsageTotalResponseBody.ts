// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceUsageTotalResponseBodyDataPeriodCoverage extends $dara.Model {
  /**
   * @remarks
   * The period.
   * 
   * @example
   * 2021071500
   */
  period?: string;
  /**
   * @remarks
   * The usage of resource plans.
   * 
   * @example
   * 0.1
   */
  usagePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      usagePercentage: 'UsagePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'string',
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

export class DescribeResourceUsageTotalResponseBodyDataTotalUsage extends $dara.Model {
  /**
   * @remarks
   * The total costs of pay-as-you-go instances.
   * 
   * @example
   * 200
   */
  postpaidCost?: number;
  /**
   * @remarks
   * The total potential savings.
   * 
   * @example
   * 100
   */
  potentialSavedCost?: number;
  /**
   * @remarks
   * The fee of purchased resource plans.
   * 
   * @example
   * 10
   */
  reservationCost?: number;
  /**
   * @remarks
   * The total savings.
   * 
   * @example
   * 100
   */
  savedCost?: number;
  /**
   * @remarks
   * The total usage of resource plans.
   * 
   * @example
   * 1
   */
  usagePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      postpaidCost: 'PostpaidCost',
      potentialSavedCost: 'PotentialSavedCost',
      reservationCost: 'ReservationCost',
      savedCost: 'SavedCost',
      usagePercentage: 'UsagePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postpaidCost: 'number',
      potentialSavedCost: 'number',
      reservationCost: 'number',
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

export class DescribeResourceUsageTotalResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The usage of resource plans in the specified period.
   */
  periodCoverage?: DescribeResourceUsageTotalResponseBodyDataPeriodCoverage[];
  /**
   * @remarks
   * The total usage of resource plans.
   */
  totalUsage?: DescribeResourceUsageTotalResponseBodyDataTotalUsage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalUsage: 'TotalUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeResourceUsageTotalResponseBodyDataPeriodCoverage },
      totalUsage: DescribeResourceUsageTotalResponseBodyDataTotalUsage,
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

export class DescribeResourceUsageTotalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The queried data.
   */
  data?: DescribeResourceUsageTotalResponseBodyData;
  /**
   * @remarks
   * The returned message. If the request was successful, a success message is returned. If the request failed, an error message is returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 364C7C81-5E5E-51A0-B738-1969D2671B05
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
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
      data: DescribeResourceUsageTotalResponseBodyData,
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

