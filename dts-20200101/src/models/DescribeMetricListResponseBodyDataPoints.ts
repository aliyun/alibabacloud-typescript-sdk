// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListResponseBodyDataPoints extends $dara.Model {
  /**
   * @remarks
   * The statistical value.
   * 
   * @example
   * 15.25
   */
  statistics?: number;
  /**
   * @remarks
   * The timestamp of the record. Unit: milliseconds.
   * 
   * @example
   * 1650872310000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

