// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
  /**
   * @example
   * 1600822800000
   */
  timestamp?: number;
  /**
   * @example
   * 42.38
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

