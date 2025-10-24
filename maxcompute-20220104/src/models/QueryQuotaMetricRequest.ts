// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQuotaMetricRequest extends $dara.Model {
  /**
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * os_sns_p
   */
  nickname?: string;
  /**
   * @example
   * os_sns
   */
  subQuotaNickname?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1735536322
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1735534322
   */
  startTime?: number;
  /**
   * @example
   * max
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      interval: 'interval',
      nickname: 'nickname',
      subQuotaNickname: 'subQuotaNickname',
      endTime: 'endTime',
      startTime: 'startTime',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      nickname: 'string',
      subQuotaNickname: 'string',
      endTime: 'number',
      startTime: 'number',
      strategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

