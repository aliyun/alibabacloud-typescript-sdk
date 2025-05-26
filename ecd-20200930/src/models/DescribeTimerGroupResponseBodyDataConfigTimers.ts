// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTimerGroupResponseBodyDataConfigTimersSegmentTimers } from "./DescribeTimerGroupResponseBodyDataConfigTimersSegmentTimers";


export class DescribeTimerGroupResponseBodyDataConfigTimers extends $dara.Model {
  /**
   * @remarks
   * Indicates whether end users can configure scheduled tasks.
   * 
   * @example
   * true
   */
  allowClientSetting?: boolean;
  /**
   * @remarks
   * The CRON expression for the scheduled task.
   * 
   * @example
   * 0 0 16 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to forcibly execute the scheduled task. A value of true specifies the scheduled task will run forcefully, ignoring the cloud computer and connection status.
   * 
   * @example
   * false
   */
  enforce?: boolean;
  /**
   * @remarks
   * The interval at which the scheduled task is executed. Unit: minutes.
   * 
   * @example
   * 10
   */
  interval?: number;
  notificationTime?: number;
  /**
   * @remarks
   * The type of the scheduled disconnection task.
   * 
   * Valid values:
   * 
   * *   Hibernate: scheduled hibernation.
   * *   Shutdown: scheduled shutdown.
   * 
   * @example
   * Shutdown
   */
  operationType?: string;
  /**
   * @remarks
   * The process whitelist. If whitelisted processes are running, the scheduled task upon inactivity does not take effect.
   */
  processWhitelist?: string[];
  /**
   * @remarks
   * The reset operation of the scheduled task.
   * 
   * Valid values:
   * 
   * *   RESET_TYPE_SYSTEM: resets the system disk.
   * *   RESET_TYPE_USER_DISK: resets the data disk.
   * *   RESET_TYPE_BOTH: resets the system disk and data disk.
   * 
   * @example
   * RESET_TYPE_SYSTEM
   */
  resetType?: string;
  segmentTimers?: DescribeTimerGroupResponseBodyDataConfigTimersSegmentTimers[];
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * Valid values:
   * 
   * *   NoOperationDisconnect: scheduled disconnection upon inactivity.
   * *   NoConnect: scheduled disconnection upon specified operation (OperationType).
   * *   TimerBoot: scheduled start.
   * *   TimerReset: scheduled reset.
   * *   NoOperationShutdown: scheduled shutdown upon inactivity.
   * *   NoOperationHibernate: scheduled hibernation upon inactivity.
   * *   TimerShutdown: scheduled shutdown.
   * *   NoOperationReboot: scheduled restart upon inactivity.
   * *   TimerReboot: scheduled restart.
   * 
   * @example
   * TimerBoot
   */
  timerType?: string;
  /**
   * @remarks
   * The method to trigger the scheduled task upon inactivity.
   * 
   * Valid values:
   * 
   * *   Advanced: intelligent detection.
   * *   Standard: standard detection.
   * 
   * @example
   * Standard
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      allowClientSetting: 'AllowClientSetting',
      cronExpression: 'CronExpression',
      enforce: 'Enforce',
      interval: 'Interval',
      notificationTime: 'NotificationTime',
      operationType: 'OperationType',
      processWhitelist: 'ProcessWhitelist',
      resetType: 'ResetType',
      segmentTimers: 'SegmentTimers',
      timerType: 'TimerType',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowClientSetting: 'boolean',
      cronExpression: 'string',
      enforce: 'boolean',
      interval: 'number',
      notificationTime: 'number',
      operationType: 'string',
      processWhitelist: { 'type': 'array', 'itemType': 'string' },
      resetType: 'string',
      segmentTimers: { 'type': 'array', 'itemType': DescribeTimerGroupResponseBodyDataConfigTimersSegmentTimers },
      timerType: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processWhitelist)) {
      $dara.Model.validateArray(this.processWhitelist);
    }
    if(Array.isArray(this.segmentTimers)) {
      $dara.Model.validateArray(this.segmentTimers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

