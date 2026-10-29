// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTimerGroupResponseBodyDataConfigTimersSegmentTimers extends $dara.Model {
  /**
   * @remarks
   * Specifies the time to execute the scheduled task. After this parameter is specified, the scheduled task is executed at the specified time.
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
   * The cron expression for ending the execution of the scheduled task.
   * 
   * @example
   * 0 0 18 ? * 1-5
   */
  endCronExpression?: string;
  /**
   * @remarks
   * Specifies whether to forcibly execute the task. A value of true indicates that the scheduled task is forcibly executed, ignoring the desktop and connection status checks.
   */
  enforce?: boolean;
  /**
   * @remarks
   * Specifies the ID of the image to be replaced. This parameter is used for scheduled image replacement tasks.
   * 
   * @example
   * m-5b0vjqbiqu010XXXXXX
   */
  imageId?: string;
  /**
   * @remarks
   * The time interval, in minutes.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The list of effective IP CIDR blocks.
   */
  ipSegments?: string[];
  /**
   * @remarks
   * Specifies the duration of inactivity before the screen is locked, in minutes. This parameter is used for the no-operation lock screen feature and is supported only by AD cloud desktops.
   * 
   * @example
   * 5
   */
  lockScreenTime?: number;
  /**
   * @remarks
   * The advance notification time before the scheduled task is executed, in seconds.
   * 
   * @example
   * 300
   */
  notificationTime?: number;
  /**
   * @remarks
   * The operation type of the scheduled task. Currently, only disconnection scheduled tasks are supported.
   * 
   * @example
   * Shutdown
   */
  operationType?: string;
  /**
   * @remarks
   * The patch ID.
   * 
   * @example
   * KB5082063
   */
  patchId?: string;
  /**
   * @remarks
   * The process whitelist for the intelligent evaluation of no-operation scheduled tasks. If a specified process is running, the no-operation scheduled task is not triggered.
   */
  processWhitelist?: string[];
  /**
   * @remarks
   * The reset type, which determines whether to reset and the scope of cloud disks to be reset.
   * 
   * @example
   * 1
   */
  resetType?: string;
  /**
   * @remarks
   * The cron expression for starting the execution of the scheduled task.
   * 
   * @example
   * 0 0 8 ? * 1-5
   */
  startCronExpression?: string;
  /**
   * @remarks
   * The execution sequence number of the timer.
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
   * The advance notification time before execution verification, in seconds.
   * 
   * @example
   * 300
   */
  verificationNotificationTime?: number;
  /**
   * @remarks
   * The verification wait duration, in seconds.
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

export class DescribeTimerGroupResponseBodyDataConfigTimers extends $dara.Model {
  /**
   * @remarks
   * Specifies whether end users are allowed to configure scheduled tasks.
   * 
   * @example
   * true
   */
  allowClientSetting?: boolean;
  /**
   * @remarks
   * The cron expression of the scheduled task.
   * 
   * @example
   * 0 0 16 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to forcibly execute the task. A value of true indicates that the scheduled task is forcibly executed, ignoring the desktop and connection status checks.
   * 
   * @example
   * false
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
  /**
   * @remarks
   * The advance notification time before the scheduled task is executed, in seconds.
   * 
   * @example
   * 300
   */
  notificationTime?: number;
  /**
   * @remarks
   * The type of the disconnection scheduled task.
   * 
   * @example
   * Shutdown
   */
  operationType?: string;
  /**
   * @remarks
   * The process whitelist for the intelligent evaluation of no-operation scheduled tasks. If a specified process is running, the no-operation scheduled task is not triggered.
   */
  processWhitelist?: string[];
  /**
   * @remarks
   * The reset type for the scheduled reset task.
   * 
   * @example
   * RESET_TYPE_SYSTEM
   */
  resetType?: string;
  /**
   * @remarks
   * The list of segment timer configurations.
   */
  segmentTimers?: DescribeTimerGroupResponseBodyDataConfigTimersSegmentTimers[];
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

export class DescribeTimerGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of resources bound to the configuration group.
   * 
   * @example
   * 50
   */
  bindCount?: number;
  /**
   * @remarks
   * The information about the number of resources bound to the configuration.
   */
  bindCountMap?: { [key: string]: number };
  /**
   * @remarks
   * The configuration information of scheduled tasks.
   */
  configTimers?: DescribeTimerGroupResponseBodyDataConfigTimers[];
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
   * @example
   * cg-75aazkg2tnqb2*****
   */
  groupId?: string;
  /**
   * @remarks
   * Used for frontend display. The description of the system scheduled task uses a code.
   * 
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE_DESC
   */
  innerTimerDesc?: string;
  /**
   * @remarks
   * Used for frontend display. The name mapping of the system scheduled task uses a code.
   * 
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE
   */
  innerTimerName?: string;
  /**
   * @remarks
   * Used for system scheduled task checks. The current scheduled task cannot be bound or unbound.
   */
  isBind?: boolean;
  /**
   * @remarks
   * Used for system scheduled task checks. The current scheduled task cannot be modified.
   */
  isUpdate?: boolean;
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
   * The product type used by the configuration group.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The status of the configuration group.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The configuration group type.
   * 
   * @example
   * Timer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindCount: 'BindCount',
      bindCountMap: 'BindCountMap',
      configTimers: 'ConfigTimers',
      description: 'Description',
      groupId: 'GroupId',
      innerTimerDesc: 'InnerTimerDesc',
      innerTimerName: 'InnerTimerName',
      isBind: 'IsBind',
      isUpdate: 'IsUpdate',
      name: 'Name',
      productType: 'ProductType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindCount: 'number',
      bindCountMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      configTimers: { 'type': 'array', 'itemType': DescribeTimerGroupResponseBodyDataConfigTimers },
      description: 'string',
      groupId: 'string',
      innerTimerDesc: 'string',
      innerTimerName: 'string',
      isBind: 'boolean',
      isUpdate: 'boolean',
      name: 'string',
      productType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.bindCountMap) {
      $dara.Model.validateMap(this.bindCountMap);
    }
    if(Array.isArray(this.configTimers)) {
      $dara.Model.validateArray(this.configTimers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTimerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration group information.
   */
  data?: DescribeTimerGroupResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeTimerGroupResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

