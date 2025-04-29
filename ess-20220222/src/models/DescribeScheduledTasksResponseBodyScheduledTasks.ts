// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduledTasksResponseBodyScheduledTasks extends $dara.Model {
  /**
   * @remarks
   * The description of the scheduled task.
   * 
   * @example
   * Test scheduled task.
   */
  description?: string;
  /**
   * @remarks
   * The expected number of instances in the scaling group. If you set `Scaling Method` to `Configure Number of Instances in Scaling Group`, you can specify this parameter.
   * 
   * @example
   * 10
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * The time window during which the scheduled task can be retried. Unit: seconds. Valid values: 0 to 21600.
   * 
   * @example
   * 600
   */
  launchExpirationTime?: number;
  /**
   * @remarks
   * The point in time at which the scheduled task is triggered.
   * 
   * @example
   * 2014-08-18T10:52Z
   */
  launchTime?: string;
  /**
   * @remarks
   * The maximum number of instances that must be contained in the scaling group. If you set `Scaling Method` to `Configure Number of Instances in Scaling Group`, you can specify this parameter.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum number of instances that must be contained in the scaling group. If you set `Scaling Method` to `Configure Number of Instances in Scaling Group`, you can specify this parameter.
   * 
   * @example
   * 0
   */
  minValue?: number;
  /**
   * @remarks
   * The end time of the recurrence of the scheduled task.
   * 
   * @example
   * 2014-08-20T16:55Z
   */
  recurrenceEndTime?: string;
  /**
   * @remarks
   * The recurring interval of the scheduled task.
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The frequency of recurrence of the scheduled task.
   * 
   * @example
   * 1
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The ID of the scaling group to which the scheduled task belongs.
   * 
   * @example
   * asg-bp1bo5tca4m56nap****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scaling rule of the scheduled task. A value is returned for this parameter only after you specify ScheduledActions.
   * 
   * @example
   * ari:acs:ess:cn-hangzhou:1406926474****:scalingrule/asr-bp1id5rhu8edp7kd****
   */
  scheduledAction?: string;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * @example
   * edRtShc57WGXdt8TlPbr****
   */
  scheduledTaskId?: string;
  /**
   * @remarks
   * The name of the scheduled task.
   * 
   * @example
   * scheduled****
   */
  scheduledTaskName?: string;
  /**
   * @remarks
   * Indicates whether the scheduled task is enabled.
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
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
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
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
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

