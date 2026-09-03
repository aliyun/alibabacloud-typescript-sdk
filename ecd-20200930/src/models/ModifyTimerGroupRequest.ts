// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTimerGroupRequestConfigTimersSegmentTimers extends $dara.Model {
  /**
   * @remarks
   * The appointment timer for executing scheduled tasks at specified time points.
   * 
   * @example
   * 1764660600967
   */
  appointmentTimer?: number;
  /**
   * @remarks
   * Specifies whether to create a snapshot.
   */
  createSnapshot?: boolean;
  /**
   * @remarks
   * The cron expression for the end time of the scheduled task.
   * 
   * @example
   * 0 0 18 ? * 1-5
   */
  endCronExpression?: string;
  /**
   * @remarks
   * Specifies whether to forcefully execute the task. If this parameter is set to true, the scheduled task is forcefully executed regardless of the cloud desktop and connection status.
   */
  enforce?: boolean;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @remarks
   * The time interval. Unit: minutes.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The list of IP CIDR blocks that take effect.
   */
  ipSegments?: string[];
  /**
   * @remarks
   * The duration of inactivity before the screen is locked for the no-operation lock screen feature. Unit: minutes. Only AD-joined cloud desktops are supported.
   * 
   * @example
   * 5
   */
  lockScreenTime?: number;
  /**
   * @remarks
   * The advance notification time before the scheduled task is executed. Unit: seconds.
   * 
   * @example
   * 300
   */
  notificationTime?: number;
  /**
   * @remarks
   * The operation type of the scheduled task. Currently, only disconnect scheduled tasks support this parameter.
   * 
   * @example
   * Shutdown
   */
  operationType?: string;
  /**
   * @remarks
   * The process whitelist for intelligent detection of no-operation scheduled tasks. If a specified process is running, the no-operation scheduled task is not triggered.
   */
  processWhitelist?: string[];
  /**
   * @remarks
   * The reset type, which determines whether to reset and the scope of cloud disks to reset.
   * 
   * @example
   * 1
   */
  resetType?: string;
  /**
   * @remarks
   * The cron expression for the start time of the scheduled task.
   * 
   * @example
   * 0 0 8 ? * 1-5
   */
  startCronExpression?: string;
  /**
   * @remarks
   * The execution order number of the timer.
   * 
   * @example
   * 1
   */
  timerOrder?: number;
  /**
   * @remarks
   * The time zone used by the scheduled task.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The trigger configuration type for no-operation scheduled tasks.
   * 
   * @example
   * Standard
   */
  triggerType?: string;
  /**
   * @remarks
   * The advance notification time before verification is executed. Unit: seconds.
   * 
   * @example
   * 300
   */
  verificationNotificationTime?: number;
  /**
   * @remarks
   * The verification wait duration. Unit: seconds.
   * 
   * @example
   * 600
   */
  verificationTime?: number;
  static names(): { [key: string]: string } {
    return {
      appointmentTimer: 'AppointmentTimer',
      createSnapshot: 'CreateSnapshot',
      endCronExpression: 'EndCronExpression',
      enforce: 'Enforce',
      imageId: 'ImageId',
      interval: 'Interval',
      ipSegments: 'IpSegments',
      lockScreenTime: 'LockScreenTime',
      notificationTime: 'NotificationTime',
      operationType: 'OperationType',
      processWhitelist: 'ProcessWhitelist',
      resetType: 'ResetType',
      startCronExpression: 'StartCronExpression',
      timerOrder: 'TimerOrder',
      timezone: 'Timezone',
      triggerType: 'TriggerType',
      verificationNotificationTime: 'VerificationNotificationTime',
      verificationTime: 'VerificationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentTimer: 'number',
      createSnapshot: 'boolean',
      endCronExpression: 'string',
      enforce: 'boolean',
      imageId: 'string',
      interval: 'number',
      ipSegments: { 'type': 'array', 'itemType': 'string' },
      lockScreenTime: 'number',
      notificationTime: 'number',
      operationType: 'string',
      processWhitelist: { 'type': 'array', 'itemType': 'string' },
      resetType: 'string',
      startCronExpression: 'string',
      timerOrder: 'number',
      timezone: 'string',
      triggerType: 'string',
      verificationNotificationTime: 'number',
      verificationTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipSegments)) {
      $dara.Model.validateArray(this.ipSegments);
    }
    if(Array.isArray(this.processWhitelist)) {
      $dara.Model.validateArray(this.processWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTimerGroupRequestConfigTimers extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow end users to configure scheduled tasks on their own.
   * 
   * @example
   * true
   */
  allowClientSetting?: boolean;
  /**
   * @remarks
   * The cron expression of the scheduled task.
   * 
   * > Specify the time in UTC. For example, to schedule a task at 00:00 (UTC+8) every day, set this parameter to 0 0 16 ? * 1,2,3,4,5,6,7.
   * 
   * @example
   * 0 0 16 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to forcefully execute the task. If this parameter is set to true, the scheduled task is forcefully executed regardless of the cloud desktop and connection status.
   * 
   * @example
   * false
   */
  enforce?: boolean;
  /**
   * @remarks
   * The time interval. Unit: minutes.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The advance notification time before the scheduled task is executed. Unit: seconds.
   * 
   * @example
   * 300
   */
  notificationTime?: number;
  /**
   * @remarks
   * The operation type of the scheduled task. Currently, only disconnect scheduled tasks support this parameter.
   * 
   * @example
   * Shutdown
   */
  operationType?: string;
  /**
   * @remarks
   * The process whitelist for intelligent detection of no-operation scheduled tasks. If a specified process is running, the no-operation scheduled task is not triggered.
   */
  processWhitelist?: string[];
  /**
   * @remarks
   * The reset type, which determines whether to reset and the scope of cloud disks to reset.
   * 
   * @example
   * RESET_TYPE_SYSTEM
   */
  resetType?: string;
  /**
   * @remarks
   * The list of segment timer configurations.
   */
  segmentTimers?: ModifyTimerGroupRequestConfigTimersSegmentTimers[];
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * @example
   * TimerBoot
   */
  timerType?: string;
  /**
   * @remarks
   * The trigger configuration type for no-operation scheduled tasks.
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
      segmentTimers: { 'type': 'array', 'itemType': ModifyTimerGroupRequestConfigTimersSegmentTimers },
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

export class ModifyTimerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration information of scheduled tasks.
   */
  configTimers?: ModifyTimerGroupRequestConfigTimers[];
  /**
   * @remarks
   * The description of the configuration group.
   * 
   * @example
   * ScheduledTask
   */
  description?: string;
  /**
   * @remarks
   * The configuration group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the configuration group.
   * 
   * @example
   * ScheduledTask
   */
  name?: string;
  /**
   * @remarks
   * The region ID. This feature is not region-specific. Set this parameter to `cn-shanghai`.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configTimers: 'ConfigTimers',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTimers: { 'type': 'array', 'itemType': ModifyTimerGroupRequestConfigTimers },
      description: 'string',
      groupId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configTimers)) {
      $dara.Model.validateArray(this.configTimers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

