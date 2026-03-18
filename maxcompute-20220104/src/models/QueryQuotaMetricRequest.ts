// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQuotaMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The fixed interval in seconds. If you leave this parameter empty, the system uses an automatic interval policy.
   * 
   * - Automatic interval policy: The interval is 60 seconds for a time range within 6 hours, 300 seconds for a time range within 24 hours, 900 seconds for a time range within 72 hours, and 1,800 seconds for a time range longer than 72 hours.
   * 
   * - Specified interval: Valid values are 60, 300, and 900. The query time range must be within 72 hours.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The nickname of the level-1 quota. This parameter is required.
   * 
   * @example
   * os_sns_p
   */
  nickname?: string;
  subMetric?: string;
  /**
   * @remarks
   * The nickname of the level-2 quota.
   * 
   * @example
   * os_sns
   */
  subQuotaNickname?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735536322
   */
  endTime?: number;
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735534322
   */
  startTime?: number;
  /**
   * @remarks
   * The aggregation strategy for the data. The default value is max. Valid values: max and avg.
   * 
   * Data is collected at one-minute intervals. If you query a long time range, the system may use an interval longer than one minute and aggregate the data. This parameter specifies how the data is aggregated.
   * 
   * @example
   * max
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      interval: 'interval',
      nickname: 'nickname',
      subMetric: 'subMetric',
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
      subMetric: 'string',
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

