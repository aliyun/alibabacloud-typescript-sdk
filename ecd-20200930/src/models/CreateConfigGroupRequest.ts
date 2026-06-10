// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigGroupRequestConfigTimersSegmentTimers extends $dara.Model {
  /**
   * @remarks
   * The execution time for a one-time scheduled task, specified as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1764660600967
   */
  appointmentTimer?: number;
  createSnapshot?: boolean;
  endCronExpression?: string;
  enforce?: boolean;
  /**
   * @remarks
   * The image ID for a scheduled task that changes the image of a cloud desktop.
   * 
   * @example
   * m-5b0vjqbiqu010XXXXXX
   */
  imageId?: string;
  interval?: number;
  ipSegments?: string[];
  /**
   * @remarks
   * The amount of inactive time, in seconds, before the screen automatically locks. This parameter applies only to Active Directory desktops.
   * 
   * @example
   * 1800
   */
  lockScreenTime?: number;
  notificationTime?: number;
  operationType?: string;
  /**
   * @example
   * KB5082063
   */
  patchId?: string;
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
      createSnapshot: 'CreateSnapshot',
      endCronExpression: 'EndCronExpression',
      enforce: 'Enforce',
      imageId: 'ImageId',
      interval: 'Interval',
      ipSegments: 'IpSegments',
      lockScreenTime: 'LockScreenTime',
      notificationTime: 'NotificationTime',
      operationType: 'OperationType',
      patchId: 'PatchId',
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
      patchId: 'string',
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

export class CreateConfigGroupRequestConfigTimers extends $dara.Model {
  /**
   * @remarks
   * Whether to allow end users to configure the scheduled task.
   * 
   * @example
   * true
   */
  allowClientSetting?: boolean;
  /**
   * @remarks
   * The cron expression for the scheduled task.
   * 
   * >Notice: 
   * 
   * The cron expression is based on UTC. For example, to run a task at 00:00 China Standard Time (UTC+8) every day, set this parameter to `0 0 16 ? * 1,2,3,4,5,6,7`.
   * 
   * @example
   * 0 0 16 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Whether to forcefully execute the scheduled task.
   * 
   * @example
   * true
   */
  enforce?: boolean;
  /**
   * @remarks
   * The time interval, in minutes.
   * 
   * @example
   * 10
   */
  interval?: number;
  notificationTime?: number;
  /**
   * @remarks
   * The operation to perform for the scheduled task. This parameter is valid only when `TimerType` is set to `NoConnect`.
   * 
   * @example
   * Shutdown
   */
  operationType?: string;
  /**
   * @remarks
   * The process whitelist for smart detection. If a process from this whitelist is running, the inactivity-based scheduled task does not run.
   */
  processWhitelist?: string[];
  /**
   * @remarks
   * The reset type for the cloud desktop.
   * 
   * @example
   * RESET_TYPE_SYSTEM
   */
  resetType?: string;
  segmentTimers?: CreateConfigGroupRequestConfigTimersSegmentTimers[];
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * This parameter is required.
   * 
   * @example
   * TIMER_BOOT
   */
  timerType?: string;
  /**
   * @remarks
   * The trigger condition for inactivity-based scheduled tasks.
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
      segmentTimers: { 'type': 'array', 'itemType': CreateConfigGroupRequestConfigTimersSegmentTimers },
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

export class CreateConfigGroupRequest extends $dara.Model {
  /**
   * @remarks
   * An array of scheduled task configurations.
   */
  configTimers?: CreateConfigGroupRequestConfigTimers[];
  /**
   * @remarks
   * The description of the configuration group.
   * 
   * @example
   * Scheduled task description content
   */
  description?: string;
  /**
   * @remarks
   * The name of the configuration group.
   * 
   * This parameter is required.
   * 
   * @example
   * Scheduled task group
   */
  name?: string;
  /**
   * @remarks
   * The product to which the configuration group applies.
   * 
   * This parameter is required.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The region ID. This feature is not region-specific. You must set this parameter to cn-shanghai.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the configuration group.
   * 
   * This parameter is required.
   * 
   * @example
   * Timer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configTimers: 'ConfigTimers',
      description: 'Description',
      name: 'Name',
      productType: 'ProductType',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTimers: { 'type': 'array', 'itemType': CreateConfigGroupRequestConfigTimers },
      description: 'string',
      name: 'string',
      productType: 'string',
      regionId: 'string',
      type: 'string',
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

