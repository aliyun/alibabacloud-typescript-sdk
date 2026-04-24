// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorDataShrinkRequest extends $dara.Model {
  apiKeyNameShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1627269085
   */
  endTime?: number;
  /**
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @example
   * 15
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ● pv
   */
  metric?: string;
  /**
   * @remarks
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

