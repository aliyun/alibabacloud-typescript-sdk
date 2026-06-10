// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTimerGroupRequestConfigTimersSegmentTimers extends $dara.Model {
  /**
   * @remarks
   * Timestamp for scheduled task execution. The task runs at the specified time.
   * 
   * @example
   * 1764660600967
   */
  appointmentTimer?: number;
  endCronExpression?: string;
  enforce?: boolean;
  /**
   * @remarks
   * Image ID for image-change scheduled tasks.
   * 
   * @example
   * m-5b0vjqbiqu010XXXXXX
   */
  imageId?: string;
  interval?: number;
  ipSegments?: string[];
  /**
   * @remarks
   * Lock screen time for inactivity-based lock screen. Not supported for non-AD desktops.
   * 
   * @example
   * 1800
   */
  lockScreenTime?: number;
  notificationTime?: number;
  operationType?: string;
  processWhitelist?: string[];
  resetType?: string;
  startCronExpression?: string;
  timerOrder?: number;
  timezone?: string;
  triggerType?: string;
  verificationNotificationTime?: number;
  verificationTime?: number;
  static names(): { [key: string]: string } {
    return {
      appointmentTimer: 'AppointmentTimer',
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
   * Specifies whether to allow end users to configure scheduled tasks.
   * 
   * @example
   * true
   */
  allowClientSetting?: boolean;
  /**
   * @remarks
   * The Cron expression for the scheduled task.
   * 
   * > The Cron expression must be in UTC. For example, to schedule a task for 00:00 daily in China Standard Time (UTC+8), set this parameter to `0 0 16 ? * 1,2,3,4,5,6,7`.
   * 
   * @example
   * 0 0 16 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to force execution. If this parameter is set to `true`, the scheduled task runs regardless of the desktop and connection status.
   * 
   * @example
   * false
   */
  enforce?: boolean;
  /**
   * @remarks
   * The interval, in minutes.
   * 
   * @example
   * 10
   */
  interval?: number;
  notificationTime?: number;
  /**
   * @remarks
   * The operation to perform. This parameter applies only if `TimerType` is set to `NoConnect`.
   * 
   * @example
   * Shutdown
   */
  operationType?: string;
  /**
   * @remarks
   * The process whitelist for advanced inactivity detection. The scheduled task is not triggered if a process from this list is running.
   */
  processWhitelist?: string[];
  /**
   * @remarks
   * Specifies which disks to reset.
   * 
   * @example
   * RESET_TYPE_SYSTEM
   */
  resetType?: string;
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
   * The method for detecting inactivity.
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
   * The scheduled task configurations.
   */
  configTimers?: ModifyTimerGroupRequestConfigTimers[];
  /**
   * @remarks
   * The description of the configuration group.
   * 
   * @example
   * Scheduled task
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
   * Scheduled task
   */
  name?: string;
  /**
   * @remarks
   * The region ID. This feature is not tied to a specific region, but you must set this parameter to `cn-shanghai`.
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

