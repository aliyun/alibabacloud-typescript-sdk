// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSessionStatisticResponseBodyStatistic extends $dara.Model {
  /**
   * @remarks
   * The total number of sessions in the time range.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The point in time.
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

