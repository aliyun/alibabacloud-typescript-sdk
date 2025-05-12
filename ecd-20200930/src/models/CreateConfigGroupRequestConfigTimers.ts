// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigGroupRequestConfigTimers extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow end users to configure the scheduled task.
   * 
   * @example
   * true
   */
  allowClientSetting?: boolean;
  /**
   * @remarks
   * The cron expression specified in the scheduled task.
   * 
   * >  The time must be in UTC. For example, for 24:00 (UTC+8), you must set the value to 0 0 16 ? \\* 1,2,3,4,5,6,7
   * 
   * @example
   * 0 0 16 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to forcefully execute the scheduled task.
   * 
   * @example
   * true
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
   * The type of the scheduled operation. If you set TimerType to NoConnect, you can specify this parameter.
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
   * The process whitelist. If whitelisted processes are running, the scheduled task does not take effect.
   */
  processWhitelist?: string[];
  /**
   * @remarks
   * The reset option.
   * 
   * Valid values:
   * 
   * *   RESET_TYPE_SYSTEM: resets only the system disk.
   * *   RESET_TYPE_USER_DISK: resets only the data disk.
   * *   RESET_TYPE_BOTH: resets the system and data disks.
   * 
   * @example
   * RESET_TYPE_SYSTEM
   */
  resetType?: string;
  /**
   * @remarks
   * The scheduled task type.
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
   * This parameter is required.
   * 
   * @example
   * TIMER_BOOT
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
      timerType: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processWhitelist)) {
      $dara.Model.validateArray(this.processWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

