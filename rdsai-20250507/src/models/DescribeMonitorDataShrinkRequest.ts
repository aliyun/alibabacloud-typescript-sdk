// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorDataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The API key name.
   */
  apiKeyNameShrink?: string;
  /**
   * @remarks
   * The end time. Format: Timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627269085
   */
  endTime?: number;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @remarks
   * The statistical period. Default value: 15s.
   * 
   * @example
   * 15
   */
  interval?: number;
  /**
   * @remarks
   * The metric to query.
   * 
   * - pv
   * - uv
   * 
   * - qps
   * 
   * - success_rate
   * 
   * - rt
   * 
   * - rate_limited_count
   * 
   * - tpm
   * 
   * - cache
   * 
   * This parameter is required.
   * 
   * @example
   * ● pv
   */
  metric?: string;
  /**
   * @remarks
   * The start time. Format: Timestamp.
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

