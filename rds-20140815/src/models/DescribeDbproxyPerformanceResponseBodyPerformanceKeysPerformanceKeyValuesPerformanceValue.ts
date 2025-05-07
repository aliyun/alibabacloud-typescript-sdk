// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue extends $dara.Model {
  /**
   * @remarks
   * The date and time when the value of the performance metric was recorded. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-10-10T09:00:00Z
   */
  date?: string;
  /**
   * @remarks
   * The value of the performance metric.
   * 
   * @example
   * 2.83
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
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

