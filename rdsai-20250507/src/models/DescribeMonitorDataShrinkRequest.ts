// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorDataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The names of the API keys to use for filtering the data. If this parameter is not specified, data from all keys is returned.
   */
  apiKeyNameShrink?: string;
  /**
   * @remarks
   * The end of the query time range, specified as a Unix timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627269085
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @remarks
   * The aggregation interval for monitoring data, in seconds. Default: 15.
   * 
   * @example
   * 15
   */
  interval?: number;
  /**
   * @remarks
   * The metric to query. Valid values:
   * 
   * - `pv`
   * 
   * - `uv`
   * 
   * - `qps`
   * 
   * - `success_rate`
   * 
   * - `rt`
   * 
   * - `rate_limited_count`
   * 
   * This parameter is required.
   * 
   * @example
   * ● pv
   */
  metric?: string;
  /**
   * @remarks
   * The start of the query time range, specified as a Unix timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeyNameShrink: 'ApiKeyName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      metric: 'Metric',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyNameShrink: 'string',
      endTime: 'number',
      instanceId: 'string',
      interval: 'number',
      metric: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

