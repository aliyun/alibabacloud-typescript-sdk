// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUnionTaskRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  channelId?: string;
  /**
   * @example
   * 1
   */
  chargePloy?: number;
  /**
   * @example
   * 2024-02-28 12:00:00
   */
  endTime?: string;
  /**
   * @example
   * 0
   */
  optimizationSwitch?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  proxyUserId?: number;
  /**
   * @example
   * 20000
   */
  quota?: number;
  /**
   * @example
   * 7200
   */
  quotaDay?: number;
  /**
   * @example
   * 2024-01-30 12:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1687154040871094
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      chargePloy: 'ChargePloy',
      endTime: 'EndTime',
      optimizationSwitch: 'OptimizationSwitch',
      proxyUserId: 'ProxyUserId',
      quota: 'Quota',
      quotaDay: 'QuotaDay',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      chargePloy: 'number',
      endTime: 'string',
      optimizationSwitch: 'number',
      proxyUserId: 'number',
      quota: 'number',
      quotaDay: 'number',
      startTime: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

