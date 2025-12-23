// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTimerGroupResponseBodyDataConfigTimersSegmentTimers extends $dara.Model {
  /**
   * @example
   * 1764660600967
   */
  appointmentTimer?: number;
  endCronExpression?: string;
  enforce?: boolean;
  /**
   * @example
   * m-5b0vjqbiqu010XXXXXX
   */
  imageId?: string;
  interval?: number;
  /**
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
  static names(): { [key: string]: string } {
    return {
      appointmentTimer: 'AppointmentTimer',
      endCronExpression: 'EndCronExpression',
      enforce: 'Enforce',
      imageId: 'ImageId',
      interval: 'Interval',
      lockScreenTime: 'LockScreenTime',
      notificationTime: 'NotificationTime',
      operationType: 'OperationType',
      processWhitelist: 'ProcessWhitelist',
      resetType: 'ResetType',
      startCronExpression: 'StartCronExpression',
      timerOrder: 'TimerOrder',
      timezone: 'Timezone',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentTimer: 'number',
      endCronExpression: 'string',
      enforce: 'boolean',
      imageId: 'string',
      interval: 'number',
      lockScreenTime: 'number',
      notificationTime: 'number',
      operationType: 'string',
      processWhitelist: { 'type': 'array', 'itemType': 'string' },
      resetType: 'string',
      startCronExpression: 'string',
      timerOrder: 'number',
      timezone: 'string',
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

export class DescribeTimerGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of resources that are bound to the configuration group.
   * 
   * @example
   * 50
   */
  bindCount?: number;
  /**
   * @remarks
   * The number of bound resources.
   */
  bindCountMap?: { [key: string]: number };
  /**
   * @remarks
   * The scheduled tasks.
   */
  configTimers?: DescribeTimerGroupResponseBodyDataConfigTimers[];
  /**
   * @remarks
   * The description of the configuration group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the configuration group.
   * 
   * @example
   * cg-75aazkg2tnqb2*****
   */
  groupId?: string;
  /**
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE_DESC
   */
  innerTimerDesc?: string;
  /**
   * @example
   * INNER_TIMER_10_MINUTES_HIBERNATE_NO_UPDATE
   */
  innerTimerName?: string;
  isBind?: boolean;
  isUpdate?: boolean;
  /**
   * @remarks
   * The name of the configuration group.
   */
  name?: string;
  /**
   * @remarks
   * The service type of the configuration group.
   * 
   * Valid value:
   * 
   * *   CLOUD_DESKTOP: the cloud computer service.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The state of the configuration group.
   * 
   * Valid values:
   * 
   * *   AVAILABLE: The configuration group is available.
   * *   UNAVAILABLE: The configuration group is deleted.
   * *   DELETING: The configuration group is being deleted.
   * *   UPDATING: The configuration group is being modified.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The type of the configuration group.
   * 
   * Valid value:
   * 
   * *   Timer: the scheduled task type.
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
   * The configuration group.
   */
  data?: DescribeTimerGroupResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
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

