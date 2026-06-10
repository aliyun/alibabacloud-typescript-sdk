// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTimerGroupResponseBodyDataConfigTimersSegmentTimers extends $dara.Model {
  /**
   * @remarks
   * The time to execute the scheduled task, specified as a Unix timestamp in milliseconds.
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
   * The image ID for a scheduled image-change task.
   * 
   * @example
   * m-5b0vjqbiqu010XXXXXX
   */
  imageId?: string;
  interval?: number;
  ipSegments?: string[];
  /**
   * @remarks
   * The duration of user inactivity, in seconds, before the screen locks. This feature applies only to cloud computers joined to an Active Directory (AD) domain.
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
   * @example
   * 0 0 16 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to force the execution of the scheduled task. If set to `true`, the task runs regardless of the cloud computer\\"s status or connection state.
   * 
   * @example
   * false
   */
  enforce?: boolean;
  /**
   * @remarks
   * The interval. Unit: minutes.
   * 
   * @example
   * 10
   */
  interval?: number;
  notificationTime?: number;
  /**
   * @remarks
   * The operation to perform when `TimerType` is set to `NoConnect`.
   * 
   * @example
   * Shutdown
   */
  operationType?: string;
  /**
   * @remarks
   * The process whitelist for smart detection. A scheduled task based on user inactivity does not run if a whitelisted process is running.
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
   * The detection method for user inactivity.
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
   * The number of resources associated with the timer group.
   * 
   * @example
   * 50
   */
  bindCount?: number;
  /**
   * @remarks
   * A map of associated resource counts, categorized by resource type.
   */
  bindCountMap?: { [key: string]: number };
  /**
   * @remarks
   * The configurations of the scheduled tasks.
   */
  configTimers?: DescribeTimerGroupResponseBodyDataConfigTimers[];
  /**
   * @remarks
   * The description of the timer group.
   * 
   * @example
   * Scheduled task
   */
  description?: string;
  /**
   * @remarks
   * The ID of the timer group.
   * 
   * @example
   * cg-75aazkg2tnqb2*****
   */
  groupId?: string;
  /**
   * @remarks
   * An internal code used by the frontend to display the description of a system-scheduled task.
   * 
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE_DESC
   */
  innerTimerDesc?: string;
  /**
   * @remarks
   * An internal code used by the frontend to display the name of a system-scheduled task.
   * 
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE
   */
  innerTimerName?: string;
  /**
   * @remarks
   * Indicates that resources cannot be bound to or unbound from this timer group.
   */
  isBind?: boolean;
  /**
   * @remarks
   * Indicates that this timer group cannot be modified.
   */
  isUpdate?: boolean;
  /**
   * @remarks
   * The name of the timer group.
   * 
   * @example
   * Scheduled task
   */
  name?: string;
  /**
   * @remarks
   * The product type that the timer group supports.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The status of the timer group.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The type of the timer group.
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
   * The details of the timer group.
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

