// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSavingsPlansCoverageTotalResponseBodyDataPeriodCoverage extends $dara.Model {
  /**
   * @remarks
   * The coverage.
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
   * 2021071500
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

export class DescribeSavingsPlansCoverageTotalResponseBodyDataTotalCoverage extends $dara.Model {
  /**
   * @remarks
   * The total coverage.
   * 
   * @example
   * 1
   */
  coveragePercentage?: number;
  /**
   * @remarks
   * The total deducted amount.
   * 
   * @example
   * 100
   */
  deductAmount?: number;
  static names(): { [key: string]: string } {
    return {
      coveragePercentage: 'CoveragePercentage',
      deductAmount: 'DeductAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coveragePercentage: 'number',
      deductAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The coverage in different periods.
   */
  periodCoverage?: DescribeSavingsPlansCoverageTotalResponseBodyDataPeriodCoverage[];
  /**
   * @remarks
   * The coverage summary.
   */
  totalCoverage?: DescribeSavingsPlansCoverageTotalResponseBodyDataTotalCoverage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalCoverage: 'TotalCoverage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeSavingsPlansCoverageTotalResponseBodyDataPeriodCoverage },
      totalCoverage: DescribeSavingsPlansCoverageTotalResponseBodyDataTotalCoverage,
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

export class DescribeSavingsPlansCoverageTotalResponseBody extends $dara.Model {
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
  data?: DescribeSavingsPlansCoverageTotalResponseBodyData;
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
      data: DescribeSavingsPlansCoverageTotalResponseBodyData,
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

