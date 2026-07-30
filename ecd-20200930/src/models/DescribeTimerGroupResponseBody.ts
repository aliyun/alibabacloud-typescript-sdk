// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTimerGroupResponseBodyDataConfigTimersSegmentTimers extends $dara.Model {
  /**
   * @remarks
   * The specified time point for the fixed-time scheduled task. After this parameter is specified, the scheduled task is executed at the specified time point.
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
   * The image ID specified for the image change scheduled task.
   * 
   * @example
   * m-5b0vjqbiqu010XXXXXX
   */
  imageId?: string;
  interval?: number;
  ipSegments?: string[];
  /**
   * @remarks
   * The lock screen time point for the no-operation lock screen feature. This feature cannot be used for non-AD desktops.
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

export class DescribeTimerGroupResponseBodyDataConfigTimers extends $dara.Model {
  /**
   * @remarks
   * Specifies whether end users are allowed to configure scheduled tasks on their own.
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
   * Specifies whether to forcefully execute the task. A value of true indicates that the desktop and connection status checks are ignored and the scheduled task is forcefully executed.
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
  notificationTime?: number;
  /**
   * @remarks
   * The type of the disconnect scheduled task.
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
   * The reset type of the reset scheduled task.
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
   * @example
   * TimerBoot
   */
  timerType?: string;
  /**
   * @remarks
   * The trigger configuration type of the no-operation scheduled task.
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
   * The quantity information of resources bound to the configuration.
   */
  bindCountMap?: { [key: string]: number };
  /**
   * @remarks
   * The configuration information of scheduled tasks, in list format.
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
   * The mapping code for the system scheduled task description, used for frontend display.
   * 
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE_DESC
   */
  innerTimerDesc?: string;
  /**
   * @remarks
   * The mapping code for the system scheduled task name, used for frontend display.
   * 
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE
   */
  innerTimerName?: string;
  /**
   * @remarks
   * Used for system scheduled task checks. The current scheduled task does not support unbinding or binding.
   */
  isBind?: boolean;
  /**
   * @remarks
   * Used for system scheduled task checks. The current scheduled task does not support modification.
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
   * The type of the configuration group.
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

