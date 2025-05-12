// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopsShrinkRequestDesktopTimers extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the end user to configure the scheduled task.
   * 
   * @example
   * true
   */
  allowClientSetting?: boolean;
  /**
   * @remarks
   * The cron expression for the scheduled task.
   * 
   * >  The time must be in UTC. For example, for 24:00 (UTC+8), you must set the value to 0 0 16 ? \\* 1,2,3,4,5,6,7
   * 
   * @example
   * 0 40 7 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to forcibly execute the scheduled task.
   * 
   * Valid values:
   * 
   * *   true: forcibly executes the scheduled task regardless of the status and connection of the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false: does not forcibly execute the scheduled task.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * True
   */
  enforce?: boolean;
  /**
   * @remarks
   * The interval at which cloud computers are created. Unit: minutes.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The operations that scheduled tasks support. This parameter is valid only when TimerType is set to NoConnect.
   * 
   * Valid values:
   * 
   * *   Hibernate: hibernates the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Shutdown: stops the cloud computers.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Shutdown
   */
  operationType?: string;
  /**
   * @remarks
   * The reset type of the cloud computers.
   * 
   * Valid values:
   * 
   * *   RESET_TYPE_SYSTEM: resets the system disks.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   RESET_TYPE_BOTH: resets the system disks and data disks.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * RESET_TYPE_SYSTEM
   */
  resetType?: string;
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * @example
   * NoOperationReboot
   */
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      allowClientSetting: 'AllowClientSetting',
      cronExpression: 'CronExpression',
      enforce: 'Enforce',
      interval: 'Interval',
      operationType: 'OperationType',
      resetType: 'ResetType',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowClientSetting: 'boolean',
      cronExpression: 'string',
      enforce: 'boolean',
      interval: 'number',
      operationType: 'string',
      resetType: 'string',
      timerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

