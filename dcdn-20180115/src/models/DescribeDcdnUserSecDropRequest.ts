// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserSecDropRequest extends $dara.Model {
  /**
   * @remarks
   * The date or month that you want to query.
   * 
   * *   If data is collected every day, set Data in the format of yyyymmdd, such as 20201203.
   * *   If data is collected every month, set Data in the format of yyyymm, such as 202012.
   * 
   * This parameter is required.
   * 
   * @example
   * 20201203
   */
  data?: string;
  /**
   * @remarks
   * The time interval at which data is collected.
   * 
   * *   If data is collected every day, the number of blocked packets on the specified day is calculated.
   * *   If data is collected every month, the number of blocked packets in the specified month is calculated.
   * 
   * This parameter is required.
   * 
   * @example
   * 1day
   */
  metric?: string;
  /**
   * @remarks
   * The security feature. Valid values:
   * 
   * *   waf: WAF
   * *   tmd: rate limiting
   * *   robot: bot traffic recognition
   * *   l4_dm_drop: domain name blocking at Layer 4
   * 
   * This parameter is required.
   * 
   * @example
   * waf
   */
  secFunc?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metric: 'Metric',
      secFunc: 'SecFunc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      metric: 'string',
      secFunc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

