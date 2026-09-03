// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSessionStatisticResponseBodyStatistic extends $dara.Model {
  /**
   * @remarks
   * The total number of sessions within the interval.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The time point. UNIX timestamp, in milliseconds.
   * 
   * @example
   * 1690164443508
   */
  timePoint?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5528624-C6ED-5CA4-A4A2-7C30DBF2****
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics information.
   */
  statistic?: DescribeSessionStatisticResponseBodyStatistic[];
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: { 'type': 'array', 'itemType': DescribeSessionStatisticResponseBodyStatistic },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statistic)) {
      $dara.Model.validateArray(this.statistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

