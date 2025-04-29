// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduledTaskRequest extends $dara.Model {
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
   * The expected number of instances in the scaling group if you specify the ScalingGroupId parameter.
   * 
   * > You must specify the `DesiredCapacity` parameter when you create a scaling group.
   * 
   * @example
   * 10
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * The time period during which the failed scheduled task is retried. Unit: seconds. Valid values: 0 to 1800.
   * 
   * Default value: 600.
   * 
   * @example
   * 600
   */
  launchExpirationTime?: number;
  /**
   * @remarks
   * The point in time at which the scheduled task is triggered. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time must be in UTC. You cannot enter a time point later than 90 days from the point in time at which the scheduled task is modified.
   * 
   * *   If you specify the `RecurrenceType` parameter, the task is repeatedly executed at the time point that is specified by the LaunchTime parameter.
   * *   If you do not specify the `RecurrenceType` parameter, the task is executed only once at the point in time that is specified by the LaunchTime parameter.
   * 
   * @example
   * 2014-08-18T10:52Z
   */
  launchTime?: string;
  /**
   * @remarks
   * The maximum number of instances in the scaling group if you specify the ScalingGroupId parameter.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum number of instances in the scaling group if you specify the ScalingGroupId parameter.
   * 
   * @example
   * 0
   */
  minValue?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The end time of the scheduled task. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time must be in UTC. You cannot enter a point in time that is later than 365 days from the point in time at which the scheduled task is modified.
   * 
   * @example
   * 2014-08-20T16:55Z
   */
  recurrenceEndTime?: string;
  /**
   * @remarks
   * The interval at which the scheduled task is repeated. Valid values:
   * 
   * *   Daily: The scheduled task is executed once every specified number of days.
   * *   Weekly: The scheduled task is executed on each specified day of the week.
   * *   Monthly: The scheduled task is executed on each specified day of the month.
   * *   Cron: The scheduled task is executed based on the specified cron expression.
   * 
   * After you modify the scheduled task, the values that you specify for the `RecurrenceType` and `RecurrenceValue` parameters must be valid at the same time.
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The number of recurrences of the scheduled task.
   * 
   * *   If you set the `RecurrenceType` parameter to `Daily`, you can specify only one value for this parameter. Valid values: 1 to 31.
   * *   If you set the `RecurrenceType` parameter to `Weekly`, you can specify multiple values for this parameter. Separate the values with commas (,). The values that correspond to Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday are 0, 1, 2, 3, 4, 5, and 6.``
   * *   If you set the `RecurrenceType` parameter to `Monthly`, you can specify two values in the `A-B` format for this parameter. Valid values of A and B: 1 to 31. B must be greater than or equal to A.
   * *   If you set the `RecurrenceType` parameter to `Cron`, you can specify a cron expression. A cron expression is written in UTC time and consists of the following fields: minute, hour, day, month, and week. The expression can contain the letters L and W and the following wildcard characters: commas (,), question marks (?), hyphens (-), asterisks (\\*), number signs (#), and forward slashes (/).
   * 
   * After you modify the scheduled task, the values that you specify for the `RecurrenceType` and `RecurrenceValue` parameters must be valid at the same time.
   * 
   * @example
   * 2
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the scaling group whose number of instances must be modified when the scheduled task is triggered. If you specify the `ScalingGroupId` parameter for a scheduled task, you must specify the minimum, maximum, or expected numbers of instances for a scaling group in the scheduled task. That is, you must specify at least one of the `MinValue`, `MaxValue`, and `DesiredCapacity` parameters.
   * 
   * > You cannot specify the `ScheduledAction` and `ScalingGroupId` parameters at the same time.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scaling rule that you want to execute when the scheduled task is triggered. Enter the ID of the scaling rule. To obtain the ID of a scaling rule, go to the scaling rule details page. If you specify `ScheduledAction`, you must select an existing scaling rule for the scheduled task.
   * 
   * >  You can specify only one of `ScheduledAction` and `ScalingGroupId`.
   * 
   * @example
   * ari:acs:ess:cn-hangzhou:14069264****:scalingrule/asr-bp12tcnol686y1ik****
   */
  scheduledAction?: string;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * This parameter is required.
   * 
   * @example
   * edRtShc57WGXdt8TlPbr****
   */
  scheduledTaskId?: string;
  /**
   * @remarks
   * The name of the scheduled task. The name must be 2 to 64 characters in length, and can contain letters, digits, underscores (_), hyphens (-), and periods (.). It must start with a letter or a digit. The name of the scheduled task must be unique in the region and within the Alibaba Cloud account.
   * 
   * @example
   * scheduled****
   */
  scheduledTaskName?: string;
  /**
   * @remarks
   * Specifies whether to enable the scheduled task. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  taskEnabled?: boolean;
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
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      scheduledAction: 'ScheduledAction',
      scheduledTaskId: 'ScheduledTaskId',
      scheduledTaskName: 'ScheduledTaskName',
      taskEnabled: 'TaskEnabled',
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
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      scheduledAction: 'string',
      scheduledTaskId: 'string',
      scheduledTaskName: 'string',
      taskEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

