// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQuotaMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The fixed interval in seconds. By default, this parameter is empty, which indicates that the adaptive interval policy of the system is used.
   * - Adaptive interval policy: The interval is 60 seconds if the query time range is within 6 hours, 300 seconds if within 24 hours, 900 seconds if within 72 hours, and 1800 seconds if exceeding 72 hours.
   * - Specified interval: Only 60, 300, and 900 are supported. The query time range must be within 72 hours.
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
   * The end time of the query time range. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735536322
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the query time range. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735534322
   */
  startTime?: number;
  /**
   * @remarks
   * The data aggregation policy. Default value: max. Valid values: max and avg.
   * 
   * Data is collected every 1 minute. If the query time range is large, the adaptive step size for data display exceeds 1 minute, and the metrics are aggregated. This parameter specifies the data aggregation logic.
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

