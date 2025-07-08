// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricLastResponseBodyMetricTotalModelMetricModelListDataPoints extends $dara.Model {
  /**
   * @example
   * 99.52
   */
  average?: number;
  /**
   * @example
   * 100
   */
  maximum?: number;
  /**
   * @example
   * 93.1
   */
  minimum?: number;
  /**
   * @example
   * 1548777660000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      maximum: 'Maximum',
      minimum: 'Minimum',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      maximum: 'number',
      minimum: 'number',
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

