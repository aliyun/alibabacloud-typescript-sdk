// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceCoverageTotalResponseBodyDataPeriodCoverage extends $dara.Model {
  /**
   * @remarks
   * The coverage rate of deduction plans within the specified period.
   * 
   * @example
   * 0.1
   */
  coveragePercentage?: number;
  /**
   * @remarks
   * The period.
   * 
   * The value is in the format of yyyyMMddHH.
   * 
   * @example
   * 2020110100
   */
  period?: string;
  static names(): { [key: string]: string } {
    return {
      coveragePercentage: 'CoveragePercentage',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coveragePercentage: 'number',
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

export class DescribeResourceCoverageTotalResponseBodyDataTotalCoverage extends $dara.Model {
  /**
   * @remarks
   * The unit that is used to measure the resources deducted from deduction plans.
   */
  capacityUnit?: string;
  /**
   * @remarks
   * The total coverage rate of deduction plans.
   * 
   * @example
   * 1
   */
  coveragePercentage?: number;
  /**
   * @remarks
   * The total amount of the resources deducted from deduction plans.
   * 
   * @example
   * 1
   */
  deductQuantity?: number;
  /**
   * @remarks
   * The total amount of resources consumed.
   * 
   * @example
   * 1
   */
  totalQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      coveragePercentage: 'CoveragePercentage',
      deductQuantity: 'DeductQuantity',
      totalQuantity: 'TotalQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: 'string',
      coveragePercentage: 'number',
      deductQuantity: 'number',
      totalQuantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the coverage rate of deduction plans within a period.
   */
  periodCoverage?: DescribeResourceCoverageTotalResponseBodyDataPeriodCoverage[];
  /**
   * @remarks
   * The information about the total coverage data of deduction plans.
   */
  totalCoverage?: DescribeResourceCoverageTotalResponseBodyDataTotalCoverage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalCoverage: 'TotalCoverage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeResourceCoverageTotalResponseBodyDataPeriodCoverage },
      totalCoverage: DescribeResourceCoverageTotalResponseBodyDataTotalCoverage,
    };
  }

  validate() {
    if(Array.isArray(this.periodCoverage)) {
      $dara.Model.validateArray(this.periodCoverage);
    }
    if(this.totalCoverage && typeof (this.totalCoverage as any).validate === 'function') {
      (this.totalCoverage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: DescribeResourceCoverageTotalResponseBodyData;
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
      data: DescribeResourceCoverageTotalResponseBodyData,
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

