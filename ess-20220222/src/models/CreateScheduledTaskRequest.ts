// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskRequestWarmPoolCapacityOptions extends $dara.Model {
  /**
   * @remarks
   * The expected number of prepared instances to be covered. The system maintains the sum of the current number of instances in the scaling group and the number of instances in the warm pool at this value. Default value: the maximum number of instances in the scaling group, which is specified by MaxSize.
   * 
   * @example
   * 5
   */
  desiredGroupPreparedCapacity?: number;
  /**
   * @remarks
   * The minimum number of instances in the warm pool. The system always retains at least this number of prepared instances in the warm pool to ensure that instances can be quickly added from the warm pool during scale-out. Default value: 0.
   * 
   * @example
   * 0
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      desiredGroupPreparedCapacity: 'DesiredGroupPreparedCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredGroupPreparedCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the scheduled task. The description must be 2 to 200 characters in length.
   * 
   * @example
   * Test scheduled task.
   */
  description?: string;
  /**
   * @remarks
   * The expected number of instances in the scaling group when the scaling method of the scheduled task is set to specifying the number of instances in the scaling group.
   * 
   * > The scaling group must support the expected number of instances. This means that DesiredCapacity must be specified when the scaling group is created.
   * 
   * @example
   * 10
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * The period within which the scheduled task retries after a trigger failure. Unit: seconds. Valid values: 0 to 1800.
   * 
   * Default value: 600.
   * 
   * @example
   * 600
   */
  launchExpirationTime?: number;
  /**
   * @remarks
   * The time at which the scheduled task is triggered. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time must be in UTC. You cannot specify a time that is later than 90 days from the creation date. 
   * 
   * - If RecurrenceType is specified, the time specified by this parameter is the default time for recurring execution.
   * 
   * - If RecurrenceType is not specified, the task is executed only once at the specified date and time.
   * 
   * @example
   * 2014-08-17T16:52Z
   */
  launchTime?: string;
  /**
   * @remarks
   * The maximum number of instances in the scaling group when the scaling method of the scheduled task is set to specifying the number of instances in the scaling group.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum number of instances in the scaling group when the scaling method of the scheduled task is set to specifying the number of instances in the scaling group.
   * 
   * @example
   * 0
   */
  minValue?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The end time of the scheduled task that is executed repeatedly. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time must be in UTC. You cannot specify a time that is later than 365 days from the creation date.
   * 
   * @example
   * 2014-08-17T16:55Z
   */
  recurrenceEndTime?: string;
  /**
   * @remarks
   * The recurrence type of the scheduled task. Valid values: 
   * - Daily: The scheduled task is executed once every specified number of days. 
   * - Weekly: The scheduled task is executed on specified days of each week. 
   * - Monthly: The scheduled task is executed on specified days of each month. 
   * - Cron: The scheduled task is executed based on the specified cron expression. 
   * 
   * You must specify both RecurrenceType and RecurrenceValue.
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The recurrence value of the scheduled task. 
   * 
   * - If RecurrenceType is set to Daily, you can specify only one value. Valid values: 1 to 31. 
   * - If RecurrenceType is set to Weekly, you can specify multiple values separated by commas (,). For example, the values for Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday are 0,1,2,3,4,5,6.  
   * - If RecurrenceType is set to Monthly, the format is A-B. Valid values of A and B: 1 to 31. B must be greater than or equal to A. 
   * - If RecurrenceType is set to Cron, the value represents UTC time and supports a five-field expression for minutes, hours, days, months, and days of the week. The expression supports the following wildcards: commas (,), question marks (?), hyphens (-), asterisks (*), number signs (#), forward slashes (/), L, and W.  
   * 
   * You must specify both RecurrenceType and RecurrenceValue.
   * 
   * @example
   * 1
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The ID of the region to which the scheduled task belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group in which you want to modify the number of instances or adjust the warm pool capacity when the scheduled task is triggered.
   * 
   * After you specify ScalingGroupId, the scaling method of the scheduled task is set to specifying the number of instances in the scaling group or adjusting the warm pool capacity.
   * 
   * - To specify the number of instances in the scaling group, you must specify a value for at least one of the following parameters: MinValue, MaxValue, and DesiredCapacity.
   * - To adjust the warm pool capacity, you must configure WarmPoolCapacityOptions.
   * 
   * > You cannot specify both ScheduledAction and ScalingGroupId at the same time.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The unique identifier of the scaling rule to be executed when the scheduled task is triggered.
   * 
   * After you specify ScheduledAction, the scaling method of the scheduled task is set to selecting an existing scaling rule. You cannot specify both ScheduledAction and ScalingGroupId at the same time.
   * 
   * @example
   * ari:acs:ess:cn-hangzhou:140692647****:scalingrule/asr-bp12tcnol686y1ik****
   */
  scheduledAction?: string;
  /**
   * @remarks
   * The name of the scheduled task. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). It must start with a letter, digit, or Chinese character. The name must be unique within the same region and Alibaba Cloud account. 
   * 
   * Default value: the value of ScheduledTaskId.
   * 
   * @example
   * scheduled****
   */
  scheduledTaskName?: string;
  /**
   * @remarks
   * Specifies whether to enable the scheduled task. Valid values: 
   * - true: enables the task.
   * - false: disables the task.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  taskEnabled?: boolean;
  /**
   * @remarks
   * The warm pool capacity configurations of the scaling group. This parameter takes effect only when a warm pool is configured for the scaling group.
   * 
   * > When you configure this parameter, you must specify ScalingGroupId.
   */
  warmPoolCapacityOptions?: CreateScheduledTaskRequestWarmPoolCapacityOptions;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      desiredCapacity: 'DesiredCapacity',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      scheduledAction: 'ScheduledAction',
      scheduledTaskName: 'ScheduledTaskName',
      taskEnabled: 'TaskEnabled',
      warmPoolCapacityOptions: 'WarmPoolCapacityOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      desiredCapacity: 'number',
      launchExpirationTime: 'number',
      launchTime: 'string',
      maxValue: 'number',
      minValue: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      scheduledAction: 'string',
      scheduledTaskName: 'string',
      taskEnabled: 'boolean',
      warmPoolCapacityOptions: CreateScheduledTaskRequestWarmPoolCapacityOptions,
    };
  }

  validate() {
    if(this.warmPoolCapacityOptions && typeof (this.warmPoolCapacityOptions as any).validate === 'function') {
      (this.warmPoolCapacityOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

